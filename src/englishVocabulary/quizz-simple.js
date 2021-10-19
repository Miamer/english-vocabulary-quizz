
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nbWord = 0
let dataVoc = [['loop','boucle'],['issue','problème'], ['engine','moteur'],['however','cependant']];

// console.log(dataVoc[0][0])


  const quizz =  (nb) => {
     rl.question(`traduisé ${dataVoc[nb][0]} : `, function (traduction) {
       console.log("OK");

      if (traduction === dataVoc[nb][1]) {
          console.log(`bien joué`);
          nbWord++
        }else{
          console.log(`ce n'est pas ca , mot suivant`);
          nbWord++
        }
    });
  };

  process.stdin.on('keypress', () => {
    quizz(nbWord)});
  


  


  // ( async () => {


  //   for (const nB of dataVoc) {
  //     const number = nB.in
  //     quizz(nB);
  //   }
  // })();
  // for (let i=0; i<dataVoc.length;i++){
    quizz(0);
  // }



