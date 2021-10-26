// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "hardhat/console.sol";

contract MakoToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Mako", "MAKO") {
        _mint(msg.sender, initialSupply);
    }
}