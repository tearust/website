import Base from '../Base';
import {crypto, _} from '../../utility';

import * as fs from 'fs';

export default class extends Base {

  async action(){
    const keypari = crypto.create_ed25519_keypair();

    const file_content = fs.readFileSync(process.cwd()+'/src/tpl/docker-compose.tpl.yml', {
      encoding: 'utf-8'
    });

    const rs_text = _.template(file_content)({
      tea_id_pub: keypari.pub,
      tea_id_pri: keypari.pri,
    })

    return this.result(1, rs_text)
  }
}