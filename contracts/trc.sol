pragma solidity ^0.4.0;
contract trc {
    struct forTrueBettor{
        address forTrueBettorAddress;
    }
    struct forFakeBettor{
        address forFakeBettorAddress;
    }
    uint numberOfTrueBettors = 0;
    uint numberOfFakeBettors = 0;
    struct trcproposer{
        uint voteCount;
    }

    mapping(address => forTrueBettor) forTrueBettors;
    mapping(address => forFakeBettor) forFakeBettors;
    address trcProposerAddress;
    address[] arrayOfForTrueBettorAddress;
    address[] arrayOfForFakeBettorAddress;

    function get() public pure returns (string) {
      return "Hello World!";
    }
    function betForTrue() payable public{
        require(msg.value == 1 ether);
        arrayOfForTrueBettorAddress.push(msg.sender);
        numberOfTrueBettors +=1;
    }
    function betForFake() payable public{
        require(msg.value == 1 ether);

        arrayOfForFakeBettorAddress.push(msg.sender);
        numberOfFakeBettors +=1;
    }

    function showBalance() public view returns (uint){
        return address(this).balance;

    }
    function howManyBets() public view  returns  (uint,uint){
        return (numberOfFakeBettors,numberOfTrueBettors);
    }
    function getAddress() public view  returns (address){
        return arrayOfForTrueBettorAddress[0] ;
    }
    function terminateTheBet() public {

        if (numberOfFakeBettors > numberOfTrueBettors){
            uint rewardAmout = address(this).balance / numberOfFakeBettors ;
            for (uint i = 0; i < numberOfFakeBettors; i++){
                arrayOfForFakeBettorAddress[i].transfer(rewardAmout);
            }
        }
        if (numberOfFakeBettors < numberOfTrueBettors){
            uint rewardAmout2 = address(this).balance / numberOfTrueBettors ;
            for (uint l = 0; l < numberOfTrueBettors; l++){
                arrayOfForTrueBettorAddress[l].transfer(rewardAmout2);
            }
        }
        rewardAmout = 0;
        rewardAmout2 = 0;
        delete arrayOfForTrueBettorAddress;
        delete arrayOfForFakeBettorAddress;
        numberOfTrueBettors = 0;
        numberOfFakeBettors = 0;





    }
}
