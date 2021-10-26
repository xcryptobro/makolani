// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "hardhat/console.sol";

contract LaniToken is ERC721, Ownable {
  constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol)
  {}
}