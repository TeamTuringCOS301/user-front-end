import { Http } from './http-api';
import Web3 from 'web3';

let web3;

function init() {
  if(web3 === undefined && 'web3' in window) {
    web3 = new Web3(window['web3'].currentProvider);
  }
}

export function hasWallet() {
  init();
  return (web3 !== undefined && web3.eth.accounts.length > 0)
}

export function getAddress() {
  init();
  return web3.eth.accounts[0];
}

export function buyReward(reward: any, http: Http) {
  init();
  http.get('/contract').subscribe((data) => {
    const {abi, address} = data.json();
    web3.eth.contract(abi).at(address)
      .buyReward(reward.id, reward.coinValue, {from: web3.eth.accounts[0], gas: 55000}, (error, result) => {
        if(error) {
          console.error(error);
        }
      });
  }, (error) => {
    console.error(error);
  });
}

export function sendCoin(sendTransaction: any, http: Http) {
  init();
  http.get('/contract').subscribe((data) => {
    const {abi, address} = data.json();
    web3.eth.contract(abi).at(address)
      .transfer(sendTransaction.address, sendTransaction.amount, {from: web3.eth.accounts[0]}, (error, result) => {
        if(error) {
          console.error(error);
        }
      });
  }, (error) => {
    console.error(error);
  });
}
