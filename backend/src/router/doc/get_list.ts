import Base from '../Base';
import {_} from '../../utility';
import DocService from '../../service/DocService';

export default class extends Base {

  async action(){
    const ds = this.buildService(DocService);

    const rs = await ds.getMdFileList();


    console.log(111, JSON.stringify(rs));

    return this.result(1, rs);
    
  }
}