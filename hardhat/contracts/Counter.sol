// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Storage {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    uint256 number;
    struct Vendor {
        uint price;
        uint balance;
        string service;
        address _address;
    }

    mapping(address => Vendor) public vendor;

    function setVendor(uint _price, string memory _service) public {
        vendor[msg.sender] = Vendor(_price, 0, _service, msg.sender);
    }

    function Pay(address _addres, uint _price) public payable {
        require(msg.value >= _price);
        vendor[_addres].balance += msg.value;
    }

    function Withdraw(uint qnt) public payable {
        require(qnt <= vendor[msg.sender].balance);
        payable(msg.sender).transfer(vendor[msg.sender].balance);
        vendor[msg.sender].balance = 0;
    }
}
