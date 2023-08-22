contract SmartContract1 {
    uint storedData;
    address payable[] recipient;
    constructor() public {
    }
    function set(uint x) public {
    }
    function get() public view returns(uint retVal){
    return storedData;
    }
  }
  //deploy code
  const slip1 = artifacts.require("./Slip1.sol");
  module.exports = function(deployer) {
  deployer.deploy(Slip1);
  };