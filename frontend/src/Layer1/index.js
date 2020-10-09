
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import _ from 'lodash';
import types from './types';
const rpc = require('./rpc');
import BN from 'bn.js';
import request from '../request';

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

  async hydrant(target_address){
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


  handle_events(events){

  }


}

export default Layer1;

