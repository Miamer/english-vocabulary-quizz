import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [fileObj, setFileObj] = useState({ fileName: "", fileContent: "" });

  const [tabNumber, setTabnumber] = useState([]);

  const [questionWord, setQuestionWord] = useState([]);
  const [answerWord, setAnswerWord] = useState("");

  const [result, setResult] = useState("");

  const[count, setCount] = useState(0)

  let tabQuest = [];
  let tabNumberRandom = [];

  useEffect(() => {
  // 1 -récupère et normalier le fichier BaseVocabulary.txt sous forme d'un tableau de tableaux
    fetch("./BaseVocabulary.txt")
      .then(function (response) {
        return response;
      })
      .then(function (data) {

        return data.text();
      })
      .then(function (text) {

        const  withoutStartEnd = text.slice(2,-2);

        const datasplit = withoutStartEnd.split(/\r\n/);
        for (const trad of datasplit) {

          const onetrad = trad.split(/\t/);
          tabQuest.push(onetrad);
          // console.log("tabQuest", tabQuest)
        }
        return tabQuest;
      })
      .then(function (tab) {

   //  2- détermine un entier aléatoire entre 0 et la longueur de du fichier BaseVocabulary
        const functRandom = () => {
          const entier = Math.floor(Math.random() * (tab.length - 1));
          return entier;
        };

        // 3 - création de la liste aléatoire des questions
        const funcTableAllfor = () => {
          for (let i = 0; tabNumberRandom.length < tab.length +1; i++) {
            let tabNumber = [];

            const notDouble = functRandom();
            if (i === 0) {
              setQuestionWord(tab[notDouble]);
            }

            if (!tabNumber.includes(notDouble)) {
              tabNumber.push(notDouble);
              tabNumberRandom.push(tab[notDouble]);
              // console.log("Tablepush", tabNumberRandom);
            }
          }
          setTabnumber(tabNumberRandom);
        };
        funcTableAllfor();


      })
      //
      .catch(function (err) {
        console.log("Fetch problem show: " + err.message);
      });
  }, []);


  // console.log("je suis tabNumber", tabNumber);
  console.log("je suis QuestionWord", questionWord);

  const onInputChange = (e) => {
    setAnswerWord(e.target.value);
  };

  // 4 - On récupèere la première question



  const quizz = (e, i) => {

    e.preventDefault();

    if (answerWord === questionWord[1]){
      setResult("Correct");
      setCount(count+1);
      setQuestionWord(tabNumber[count]);
      setAnswerWord('');
    }else{ 
      setResult("C'est pas ca");

    }
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Traduit le mot suivant :</h2>
        <p>{result}</p>
        {/* <p>je suis fileContent :{fileObj.fileContent}</p> */}
        <h3>{questionWord[0]}</h3>
        {/* <input type="file" onChange={console.log("onInputFileChange")}/> */}
        <form onSubmit={quizz} style={{"display":"flex", "flexDirection": "column"}}>
          <input type="text" name="word" value={answerWord} onChange={onInputChange} style={{"fontSize": "30px"}}/>

          <button type="submit" style={{"fontSize": "30px"}}>Vérifie</button>

        </form>
      </header>
    </div>
  );
};

export default App;
