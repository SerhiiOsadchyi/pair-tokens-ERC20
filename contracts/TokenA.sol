// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./openzeppelin-v4.3.2/token/ERC20/ERC20.sol";
import "./openzeppelin-v4.3.2/access/Ownable.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";;

/// @dev 1000 tokens TokenA address at Ropsten 0xc7bc69329f5f0734c2881aff729dc03c3c2b2ca2
/// @dev 1e5 tokens TokenA address at Rinkeby 0xa0d9e4ecd7ef0e7330258348db9f6bd69173a24b

contract TokenA is ERC20, Ownable {

    string public _name = "TokenA";
    string public _symbol = "ERC20-A";

    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, 1e5 * 1e18);
    }

    function mintTokensA(uint256 _amount) public onlyOwner {
        // Mints the defined amount of tokens for the caller
        _mint(msg.sender, _amount);
    }
}