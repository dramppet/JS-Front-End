function solve(startingNumber, ...operations) {
    let number = Number(startingNumber);
  
    // Define the operations
    const actions = {
      chop: (n) => n / 2,
      dice: (n) => Math.sqrt(n),
      spice: (n) => n + 1,
      bake: (n) => n * 3,
      fillet: (n) => n * 0.8
    };
  
    // Perform each operation sequentially
    for (let operation of operations) {
      if (actions[operation]) {
        number = actions[operation](number);
        console.log(number);
      } else {
        console.log(`Invalid operation: ${operation}`);
      }
    }
  }

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');