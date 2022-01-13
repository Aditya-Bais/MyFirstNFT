const MyFirstNFT = artifacts.require("MyFirstNFT");

module.exports = function(deployer) {
    deployer.deploy(MyFirstNFT);
};