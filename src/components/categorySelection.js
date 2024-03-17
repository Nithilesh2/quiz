import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

async function buttonPressed() {
  let select = document.getElementById("sel");
  let val = select.value;

  if (val === "0") {
    alert("No category chosen, so it'll be random.");
  }

  let api = `https://opentdb.com/api.php?amount=12&category=${val}&type=boolean`;
  const response = await fetch(api);
  const data = await response.json();

  let i = 1;
  let completed = document.querySelector(".completed");
  let question = document.querySelector(".qname");
  question.innerHTML = data.results[i].question;

  let button1 = document.querySelector(".true");
  let button2 = document.querySelector(".false");

  button1.addEventListener("click", () => {
    if (button1.value === data.results[i].correct_answer) {
      button1.style.backgroundColor = "#9aeabc";
    } else {
      button1.style.backgroundColor = "#ff9393";
      button2.style.backgroundColor = "#9aeabc";
    }
  });

  button2.addEventListener("click", () => {
    if (button1.value === data.results[i].correct_answer) {
      button1.style.backgroundColor = "#9aeabc";
      button2.style.backgroundColor = "#ff9393";
    } else {
      button2.style.backgroundColor = "#9aeabc";
    }
  });
  //////////////////////////////////
  //////////////////////////////////

  let nextButton = document.querySelector(".next");
  nextButton.addEventListener("click", () => {

    let qnumber = document.querySelector(".qno");
    i += 1;
    qnumber.innerHTML = i + ")";
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "white";

    let question = document.querySelector(".qname");
    question.innerHTML = data.results[i].question;

    button1.addEventListener("click", () => {
      if (button1.value === data.results[i].correct_answer) {
        button1.style.backgroundColor = "#9aeabc";
      } else {
        button1.style.backgroundColor = "#ff9393";
        button2.style.backgroundColor = "#9aeabc";
      }
    });

    button2.addEventListener("click", () => {
      if (button1.value === data.results[i].correct_answer) {
        button1.style.backgroundColor = "#9aeabc";
        button2.style.backgroundColor = "#ff9393";
      } else {
        button2.style.backgroundColor = "#9aeabc";
      }
    });

    if (i === 11) {
      nextButton.style.display = "none";
      completed.style.display = "block";
      question.style.display = "none";
      button1.style.display = "none";
      button2.style.display = "none";
      qnumber.style.display = "none";
    }
  });
}

export default function categorySelection() {

  return (
    <>
      <div className="quizbox">
        <div className="quiz">QUIZ</div>
        <hr />
        <div className="middle">
          <div className="catSection">
            <h2 className="category">Category</h2>
            <select className="chooseCategory" id="sel">
              <option value={0} defaultChecked>
                Any Category
              </option>
              <option value={10}>Entertainment Books</option>
              <option value={11}>Entertainment Film</option>
              <option value={12}>Entertainment Music</option>
              <option value={20}>Mythology</option>
              <option value={21}>Sports</option>
              <option value={22}>Geography</option>
              <option value={23}>History</option>
              <option value={25}>Arts</option>
              <option value={27}>Animals</option>
            </select>
          </div>
          <Link to={"/quiz"}>
            <button type="button" className="button" onClick={buttonPressed}>
              Start
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
