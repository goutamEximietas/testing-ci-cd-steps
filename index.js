function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

console.log('App is running!');
console.log(greet('GitHub Actions'));

module.exports = { add, multiply, greet };