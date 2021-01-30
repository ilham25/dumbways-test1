// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // rl.question("masukkan nama", (name) => {
// //   console.log(name);
// // });

// const diamond = `
//     *
//    * *
//   *   *
//    * *
//     *
// `;

// const star = "* ";
// for (let index = 0; index < 5; index++) {}

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log("\n");
}
