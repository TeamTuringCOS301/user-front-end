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
  /*console.log(web3);
  console.log(web3.eth.accounts[0]);
  web3.eth.getAccounts().then(console.log);
  return new Promise((resolve, reject) => {
    if(web3!== undefined)
    {

      web3.eth.getAccounts().then((val) =>
      {
        console.log(val.length);
        if(val.length > 0)
        {
          alert("aaah");
          resolve(true);
        }
        else
        {
          resolve(false);
        }
      },
      (error) =>
      {
        console.log(error);
      });
    }
    else
    {
      resolve(false);
    }
  });*/
  return (web3 !== undefined && web3.eth.accounts.length > 0)
}

export function getAddress() {
  init();
  return web3.eth.accounts[0];
  /*return new Promise((resolve, reject) => {
    web3.eth.getAccounts().then((val) =>
    {
      resolve(val[0]);
    },
    (error) =>
    {
      reject(error);
    });
  });*/
}

export function buyReward(reward: any, http: Http) {
  init();
  http.get('/contract').subscribe((data) => {
    const {abi, address} = data.json();
    web3.eth.contract(abi).at(address)
      .buyReward(reward.id, reward.coinValue, {from: web3.eth.accounts[0]});
  }, (error) => {
    console.error(error);
  });
}
