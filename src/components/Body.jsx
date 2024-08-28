import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import jsPDF from 'jspdf'; // Import jsPDF


export default function Body() {
    const [itinerary, setItinerary] = useState([
        { time: "", activity: "" }
    ]);

    const addItineraryItem = () => {
        setItinerary([...itinerary, { time: "", activity: "" }]);
    };

    const removeItineraryItem = (index) => {
        const newItinerary = itinerary.filter((_, i) => i !== index);
        setItinerary(newItinerary);
    };

    const handleChange = (index, field, value) => {
        const newItinerary = [...itinerary];
        newItinerary[index][field] = value;
        setItinerary(newItinerary);
    };

    const finalizeItinerary = () => {
        const doc = new jsPDF();

        // Title
        doc.setFontSize(20);
        doc.text('Date Night Itinerary', 105, 20, { align: 'center' });

        // Add each itinerary item
        doc.setFontSize(12);
        let y = 30; // Starting y position
        itinerary.forEach(item => {
            doc.text(`${item.time}: ${item.activity}`, 10, y);
            y += 10; // Move y position for next item
        });

        // Save the PDF
        doc.save('Itinerary.pdf');
    };

    return (
        
        <div className="row">
            <div className="col" style={{paddingTop:'30px', paddingLeft:'30px'}}>
                {/* Image on the left */}
                <div >
                    <Image 
                        src="/NightOut-Navigator.png" 
                        alt="Night Out Navigator" 
                        width={500} 
                        height={500} 
                        priority={true}/>
                </div>
            </div>    

                {/* Information in the middle */}
            <div className="col-5" >           
                <h1 style={{
                    fontSize:"30px", 
                    padding:'30px', 
                    marginRight:'50px'}}>
                    Welcome to NightOut Navigator 
                    <FontAwesomeIcon 
                            icon={faMoon} className="icon" 
                            style={{color:'black', 
                                width:'20px'}}
                        />
                    
                </h1>
                    <p style={{ display:"flex", marginTop: "25px"}}>
                        Ever found yourself sitting and wondering what to do when hanging out with your partner or friends, only to realize that by the time you’ve decided, the whole day has slipped away, and you’ve spent it scrolling through social media?
                        We have created a tool to help you skip those indecisive moments and dive straight into making core memories with the people who matter most.
                    </p>
                    <p>
                        Using our tool is easy—just take the quiz, choose your adventure details, and we’ll provide tailored options that fit your needs.
                    </p>
            </div>

                {/* Narrow, Vertical Itinerary Planner on the far right */}
                <div className="col-2">
                    <div style={{ 
                        width: "180px", 
                        padding: "30px", 
                        backgroundColor: "#f9f9f9", 
                        borderRadius: "8px", 
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "space-between", 
                        marginTop:'30px', 
                        marginLeft:"30px"}}>
                        <h2 >Plan Your Date</h2>
                        <div >
                            {itinerary.map((item, index) => (
                                <div key={index}  style={{ marginBottom: "15px" }}>
                                    <input
                                        type="time"
                                        value={item.time}
                                        id="time"
                                        onChange={(e) => handleChange(index, "time", e.target.value)}
                                        style={{}}
                        
                                    />
                                    <input
                                        type="text"
                                        placeholder="Activity"
                                        id="activity"
                                        value={item.activity}
                                        onChange={(e) => handleChange(index, "activity", e.target.value)}
                                        style={{marginTop:'5px', 
                                            width:'90%',
                                            boxSizing:''}}
                                    />
                                    
                                    <button 
                                        onClick={() => removeItineraryItem(index)} 
                                        style={{ marginTop: "5px", 
                                            backgroundColor: "#ff4d4d", 
                                            color: "#fff", 
                                            border: "none",
                                            borderRadius: "4px", 
                                            cursor: "pointer", 
                                            padding: "5px" }}>
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={addItineraryItem}
                            style={{ marginTop: "20px", 
                                padding: "10px", 
                                backgroundColor: "#4CAF50", 
                                color: "#fff", 
                                border: "none",
                                borderRadius: "4px", 
                                cursor: "pointer" }}>
                            Add Activity
                        </button>

                            {/* Finalize and Share Options at the bottom of the column */}
                        <div>
                        <button 
                            onClick={finalizeItinerary}
                            style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "20px" }}>
                            Finalize Itinerary
                        </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

