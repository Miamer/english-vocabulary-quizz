const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dataVoc = [];
let tabAll = [];

// normalier le fichier BaseVocabulary.txt sous forme d'un tableau de tableaux
const base = fs.readFile("./BaseVocabulary.txt", "utf8", (err, data) => {
  if (err) throw err;
  const datasplit = data.split(/\r\n/);
  for (const trad of datasplit) {
    const onetrad = trad.split(/\t/);
    dataVoc.push(onetrad);
  }

  //détermine un entier aléatoire plus entre 0 et la longueur de du fichier BaseVocabulary
  const functRandom = () => {
    const entier = Math.floor(Math.random() * (dataVoc.length - 1));
    return entier;
  };

  const quizz = (nbWord) => {
    rl.question(`traduisé ${dataVoc[nbWord][0]} : `, function (traduction) {
    //   return console.log("je suis traduction ", traduction);
    //   console.log("data:", dataVoc[notDouble][1]);
        if (traduction === dataVoc[nbWord][1]) {
          console.log(`bien joué`);
        }else{
          console.log(`ce n'est pas ca , mot suivant`);
        }
    });
  };

  //création de la liste aléatoire des questions
  const funcTableAllfor = () => {
    for (let i = 0; tabAll.length < dataVoc.length - 1; i++) {
      const notDouble = functRandom() + 1;
      if (!tabAll.includes(notDouble)) {
        tabAll.push(notDouble);
        console.log("Tablepush", tabAll);
      }
    }
    return tabAll;
  };

 ( async () => {
    await funcTableAllfor();

    for (const nB of tabAll) {
      quizz(nB);
    }
  })();
});

//   rl.close();
//   rl.on("close", function () {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
//   });
