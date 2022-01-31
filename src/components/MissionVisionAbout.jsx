import React from 'react';
import "./MissionVisionAbout.css";
// import { Link } from "react-router-dom";

function MissionVisionAbout() {
    return (
        <div>
            <div className="row d-flex justify-content-around text-end section1">
                <div className="card card-header mission-section" style={{ width: "25rem", marginBottom: "30px", borderRadius: "13px" }}>
                    <div className="card-body mission-body">
                        <h2 className="card-title text-center h2">Mission</h2>
                        <p className="card-text text-start">Educational institution for Empowerment through technological excellence towards sustainable development.</p>
                        <a className="btn btn-sm readButton" href="/mission" style={{ backgroundColor: "rgb(35, 97, 159)", color: "white" }}>Read more</a>
                    </div>
                </div>
                <div className="card card-header mission-section" style={{ width: "25rem", marginBottom: "30px", borderRadius: "13px" }}>
                    <div className="card-body">
                        <h2 className="card-title text-center h2">Vision</h2>
                        <p className="card-text text-start">Value based and demand driven education using best practices and Promotion of research, innovation and entrepreneurship.</p>
                        <a className="btn btn-secondary btn-sm" href="/vision" style={{ backgroundColor: "rgb(35, 97, 159)", color: "white" }}>Read more</a>
                    </div>
                </div>
                <div className="card card-header mission-section" style={{ width: "25rem", marginBottom: "30px", borderRadius: "13px" }}>
                    <div className="card-body">
                        <h2 className="card-title text-center h2">About</h2>
                        <p className="card-text text-start">The Government College of Engineering and Research is located in pollution free environment and conducive ambience.</p>
                        <a className="btn btn-secondary btn-sm" href="/about" style={{ backgroundColor: "rgb(35, 97, 159)", color: "white" }}>Read more</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MissionVisionAbout;