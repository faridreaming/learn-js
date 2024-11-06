function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const sigmaifier = adjectivfy("sigma");
const mewingifier = adjectivfy("mewing");

const multipleByFive = multipleBy(5);

console.log(sigmaifier("Farid"));
console.log(mewingifier("Pumbah"));

console.log("7 x 5:", multipleByFive(7));
