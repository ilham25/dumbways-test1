const readline = require("readline");

const pola = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

pola.question("Masukkan banyak pola : ", (pattern) => {
  printPattern(parseInt(pattern));
});

const printPattern = (inputPola) => {
  let d1 = "     *     ";
  let d2 = "   *   *   ";
  let d3 = "  *     *  ";
  let pr1 = "";
  let pr2 = "";
  let pr3 = "";

  for (let index = 0; index < inputPola; index++) {
    pr1 += d1;
    pr2 += d2;
    pr3 += d3;
  }

  console.log(pr1);
  console.log(pr2);
  console.log(pr3);
  console.log(pr2);
  console.log(pr1);
};
