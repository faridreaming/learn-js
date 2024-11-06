const addOne = (x) => x + 1;
const square = (x) => x * x;
const compose = (f, g) => (x) => f(g(x));

const addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(2));
