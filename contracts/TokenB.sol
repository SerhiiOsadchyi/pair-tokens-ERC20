// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./openzeppelin-v4.3.2/token/ERC20/ERC20.sol";
import "./openzeppelin-v4.3.2/access/Ownable.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";

/// @dev 1000 tokens TokenB address at Ropsten 0x965b0b486c6c5679165cbe3f3b7f466006f8cd80
/// @dev 1e5 tokens TokenB address at Rinkeby 0x281b6b4515356a7a161171f0851dae554c2897a7

contract TokenB is ERC20, Ownable {

    string public _name = "TokenB";
    string public _symbol = "ERC20-B";

    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, 1e5 * 1e18);
    }

    function mintTokensB(uint256 _amount) public onlyOwner {
        // Mints the defined amount of tokens for the caller
        _mint(msg.sender, _amount);
    }
}