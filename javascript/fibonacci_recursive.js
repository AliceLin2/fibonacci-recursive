function fibonacci(n) {
  // type your code here
  if(n<2){
    return n
  }else{
    return fibonacci(n-2)+fibonacci(n-1)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 89");
  console.log("=>", fibonacci(11));

  console.log("");

  console.log("Expecting: 377");
  console.log("=>", fibonacci(14));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
