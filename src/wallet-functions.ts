import Web3 from 'web3';

let web3;
if('web3' in window) {
  web3 = new Web3(window['web3'].currentProvider);
}

export function hasWallet() {
  return web3 !== undefined && web3.eth.defaultAccount !== undefined;
}

export function getAddress() {
  return web3.eth.defaultAccount;
}
