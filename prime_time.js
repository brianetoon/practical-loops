// Part 2 - Prime Time
// Team - Toon, Priyanka, Hunter, Mohammed


// let userInput = 30;
// we don't want to check userInput, we want to check the next number
// let n = userInput += 1;

let n = 35;
let isPrime = false;

// run as long as isPrime is false
while (!isPrime) {

  for (let i = 2; i < n; i++) {

    if (n % i === 0) {
      // if this statement is true, number is not prime and we need to increment
      console.log(`${n} is divisible by ${i} - not prime`);
      n++;
    } 
  }
  // if the code reaches this point the number is prime
  console.log(`${n} is prime`);
  // set isPrime to true to terminate the while loop
  isPrime = true;
}
