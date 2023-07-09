import React from "react";

function QuestionItem({ question, updateQuestions, updateAnswer}) {
 
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  console.log(options)

 

  function deleteQuestion(){

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'DELETE'})
    .then((resp) => resp.json())
    .then(() => updateQuestions(question))
    
  }

  function changeHandler(e){


    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json" 
      },
      body : JSON.stringify({
        correctIndex: e.target.value
      })
    })
    .then((resp) => resp.json())
    .then((data) => updateAnswer(data)) 
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}  onChange={changeHandler}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
