import React from "react";
import QuestionItem from "./QuestionItem";




function QuestionList({questions, updateQuestions, updateAnswer}) {



  const displayQuestions = questions.map((question) => {return <QuestionItem  key={question.id} updateAnswer={updateAnswer} question = {question} updateQuestions={updateQuestions}/> })
  


  return (
   
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
