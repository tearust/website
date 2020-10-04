import axios from 'axios';
import _ from 'lodash';
import util from './util';

const BASE_URL = 'http://127.0.0.1:3001/api';

//set request base url
const _axios = axios.create({
  baseURL: BASE_URL,
});

// set request header 
_axios.interceptors.request.use((config)=>{
  const token = util.getCookie('token');
  config.headers['token'] = token;
  return config;
});

// set request response
_axios.interceptors.response.use((res)=>{
  if(res.data){
    if(res.data.code > 0){
      return Promise.resolve(res.data.data);
    }
    else{
      return Promise.reject(res.data);
    }
  }
}, (error)=>{
  return Promise.reject(error);
});

// declare each request function
const F = {
  
  
};


export default F;