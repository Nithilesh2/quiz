import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function CategorySelection() {
  async function ButtonPressed() {
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

    let nextButton = document.querySelector(".next");

    button1.addEventListener("click", () => {
      nextButton.style.display = "block";
      if (button1.value === data.results[i].correct_answer) {
        button1.style.backgroundColor = "#9aeabc";
        button2.style.pointerEvents = "none";
      } else {
        button1.style.backgroundColor = "#ff9393";
        button2.style.backgroundColor = "#9aeabc";
      }
    });

    button2.addEventListener("click", () => {
      nextButton.style.display = "block";
      if (button1.value === data.results[i].correct_answer) {
        button1.style.backgroundColor = "#9aeabc";
        button2.style.backgroundColor = "#ff9393";
      } else {
        button2.style.backgroundColor = "#9aeabc";
        button1.style.pointerEvents = "none";
      }
    });
    //////////////////////////////////
    //////////////////////////////////

    nextButton.addEventListener("click", () => {
      nextButton.style.display = "none";

      i += 1;
      let known = document.querySelector(".known");
      known.innerHTML = `(${i}/10)`;
      button1.style.backgroundColor = "white";
      button2.style.backgroundColor = "white";

      let question = document.querySelector(".qname");
      question.innerHTML = data.results[i].question;

      button1.addEventListener("click", () => {
        nextButton.style.display = "block";
        if (button1.value === data.results[i].correct_answer) {
          button1.style.backgroundColor = "#9aeabc";
          button2.style.pointerEvents = "none";
        } else {
          button1.style.backgroundColor = "#ff9393";
          button2.style.backgroundColor = "#9aeabc";
        }
      });

      button2.addEventListener("click", () => {
        nextButton.style.display = "block";
        if (button1.value === data.results[i].correct_answer) {
          button1.style.backgroundColor = "#9aeabc";
          button2.style.backgroundColor = "#ff9393";
        } else {
          button2.style.backgroundColor = "#9aeabc";
          button1.style.pointerEvents = "none";
        }
      });

      button1.style.pointerEvents = "fill";
      button2.style.pointerEvents = "fill";

      if (i === 11) {
        known.style.display = "none";
        nextButton.style.display = "none";
        completed.style.display = "block";
        question.style.display = "none";
        button1.style.display = "none";
        button2.style.display = "none";
      }
    });
  }

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
            <button type="button" className="button" onClick={ButtonPressed}>
              Start
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
