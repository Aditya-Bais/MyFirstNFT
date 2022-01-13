// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./ERC721Full.sol";

contract MyFirstNFT is ERC721Full {
  
  string[] public domains;
  mapping(string=>bool) _domainAlreadyRegistered;

  constructor() ERC721Full('MyDomain','DomainSymbol') public {
  }

  function mint(string memory _domain) public{
    require(!_domainAlreadyRegistered[_domain]);
    uint _id = domains.push(_domain);
    _mint(msg.sender,_id);
    _domainAlreadyRegistered[_domain]=true;
  }

  function tokensOfOwner(address _owner) public view returns (uint256[] memory){
    return _tokensOfOwner(_owner);
  }
  function transferFrom(address from, address to, uint256 tokenId) public{
    _transferFrom(from,to,tokenId);
  }

}
