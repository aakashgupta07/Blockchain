const SHA256 = require("crypto-js/sha256");
class Block
{
constructor(index,timestamp,transaction, data, previousHash = '')
{
this.index=index;
this.timestamp = timestamp;
this.transaction=transaction;
this.data = data;
this.previousHash = previousHash;
this.hash=this.calculateHash()
}
calculateHash()
{
return
SHA256(this.index+this.previous+this.timestamp+JSON.stringify(this.data)).to
String();
}
}
class Blockchain
{
constructor()
{

this.chain = [this.createGenesisBlock()];
}
createGenesisBlock()
{
return new Block(0,"01/06/2020","Genesis block","0");
}
getLatestBlock()
{
return this.chain[this.chain.length - 1];
}
addBlock(newBlock)
{
newBlock.previousHash=this.getLatestBlock().hash;
newBlock.hash=newBlock.calculateHash();
this.chain.push(newBlock);
}
}
class Transaction
{
constructor(fromAddress, toAddress, amount)
{
this.fromAddress = fromAddress;
this.toAddress = toAddress;
this.amount = amount;
}
createTransaction(transaction)
{

this.pendingTransactions.push(transaction);
}
}
let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1,"20/06/2020", { fromAdeess:"pune",
toAddress:"Bhor",amount: 4 }));
savjeeCoin.addBlock(new Block(2,"30/06/2020", { fromAdeess:"Satara",
toAddress:"Bhor",amount: 4 }));
console.log(JSON.stringify(savjeeCoin, null, 4));