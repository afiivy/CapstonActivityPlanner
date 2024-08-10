import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import styles from '../../styles/Quiz.module.css';
//<div className={styles.quizContainer}> example of whats needed for styling
export default function Questions() {


    const [q1answer,setq1answer]=useState(null)
    const [q2answer,setq2answer]=useState(null)


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
      setq1answer(choice);
    } else if (questionID === 2) {
      setq2answer(choice);
    }
  }

  function renderChoiceMessage(q1answer, q2answer) {
    if (q1answer === "Competitive" && q2answer === "Under $20") {
      return "Enjoy a Board Game Night, local breweries and cafes such as Anthem Brewing Company offer a variety of board games available";
    } 
    else if (q1answer === "Competitive" && q2answer === "$20-$40") {
      return "Go Bowling,  Ready for competition? Then Dust Bowl Lounge is the spot that will put your bowling skills to the test. This funky and retro bowling alley also has a full bar, so you can enjoy a drink while attempting to bowl your way to victory.";
    } 
    else if (q1answer === "Competitive" && q2answer === "$40-$60") {
      return "Axe Throwing - A fun way to see who would be the best to team up with in the off chance of a zombie apocalypse. You can book a one or two hour session with Twisted Axes Throw House.";
    } 
    else if (q1answer === "Competitive" && q2answer === "$60 and above") {
      return "An Escape Room- Put your teamwork and determination to the ultimate test. Will you let a lock outsmart you?";
    } 
    //COZY OPTIONS
    else if (q1answer === "Cozy" && q2answer === "Under $20") {
      return "Pack a picnic basket with homemade sandwiches, snacks, and drinks, and head to one of Oklahoma City's scenic parks, such as Will Rogers Park. This historical gem offers picturesque views and a serene atmosphere. After your meal, take a stroll through the enchanting rose garden and arboretum. There's so much to explore and admire!";
    } 
    else if (q1answer === "Cozy" && q2answer === "$20-$40") {
      return "Visit the local arcade bar. At Up-Down, you and your date can enjoy a wide variety of classic and modern arcade games together. When you need a break, relax with a craft beer and a pizza, and spend time with each other in a warm and inviting atmosphere.";
    } 
    else if (q1answer === "Cozy" && q2answer === "$40-$60") {
      return "Visit the Cat Cafe at Don't Stress Meowt, where you can unwind with the soothing company of cats, enjoy cozy cuddles, and sip on delicious coffee. It's a therapeutic and rewarding experience for the cat lovers in your life.";
    } 
    else if (q1answer === "Cozy" && q2answer === "$60 and above") {
      return "Are you enchanted by the magic of the theatre? Then the plan should be to visit the Lyric Theatre of Oklahoma for an exciting performance, no matter what's playing. The theatre's diverse lineup features a mix of local and national talent, offering a captivating experience for all";
    }
    //CRAFTY OPTIONS
    else if (q1answer === "Crafty" && q2answer === "Under $20") {
      return "Visit a Free Museum or Gallery- One standout is Oklahoma Contemporary, a must-visit gallery with ever-changing exhibits that spotlight living artists. Explore various historical museums, sports museums, and more. Enjoy a day of discovery and learning without breaking the bank.";
    } 
    else if (q1answer === "Crafty" && q2answer === "$20-$40") {
      return "Participate in a Paint and Palette - Looking to explore your artistic side or find a fun, new experience? Paint N' Cheers offers an upbeat creative class perfect for both seasoned artists and beginners. You can expect a lively evening of acrylic painting basics while enjoying the company of friends and your favorite beverage.";
    } 
    else if (q1answer === "Crafty" && q2answer === "$40-$60") {
      return "Try your hand at glassblowing at BlueSage Studio, where you can create a variety of unique pieces tailored to your style. This hands-on experience will leave you with a one-of-a-kind memento and a cherished new memory.";
    } 
    else if (q1answer === "Crafty" && q2answer === "$60 and above") {
      return "Make a fashion statement at Cheyenne Sky Studio, where you can design your own jewelry piece from a selection that includes everything from gem pendants and rings to chain bracelets and necklaces. Create a unique accessory that you can carry with you wherever you go, making it a memorable keepsake.";
    }
    // CRAZY OPTIONS
    else if (q1answer === "Crazy" && q2answer === "Under $20") {
      return "Take a hike and explore the breathtaking beauty and wild charm of Oklahoma's state parks. Enjoy the adventure of a lifetime as you immerse yourself in the natural wonders Oklahoma has to offer.";
    } 
    else if (q1answer === "Crazy" && q2answer === "$20-$40") {
      return "Feeling spooky? Embark on a ghost tour with US Ghost Adventures and lift the veil on this unassuming city. Uncover the dark underbelly that lurks beneath its charming facade.";
    } 
    else if (q1answer === "Crazy" && q2answer === "$40-$60") {
      return "Go White Water Rafting: When the weather is perfect, head to Riversport Rapids for an exhilarating day on the river. Your raft guide will ensure you have a safe and thrilling experience, providing all the information and gear you need for an unforgettable adventure.";
    } 
    else if (q1answer === "Crazy" && q2answer === "$60 and above") {
      return "Release all your stress and frustration at the Chaos Factory Rage Room. Have the time of your life smashing and breaking things, because you know what they say: those who destroy together, stay together";
    }
    //ALL OTHER SELECTIONS
    else {
      return "Unknown choice!";
    }
  }


  return (
    <div className={styles.pageContainer}>
      <Header/>
      <div className={styles.quizContainer}>
        {questionArray && questionArray.length > 0 ? (
          questionArray.map((question, index) => (
            <div key={index} className={styles.question}>
              <h3 className={styles.questionText}>{question.question}</h3>
              {question.choices && question.choices.length > 0 ? (
                question.choices.map((choice, index) => (
                  <div key={index}>
                    <button
                      className={`${styles.quizSelect} ${styles.btn}`}
                      onClick={() => choiceSelected(question.id, choice.text)}
                    >
                      {choice.text}
                    </button>
                  </div>
                ))
              ) : (
                <div>No choices</div>
              )}
            </div>
          ))
        ) : (
          <div>There are no questions</div>
        )}
        <div>
          {q1answer && q2answer && <div className="result">{renderChoiceMessage(q1answer, q2answer)}</div>}
        </div>
      </div>
    </div>
  );
}


//   return (
//       <div className={styles.quizContainer}>
//           <Header/>

//       {questionArray && questionArray.length > 0 ? (
//         questionArray.map((question, index) => {
//           return (
//             <div key={index} className={styles.question}>
//               <h3 className={styles.questionText}>{question.question}</h3>

//             {question.choices && question.choices.length > 0 ? (
//                 question.choices.map((choice, index) => {
//                   return (
//                     <div key={index}>
//                       <button
//                         className={`${styles.quizSelect} ${styles.btn}`}
//                         onClick={() => choiceSelected(question.id, choice.text)}
//                       >
//                         {choice.text}
//                     </button>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <div>No choices</div>
//               )}
//             </div>
//           );
//         })
//       ) : (
//         <div>There are no questions</div>
//       )}

//       <div>
//         {q1answer && q2answer && <div className="result">{renderChoiceMessage(q1answer, q2answer)}</div>}
//       </div>
//     </div>
//   );
// }

