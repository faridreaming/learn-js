let myFuncs = [];

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

myFuncs = [add, sub, mul, div];

// add()
console.log(myFuncs[0](10, 5));
