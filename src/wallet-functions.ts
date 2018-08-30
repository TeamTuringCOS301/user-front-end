import Web3 from 'web3';

let web3;

function init() {
  if(web3 === undefined && 'web3' in window) {
    web3 = new Web3(window['web3'].currentProvider);
  }
}

export function hasWallet() {
  init();
  return web3 !== undefined && web3.eth.accounts.length > 0;
}

export function getAddress() {
  init();
  return web3.eth.accounts[0];
}
