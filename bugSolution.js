function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    console.error('Invalid input types. Both arguments must be numbers.');
    return null; // Or throw an error
  }
}

console.log(foo(5, 5)); // Output: 10
console.log(foo(5, "5")); // Output: Error message