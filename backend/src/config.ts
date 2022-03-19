import * as dotenv from 'dotenv'
import * as path from 'path'

const env = process.env.NODE_ENV || 'dev'

const DOC_DIR = process.cwd()+'/../../tapp-tutor';
const HTTPS_CERT_DIR = process.cwd()+'/../letsencrypt';

try{
    const configFilePath = path.resolve('', process.cwd() + `/env/${env}.env`)
    const config = dotenv.config({ path: configFilePath })

    console.log(config.parsed)
}catch(e){
    console.error(e)
}

export {
    DOC_DIR,
    HTTPS_CERT_DIR,
}