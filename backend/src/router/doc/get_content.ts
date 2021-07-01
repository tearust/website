import Base from '../Base';
import {_, formatObsidianToMd} from '../../utility';
import DocService from '../../service/DocService';

export default class extends Base {

  async action(){
    const ds = this.buildService(DocService);

    const path = this.getParam('path');
    let rs = await ds.getMdFileContent(decodeURIComponent(path));

    // console.log(111, format);
    rs = formatObsidianToMd(rs, {
      path: decodeURIComponent(path),
    });

    return this.result(1, rs);
    
  }
}