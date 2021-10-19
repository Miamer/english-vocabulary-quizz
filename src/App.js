import { useState } from "react";
import * as fs from "browserify-fs";
import logo from "./logo.svg";
import "./App.css";


const App = () => {

  const [tabWord, setTabWord] = useState([]);
  const [questionWord, setQuestionWord] = useState([]);
  const [answerWord, setAnswerWord] = useState("");

  const onInputChange = (e) => {
    setAnswerWord(e.target.value);
  };


  let tabQuestionNb = [];

  // 1 -récupère et normalier le fichier BaseVocabulary.txt sous forme d'un tableau de tableaux
  fs.readFile('/BaseVocabulary.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const datasplit = data.split(/\r\n/);
    for (const trad of datasplit) {
      const onetrad = trad.split(/\t/);
      setTabWord(...tabWord, onetrad );
    }
  });



  // 2- détermine un entier aléatoire entre 0 et la longueur de du fichier BaseVocabulary
  // const functRandom = () => {
  //   const entier = Math.floor(Math.random() * (dataVoc.length - 1));
  //   return entier;
  // };

  // 3 - création de la liste aléatoire des questions
  // const funcTableAllfor = () => {
  //   for (let i = 0; tabQuestionNb.length < dataVoc.length - 1; i++) {
  //     const notDouble = functRandom() + 1;
  //     if (!tabQuestionNb.includes(notDouble)) {
  //       tabQuestionNb.push(notDouble);
  //       console.log("Tablepush", tabQuestionNb);
  //     }
  //   }
  //   return tabQuestionNb;
  // };
  // funcTableAllfor();

  // 4 - On récupèere la première question 

  // setQuestionWord(dataVoc[tabQuestionNb[0]])



  const quizz = () => {
    console.log("tata")
    // if (answerWord === questionWord[1]){
    // console.log("tata");}
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Traduit le mot suivant :</p>
        <p>{questionWord}</p>
        {tabWord.map((x)=> console.log(x))}
        <form onSubmit={quizz}>
          <input type="text" name="word" value="" onChange={onInputChange} />
          <button type="submit">Vérifie</button>
        </form>
      </header>
    </div>
  );

};

export default App;
