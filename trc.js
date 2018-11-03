var abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "betForTrue",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "betForFake",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "showBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "howManyBets",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "terminateTheBet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
var address = "0xCD7C24a67AB3B8F782B3e8cdFA08305d71DC332e"; // コントラクトアドレス
/*var contract = web3.eth.contract(abi).at(address);
window.onload = function() {
  var contract = web3.eth.contract(abi).at(address);
  contract.get((error, result) => {
    document.getElementById("contract_result").textContent = result;
  });
  contract.showBalance((error, result) => {
    document.getElementById("idBalance").textContent = result;
  });
  contract.howManyBets((error, result) => {
    document.getElementById("idhowManyBets").textContent = result;
  });
};
*/

function howManyBets2() {
  var contract = web3.eth.contract(abi).at(address);
  contract.howManyBets((error, result) => {
    document.getElementById("idhowManyBets2").textContent = result;
  });
}

function pleaseShowMeBalance() {
  var contract = web3.eth.contract(abi).at(address);
  contract.showBalance(function(error, result)  {
    document.getElementById("idBalance").textContent = result;
  });
}


function IBetForTrue() {
  var contract = web3.eth.contract(abi).at(address);
  contract.betForTrue({value:1000000000000000000}, function(error, result) {
    document.getElementById("idForTrueAddress").textContent = result;
  });
}

function IBetForFake() {
  var contract = web3.eth.contract(abi).at(address);
  contract.betForFake({value:1000000000000000000}, function(error, result) {
    document.getElementById("idForFakeAddress").textContent = result;
  });
}

function ITerminateTheBet() {
  var contract = web3.eth.contract(abi).at(address);
  contract.terminateTheBet( function(error, result) {
    document.getElementById("idWhoTerminatedTheBet").textContent = result;
  });
}


//function  howManyBetsButton() {
//  var contract2 = web3.eth.contract(abi).at(address);
//  contract2.getAddress((error, result2) => {
//  document.getElementById("idhowManyBets").textContent = result2;
//});
//}


var isAddress = web3.isAddress("0x8888f1f195afa192cfee860698584c030f4c9db1");
var listening = web3.net.listening;
var peerCount = web3.net.peerCount;
