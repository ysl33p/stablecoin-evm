var FiatToken = artifacts.require("./FiatToken.sol");

module.exports = function(deployer, network, accounts) {
  var a = accounts[0];
  var s;
  var ft;
  return deployer.deploy(FiatToken, "0x0", "USDC", "USDC", "USD", 6,
    a, a, a, a, a);
};
