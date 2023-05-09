"use strict";

let products = [
    { name: "Gummy Worms", Price: 5.79 },
    { name: "Plain M&Ms", Price: 2.89 },
    { name: "Peanut M&Ms", Price: 2.89 },
    { name: "Swedish Fish", Price: 7.79 },
    { name: "Twix Bar", Price: 3.49 },
    { name: "Hershey Bar", Price: 1.69 },
    { name: "Kitkat Bar", Price: 5.89 },
    { name: "Candy Corn", Price: 3.19 },
    { name: "Twizzlers", Price: 6.29 },
    { name: "Ferrero Roche", Price: 7.89 },
];

//1. Candies that cost less than $4.00
let results = [];
for (let i = 0; i < products.length; i++) {
    if ((products[i].Price) < 4.00) {
        results.push(products[i]);
    }
  }

  // function makes my string into one line + ", "
  function getCheapCandies(products){
    let msg = "";
    for (let i = 0 ; i < products.length; i++){
        msg += products[i].name + ", "; 
    }
    return msg.substring(0, msg.length - 2)
  }

 let msg = `The candies that cost less than $4.00 are: ${getCheapCandies(results)}.`;
    console.log(msg);