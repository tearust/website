
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import _ from 'lodash';
import types from './types';
const rpc = require('./rpc');
import BN from 'bn.js';
import request from '../request';
import forge from 'node-forge';

class Layer1 {
  constructor(){
    this.info = {};
    this.api = null;
  }
  getDefaultAccount(){
    const ac = this.info.account;
    const keyring = new Keyring({ type: 'sr25519' });
    const rs = keyring.addFromUri(`//${ac}`, { name: `${ac} default` });
    return rs;
  }
  async init(){
    const info = await request.get_layer1_info();
    this.info = info;

    const provider = new WsProvider(this.info.url);
    const api = await ApiPromise.create({
      provider,
      types,
      rpc,
    });
    this.api = api;

    await cryptoWaitReady();

    this.api.query.system.events((events) => {
      this.handle_events(events)
    });
  }


  asUnit(){
    // return 1;
    const yi = new BN('100000000', 10);
    const million = new BN('10000000', 10);
    const unit = yi.mul(million);

    return unit;
  }

  async getAccountBalance(account){
    let { data: { free: previousFree }, nonce: previousNonce } = await this.api.query.system.account(account);

    const free = parseInt(previousFree.toString(), 10) / this.asUnit();
    return Math.floor(free*10000)/10000;
  }

  async faucet(target_address){
    const da = this.getDefaultAccount();
    const total = new BN((1000*this.asUnit()).toString(), 10);
    const transfer = this.api.tx.balances.transfer(target_address, total);

    return new Promise((resolve)=>{
      transfer.signAndSend(da, (result) => {
        console.log(`Current status is ${result.status}`);
  
        if (result.status.isInBlock) {
          console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
          result.events.forEach(({ event: { data, method, section }, phase }) => {
            console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
          });
        } else if (result.status.isFinalized) {
          console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
          resolve(true);
        }
      });
    });
    
  }

  getDefaultAccount(){
    const keyring = new Keyring({ type: 'sr25519' });
    const ac = keyring.addFromUri(`//Alice`, { name: `Alice default` });
    return ac;
  }

  async updateManifest(tea_id, cid, cb){
    const teaId = '0x'+tea_id;
    const layer1_account = this.getDefaultAccount();

    const next = async () => {
      await this.api.tx.tea.updateManifest(teaId, cid)
      .signAndSend(layer1_account, ({ events = [], status }) => {
        console.log("signAndSend...");
        if (status.isInBlock) {
          console.log('Included at block hash', status.asInBlock.toHex())
          console.log('Events:')
          events.forEach(({ event: { data, method, section }, phase }) => {
            console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString())
          })
        } else if (status.isFinalized) {
          console.log('Finalized block hash', status.asFinalized.toHex());

          cb();
        }
      });
    };

    await this.api.tx.tea.addNewNode(teaId)
      .signAndSend(layer1_account, ({ events = [], status }) => {
      if (status.isInBlock) {
            console.log('Add new node with teaId ' + teaId)
            next();
          } else {
            console.log('Status of transfer: ' + status.type)
          }

          events.forEach(({ phase, event: { data, method, section } }) => {
            console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString())
      })
    });

  }

  async getCurrentManifestCid(tea_id){
    const sampleTeaId = '0x'+tea_id;

    const cid_obj = await this.api.query.tea.manifest(sampleTeaId);
    const cid = cid_obj.toHuman() || null;

    return cid;
  }


  handle_events(events){

  }


}

export default Layer1;

