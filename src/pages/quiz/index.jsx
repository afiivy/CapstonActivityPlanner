import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import { useAuth } from "../api/nextauth";
import Swal from 'sweetalert2'

export default function Questions() {

  const [q1answer, setq1answer] = useState(null);
  const [mapUrl, setmapUrl] = useState('');


  const questionArray = [
    {
      id: 1,
      question: "What is the general theme for the outing?",
      choices: [
        { id: 1, text: "Competitive", imageUrl:"https://github.com/afiivy/images/blob/main/competitive.jpg?raw=true"},
        { id: 2, text: "Cozy", imageUrl:"https://github.com/afiivy/images/blob/main/cozy.jpg?raw=true"},
        { id: 3, text: "Crafty", imageUrl:"https://github.com/afiivy/images/blob/main/crafty.jpg?raw=true"},
        { id: 4, text: "Crazy", imageUrl:"https://github.com/afiivy/images/blob/main/crazy.jpg?raw=true"},
      ],
    },
    {
      id: 2,
      question: "What's your budget?",
      choices: [
        { id: 1, text: "Under $20", imageUrl:"https://github.com/afiivy/images/blob/main/under-20.jpg?raw=true" },
        { id: 2, text: "$20-$40",imageUrl:"https://github.com/afiivy/images/blob/main/20-40.jpg?raw=true" },
        { id: 3, text: "$40-$60", imageUrl:"https://github.com/afiivy/images/blob/main/40-60.jpg?raw=true" },
        { id: 4, text: "$60 and above", imageUrl:"https://github.com/afiivy/images/blob/main/60-andover.jpg?raw=true" },
      ],
    },
  ];

  function choiceSelected(questionID, choice) {
    console.log("questionID", questionID);
    console.log("Am clicked", choice);
    if (questionID === 1) {
      setq1answer(choice);
    } else if (questionID === 2) {
      console.log("choice",choice)
      renderChoiceMessage(choice)
    }
  } 

  function renderChoiceMessage(q2answer) {
    console.log("q1answer",q1answer)
    console.log("q2answer",q2answer)
    let returnStatement = ''; 
    if (q1answer === "Competitive" && q2answer === "Under $20") {
      returnStatement = "Enjoy a Board Game Night, local breweries and cafes such as Anthem Brewing Company offer a variety of board games available";
    } 
    else if (q1answer === "Competitive" && q2answer === "$20-$40") {
      returnStatement = "Go Bowling,  Ready for competition? Then Dust Bowl Lounge is the spot that will put your bowling skills to the test. This funky and retro bowling alley also has a full bar, so you can enjoy a drink while attempting to bowl your way to victory.";
      
    } 
    else if (q1answer === "Competitive" && q2answer === "$40-$60") {
      returnStatement = "Axe Throwing - A fun way to see who would be the best to team up with in the off chance of a zombie apocalypse. You can book a one or two hour session with Twisted Axes Throw House.";
    } 
    else if (q1answer === "Competitive" && q2answer === "$60 and above") {
      returnStatement = "An Escape Room- Put your teamwork and determination to the ultimate test. Will you let a lock outsmart you?";
    } 
    //COZY OPTIONS
    else if (q1answer === "Cozy" && q2answer === "Under $20") {
      returnStatement = "Pack a picnic basket with homemade sandwiches, snacks, and drinks, and head to one of Oklahoma City's scenic parks, such as Will Rogers Park. This historical gem offers picturesque views and a serene atmosphere. After your meal, take a stroll through the enchanting rose garden and arboretum. There's so much to explore and admire!";
    } 
    else if (q1answer === "Cozy" && q2answer === "$20-$40") {
      returnStatement = "Visit the local arcade bar. At Up-Down, you and your date can enjoy a wide variety of classic and modern arcade games together. When you need a break, relax with a craft beer and a pizza, and spend time with each other in a warm and inviting atmosphere.";
    } 
    else if (q1answer === "Cozy" && q2answer === "$40-$60") {
      returnStatement = "Visit the Cat Cafe at Don't Stress Meowt, where you can unwind with the soothing company of cats, enjoy cozy cuddles, and sip on delicious coffee. It's a therapeutic and rewarding experience for the cat lovers in your life.";
    } 
    else if (q1answer === "Cozy" && q2answer === "$60 and above") {
      returnStatement = "Are you enchanted by the magic of the theatre? Then the plan should be to visit the Lyric Theatre of Oklahoma for an exciting performance, no matter what's playing. The theatre's diverse lineup features a mix of local and national talent, offering a captivating experience for all";
    }
    //CRAFTY OPTIONS
    else if (q1answer === "Crafty" && q2answer === "Under $20") {
      returnStatement = "Visit a Free Museum or Gallery- One standout is Oklahoma Contemporary, a must-visit gallery with ever-changing exhibits that spotlight living artists. Explore various historical museums, sports museums, and more. Enjoy a day of discovery and learning without breaking the bank.";
    } 
    else if (q1answer === "Crafty" && q2answer === "$20-$40") {
      returnStatement = "Participate in a Paint and Palette - Looking to explore your artistic side or find a fun, new experience? Paint N' Cheers offers an upbeat creative class perfect for both seasoned artists and beginners. You can expect a lively evening of acrylic painting basics while enjoying the company of friends and your favorite beverage.";
    } 
    else if (q1answer === "Crafty" && q2answer === "$40-$60") {
      returnStatement = "Try your hand at glassblowing at BlueSage Studio, where you can create a variety of unique pieces tailored to your style. This hands-on experience will leave you with a one-of-a-kind memento and a cherished new memory.";
    } 
    else if (q1answer === "Crafty" && q2answer === "$60 and above") {
      returnStatement = "Make a fashion statement at Cheyenne Sky Studio, where you can design your own jewelry piece from a selection that includes everything from gem pendants and rings to chain bracelets and necklaces. Create a unique accessory that you can carry with you wherever you go, making it a memorable keepsake.";
    }
    // CRAZY OPTIONS
    else if (q1answer === "Crazy" && q2answer === "Under $20") {
      returnStatement = "Take a hike and explore the breathtaking beauty and wild charm of Oklahoma's state parks. Enjoy the adventure of a lifetime as you immerse yourself in the natural wonders Oklahoma has to offer.";
    } 
    else if (q1answer === "Crazy" && q2answer === "$20-$40") {
      returnStatement = "Feeling spooky? Embark on a ghost tour with US Ghost Adventures and lift the veil on this unassuming city. Uncover the dark underbelly that lurks beneath its charming facade.";
    } 
    else if (q1answer === "Crazy" && q2answer === "$40-$60") {
      returnStatement = "Go White Water Rafting: When the weather is perfect, head to Riversport Rapids for an exhilarating day on the river. Your raft guide will ensure you have a safe and thrilling experience, providing all the information and gear you need for an unforgettable adventure.";
    } 
    else if (q1answer === "Crazy" && q2answer === "$60 and above") {
      returnStatement = "Release all your stress and frustration at the Chaos Factory Rage Room. Have the time of your life smashing and breaking things, because you know what they say: those who destroy together, stay together";
    }
    //ALL OTHER SELECTIONS
    else {
      returnStatement = "Unknown choice!";
    }
    console.log ( "return", returnStatement  )
    displayMap(q2answer)
    Swal.fire({
      title: "",
      text: returnStatement,
      icon: "success"
    });
  }
  
  function displayMap(q2answer){
      let newMapUrl = '';
      //competitive options
      if (q1answer === "Competitive" && q2answer === "Under $20") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.890776750649!2d-97.52269692418253!3d35.478392272653366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2112a69a3f15d%3A0xaf9da295f26b4de6!2sAnthem%20Brewing%20Company!5e1!3m2!1sen!2sus!4v1723909439810!5m2!1sen!2sus" 
      } 
      else if (q1answer === "Competitive" && q2answer === "$20-$40") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.890776750649!2d-97.52269692418253!3d35.478392272653366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21733f1b8d8cb%3A0x61483f08c633eccd!2sDust%20Bowl%20Lanes%20and%20Lounge!5e1!3m2!1sen!2sus!4v1723909515131!5m2!1sen!2sus" 
      }
      else if (q1answer === "Competitive" && q2answer === "$40-$60") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13152.914689472385!2d-97.4961101!3d35.3474705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b215038a4ebaeb%3A0x930e1e37f68d53ed!2sTwisted%20Axes%20Throw%20House!5e1!3m2!1sen!2sus!4v1723776426289!5m2!1sen!2sus";
      }
      else if (q1answer === "Competitive" && q2answer === "$60 and above") {
        newMapUrl= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210446.9275683136!2d-97.650619762112!3d35.3473582098962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21b8a028b8711%3A0x6ed40f4cdaab0b99!2sRed%20Door%20Escape%20Room!5e1!3m2!1sen!2sus!4v1723776940180!5m2!1sen!2sus";
      }
      
      //cozy options
      else if (q1answer === "Cozy" && q2answer === "Under $20") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.8686356072344!2d-97.58510481544693!3d35.50341430211267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21b002e6cccf7%3A0x2490c1c807b9727d!2sWill%20Rogers%20Park!5e1!3m2!1sen!2sus!4v1723777677837!5m2!1sen!2sus";
      }
      else if (q1answer === "Cozy" && q2answer === "$20-$40") {
        newMapUrl= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5757701459247!2d-97.5407391241822!3d35.48610527265096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b211f8e2631e09%3A0x8c4095584b7635e7!2sUp-Down%20OKC!5e1!3m2!1sen!2sus!4v1723777912084!5m2!1sen!2sus";
      }
      else if (q1answer === "Cozy" && q2answer === "$40-$60") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.77385025478657!2d-97.5444842769726!3d35.47466750735558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b210c2fc6716c3%3A0x81b25a771e0d7974!2s1900%20Linwood%20Blvd%2C%20Oklahoma%20City%2C%20OK%2073106!5e1!3m2!1sen!2sus!4v1723914159179!5m2!1sen!2sus"
      }
      else if (q1answer === "Cozy" && q2answer === "$60 and above") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181022.2643470624!2d-97.7718305494935!3d35.40366295116156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b210bed773ccf7%3A0x312c8daf6b1383ff!2sLyric%20Theatre%20of%20Oklahoma%3A%20The%20Official%20State%20Theatre%20of%20Oklahoma!5e1!3m2!1sen!2sus!4v1723778169956!5m2!1sen!2sus"
      }

      //crafty options
      else if (q1answer === "Crafty" && q2answer === "Under $20") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0417448224885!2d-97.54687552418272!3d35.47469527265462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21739fdb0fe3b%3A0xaf890e5053fcecd8!2sOklahoma%20Contemporary%20Arts%20Center%20Showroom!5e1!3m2!1sen!2sus!4v1723902855312!5m2!1sen!2sus"
      }
      else if (q1answer === "Crafty" && q2answer === "$20-$40") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0417448224885!2d-97.54687552418272!3d35.47469527265462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b210b8e7396063%3A0x68874301d80b1f93!2sPaint%20N%20Cheers!5e1!3m2!1sen!2sus!4v1723902973896!5m2!1sen!2sus" 
      }
      else if (q1answer === "Crafty" && q2answer === "$40-$60") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8045550684324!2d-97.5322624241825!3d35.48050357265275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b210cbd9e69809%3A0xeab4d99139e1c0d!2sBlue%20Sage%20Studios!5e1!3m2!1sen!2sus!4v1723903068722!5m2!1sen!2sus" 
      }
      else if (q1answer === "Crafty" && q2answer === "$60 and above") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8045550684324!2d-97.5322624241825!3d35.48050357265275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b20518d619eb4f%3A0x5e62466eb0aa637!2sCheyenne%20Sky%20Studio!5e1!3m2!1sen!2sus!4v1723903269877!5m2!1sen!2sus" 
      }

      //crazy options
      else if (q1answer === "Crazy" && q2answer === "Under $20") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0417448224885!2d-97.54687552418272!3d35.47469527265462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2d0d83984af83%3A0xe4ea2b45a260ce2c!2sArbuckle%20Mountains!5e1!3m2!1sen!2sus!4v1723902261408!5m2!1sen!2sus" 
      }
      else if (q1answer === "Crazy" && q2answer === "$20-$40") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0417448224885!2d-97.54687552418272!3d35.47469527265462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b211d94709fedb%3A0xb8c839913f92f858!2sOklahoma%20City%20Ghosts!5e1!3m2!1sen!2sus!4v1723902489709!5m2!1sen!2sus" 
      }
      else if (q1answer === "Crazy" && q2answer === "$40-$60") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0417448224885!2d-97.54687552418272!3d35.47469527265462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b216e137b2f60f%3A0x7146c7aea9c37a5a!2sRiversport%20Rapids!5e1!3m2!1sen!2sus!4v1723902583328!5m2!1sen!2sus" 
      }
      else if (q1answer === "Crazy" && q2answer === "$60 and above") {
        newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0417448224885!2d-97.54687552418272!3d35.47469527265462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21d9ad1a38583%3A0xcb2bf018eddb24d4!2sChaos%20Factory!5e1!3m2!1sen!2sus!4v1723902685215!5m2!1sen!2sus" 
      }
    
      setmapUrl(newMapUrl);

  }

  return (
    <div className={"pageContainer"}>
      <Header />
      <div className={"quizContainer row"}>
        <div className="col-6">
          {questionArray && questionArray.length > 0 ? (
            questionArray.map((question, index) => (
              <div key={index} className={"question"}>
                <h3 className={"questionText"}>{question.question}</h3>
                <div className="choices-container" 
                    style={{ display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '10px' }}>
                  {question.choices && question.choices.length > 0 ? (
                    question.choices.map((choice, index) => (
                      <div
                        key={index}
                        className="quizSelect btn"
                        onClick={() => choiceSelected(question.id, choice.text)}
                      >
                        <img
                        src={choice.imageUrl}
                        alt={""}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "5px"}}>                            
                        </img>
                      
                      </div>
                    ))
                  ) : (
                    <div>No choices</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>There are no questions</div>
          )}
        </div>
        <div className="col-6">
          <div>
          </div>
          {mapUrl && (
            <div className="image">
              <iframe 
                src={mapUrl}
                width="600" 
                height="450" 
                style={{ border: 0, 
                  borderRadius: '10px', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}


