import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function quiz() {
  return (
    <>
      <div className="main">
        <div className="quizbox">
          <div className="quiz">QUIZ</div>
          <hr />
          <span className="known">(1/10)</span>
          <div className="questions">
            <span className="qname">
              HTML stands for Hyper Text Markup Language
            </span>
          </div>
          <div className="options">
            <button value={"True"} className="true">
              TRUE
            </button>
            <button value={"False"} className="false">
              FALSE
            </button>
          </div>

          <div className="completed">
            {/* <div className="correct">Correct : 0</div>
            <div className="incorrect">Incorrect : 0</div> */}
            Successfully completed<br />all problems.
          </div>

          <div className="leftandright">
            <Link to={"/"}>
              <button className="home">Home</button>
            </Link>
            <button className="next">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
