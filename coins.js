"use strict";

console.log("Counting Coins");

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

  // Initialize a JavaScript object to hold the coins
  let coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
  }


function coinCounter (dollarInput) {

    // Convert dollars to cents
    let cents = dollarInput * 100;

    // QUARTERS

    // Divide dollar amount by 25 cents, rounding down
    let quarterAmount = Math.floor(cents / 25);

    //Add quarters to coinPurse
    coinPurse.quarters += quarterAmount;

    // Use modulus to find remainder
    let remainder = cents % 25;
    console.log(remainder);

    // DIMES

    // Divide remaining amount by 10
    let dimeAmount = Math.floor(remainder / 10);

    // Add dimes to coinPurse
    coinPurse.dimes += dimeAmount;

    // Find remainder
    remainder = remainder % 10;

    // NICKELS

    // Divide remainder by 5
    let nickelAmount = Math.floor(remainder / 5);

    // Add nickels to coinPurse
    coinPurse.nickels += nickelAmount;

    // Find remainder
    remainder = remainder % 5;

    // PENNIES

    coinPurse.pennies = remainder;

    return coinPurse;

}

coinCounter(55.34);
console.log("There are " + coinPurse.quarters + " quarters, " + coinPurse.dimes + " dimes, " + coinPurse.nickels + " nickels and " + coinPurse.pennies + " pennies.");
