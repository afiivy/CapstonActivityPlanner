import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function Questions() {
<<<<<<< Updated upstream

    const [q1answer,setq1answer]=useState(null)
    const [q2answer,setq2answer]=useState(null)
=======
  const [q1answer, setQ1Answer] = useState(null);
  const [q2answer, setQ2Answer] = useState(null);
>>>>>>> Stashed changes

  useEffect(() => {
    console.log("q1answer", q1answer);
    console.log("q2answer", q2answer);
  }, [q1answer, q2answer]);

  const questionArray = [
    {
      id: 1,
      question: "What is the general theme for the outing?",
      choices: [
        { id: 1, text: "Competitive" },
        { id: 2, text: "Cozy" },
        { id: 3, text: "Crafty" },
        { id: 4, text: "Crazy" },
      ],
    },
    {
      id: 2,
      question: "What's your budget?",
      choices: [
        { id: 1, text: "Under $20" },
        { id: 2, text: "$20-$40" },
        { id: 3, text: "$40-$60" },
        { id: 4, text: "$60 and above" },
      ],
    },
  ];

  function choiceSelected(questionID, choice) {
    console.log("questionID", questionID);
    console.log("Am clicked", choice);
    if (questionID === 1) {
      setQ1Answer(choice);
    } else if (questionID === 2) {
      setQ2Answer(choice);
    }
  }

  function renderChoiceMessage(q1answer, q2answer) {
    if (q1answer === "Competitive" && q2answer === "Under $20") {
      return "The outing is going to be a budget-friendly competition!";
    } else if (q1answer === "Cozy") {
      return "The outing is going to be a relaxing, cozy time.";
    } else if (q1answer === "Crafty") {
      return "The outing is going to be a creative, crafty session.";
    } else if (q1answer === "Crazy") {
      return "The outing is going to be wild and crazy!";
    } else {
      return "Unknown choice!";
    }
  }

  return (
    <div>
      {questionArray && questionArray.length > 0 ? (
        questionArray.map((question, index) => {
          return (
            <div key={index}>
              <h3>{question.question}</h3>

              {question.choices && question.choices.length > 0 ? (
                question.choices.map((choice, index) => {
                  return (
                    <div key={index}>
                      <button
                        className=""
                        onClick={() => choiceSelected(question.id, choice.text)}
                      >
                        {choice.text}
                      </button>
                    </div>
                  );
                })
              ) : (
                <div>No choices</div>
              )}
            </div>
          );
        })
      ) : (
        <div>There are no questions</div>
      )}

      <div>
        {q1answer && q2answer && <div>{renderChoiceMessage(q1answer, q2answer)}</div>}
      </div>
    </div>
  );
}


