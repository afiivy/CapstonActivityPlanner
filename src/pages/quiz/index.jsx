import React ,{useState, useEffect}from "react";
import Link from "next/link";


export default function Questions() {

    const [q1answer,setq1answer]=useState(null)
    const [q2answer,setq2answer]=useState(null)

    useEffect(()=>{
        console.log("q1answer",q1answer)
        console.log("q2answer",q2answer)
    },[q1answer, q2answer])

 


    const questionArray = [
    {
      id:1,
      question:"What is the general theme for the outing?",
      choices:[
        {
          id: 1,
          text: "Competitive"
        },
    
        {
          id: 2,
          text: "Cozy"
        },
    
        {
          id: 3,
          text: "Crafty"
        },
    
        {
          id: 4,
          text: "Crazy"
        }
      ]
      },
    
    {
      id:2,
      question:"What's your budget?",
      choices:[
        {
          id:1,
          text: "Under $20"
        },
    
        {
          id:2,
          text: "$20-$40"
        },
    
        {
          id:3,
          text: "$40-$60"
        },
    
        {
          id:4,
          text: "$60 and above"
        },
      ]
      }, 
    ] 
      

    function choiceSeleted(questionID,choice){
        console.log("questionID",questionID)
        console.log("Am clicked", choice)
        if(questionID===1){
            setq1answer(choice)
        }
        else if(questionID===2){
            setq2answer(choice)
        }
    }
    return (

    <div>
        {
            questionArray && questionArray.length > 0 
            ? 

            questionArray.map((question,index)=>{

                return(
                    <div key={index}>
                        <h3>
                            {question.question}
                        </h3>

                        { 
                            question.choices && question.choices.length > 0
                            ?

                            question.choices.map((choice,index)=>{

                                return (
                                <div key={index}>
                                    <button className="" onClick={()=>choiceSeleted(question.id,choice.text)}>
                                        {choice.text}
                                    </button>
                                </div>
                        )
                            })
                            :<div>
                                No choices
                                </div>
                        }
                    </div>

                )
                               
            })
            :
            <div> There are no questions</div>
        }
            
    </div>

    
            
  )
}




