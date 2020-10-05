import Base from '../Base';
import create_ed25519_keypari from './create_ed25519_keypair';
import get_docker_compose from './get_docker_compose';

export default Base.setRouter([
  {
    path : '/create_ed25519_keypari',
    router : create_ed25519_keypari,
    method : 'get'
  },
  {
    path: '/get_docker_compose',
    router: get_docker_compose,
    method: 'all'
  }
  
])