import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/drain.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <><div className="top-header-wrapper">
            <div className="top-header">
                <span className="star-span">
                <p className="top-header-num">5.0</p>
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                </span>
                <span className="links">
                    <Link to="/" className="home link">home</Link>
                    <hr className="hr-nav" />
                    <Link to="/about" className="about link">about</Link>
                    <hr className="hr-nav" />
                    <Link to="/services" className="services link">services</Link>
                    </span>
                <span className="call-span">
                <FontAwesomeIcon className="phone-icon" icon={faPhone} />
                <p className="top-header-call">Give us a call today!</p>
                </span>
            </div>
        </div>
        <div className="nav-wrapper">
            <div className="nav-container">
            <div className="header">
                <img className="header-logo" src={logo} style={{height: "150px"}}/>
                <span className="header-span">
                    <h2>Free Quotes Provided &#x2022; Flat Rates Available</h2> 
                    <h3>We are #1 in the #2 business!</h3>
                </span>
            </div>   
        </div>
        </div>
        </>
    )
}