import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
    return (
        <div className="home-container">
            <span className="check-list">
            <h2 className="home-title">Drain Gang Plumbing</h2>
            <span className="list-span">
            <ul>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Clean, Reliable, Respectable Plumbers</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Commercial & Residential Plumbing</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Affordable Options to Meet Your Budget</li>
            </ul>
            </span>
            <hr className="hr-home" />
            </span>
            <div className="home-us">
            <h2 className="us-title">Why Choose Us?</h2>
            <p className="home-about">We pride ourselves on how well versed we are in the plumbing industry, being able to accommodate our clients with most plumbing issues or projects that come our way. We work very hard to keep our clients happy, making sure they feel we are working hard for them. We have an amazing group of plumbers with years of great experience. We stay very consistent with the level of quality work we provide, at the same time trying to keep our pricing affordable.</p>
            </div>
            <div className="blue-box"></div>
            <div className="pipes"></div>
        </div>
    )
}