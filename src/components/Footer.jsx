import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../assets/drain.png"

export default function Footer() {
    return (
        <div className="footer-wrapper">
        
           <span className="footer-hours">
            <h2 className="hours-title">Hours</h2>
            <span className="hours">
                <p>Monday</p>
                <p>Closed</p>
            </span>
            <span className="hours">
                <p>Tuesday - Friday</p>
                <p>6am - 8pm</p>
            </span>
            <span className="hours">
                <p>Saturday</p>
                <p>8am - 5pm</p>
            </span>
           </span>

           <span className="app-span">
            <h2>Connect</h2>
            <span className="apps">
            <FontAwesomeIcon className="apps-icon" icon={faFacebook} />
            <FontAwesomeIcon className="apps-icon" icon={faInstagram} />
            <FontAwesomeIcon className="apps-icon" icon={faTwitter} />
            </span>
            <h3 className="footer-phone">(971)-999-2996</h3>
           </span>
           

           <span className="footer-info">
           <img className="footer-logo" src={logo} /> 
           <p>Contact Drain Gang Plumbing today! We offer commercial and residential plumbing repairs, replacements, installations and more.</p>
           </span>
        </div>
    )
}