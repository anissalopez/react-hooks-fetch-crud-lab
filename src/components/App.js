import React, {useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])


  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => setQuestions(data))
  }, [])

  

  function updateQuestions (updatedQuestion){
   

    const newQuestionList = questions.filter((question) => {
      return question.id !== updatedQuestion.id
    })

    setQuestions(newQuestionList)

  }

  
  
  function newQuestionHandler(question){
    const newQuestions = [...questions, question]
    setQuestions(newQuestions)
  }

  function updateAnswer(updatedQuestion){
    const newQuestions = questions.map((question) => {
      if(question.id === updatedQuestion.id){
        return {
          ...question,
          correctIndex: updatedQuestion.correctIndex
        }
      }
      else{
        return question
      }
    })

    setQuestions(newQuestions)

  }
   
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm newQuestionHandler={newQuestionHandler}/> : <QuestionList updateAnswer={updateAnswer} updateQuestions={updateQuestions} questions={questions} />}

    </main>
  );
}

export default App;
