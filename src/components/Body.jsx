
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Body() {
    return (
        <div style={{ display: "flex", alignItems: "center", padding: "30px" }}>
            {/* Image on the left */}
            <div style={{ marginRight: "20px",  }}>
                <Image 
                    src="/NightOut-Navigator.png" 
                    alt="Night Out Navigator" 
                    width={500} 
                    height={500} 
                    priority={true}
                />
            </div>

            {/* Information on the right */}
            <div style={{ maxWidth: "650px", marginLeft: "50px" }}>
                <h1 style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                    Welcome to NightOut Navigator 
                    <FontAwesomeIcon 
                        icon={faMoon} 
                        style={{ marginLeft: "10px", verticalAlign: "middle", fontSize: "0.7em" }} 
                    />
                </h1>
                <p>
                Ever found yourself sitting and wondering what to do when hanging out with your partner or friends, only to realize that by the time you’ve decided, the whole day has slipped away, and you’ve spent it scrolling through social media?
                We have created a tool to help you skip those indecisive moments and dive straight into making core memories with the people who matter most.
                </p>
                <p>
                Using our tool is easy—just take the quiz, choose your adventure details, and we’ll provide tailored options that fit your needs.
                </p>
            </div>
        </div>
    );
}
