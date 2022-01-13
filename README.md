# MyFirstNFT
A basic smart contract for creating NFT and transfering it.

This project is made using Truffle suit and Ganache.

Smart contract provides two basic functionality.
1. Creating NFT for domain names
  mint() function takes domain name string as input and creates ERC721 standard token NFT.

2. Transfering NFTs
  transferFrom() function takes three  parameters (sender's address, receiver's address, token ID).
  
  
ERC721Full.sol file is implementation of ERC721 token standard.This file is taken from OpenZeppelin. (https://github.com/OpenZeppelin/openzeppelin-contracts)

