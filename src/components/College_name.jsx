import React from "react";

import College_img from "../Images/College_img.png";
import govt_logo from "../Images/govt_logo.png";
export default function College_name() {
    return (
        <div>
            <div className="header_div">
                <div className="college_image">
                    <img src={College_img} alt="logo" height={125} width={150} />
                </div>
                <div className="college_name">
                    <h2 className="college_name_title">
                        <b>GOVERNMENT COLLEGE OF ENGINEERING AND RESEARCH, AVASARI KHURD</b>
                    </h2>
                    <p>
                        (A Government Engineering College affiliated to Savitribai Phule
                        Pune University)
                    </p>
                    <p className="college_name_subtitle">
                        Tal - Ambegaon, Dist - Pune, 412405{" "}
                    </p>
                </div>
                <div className="govt_image">
                    <img src={govt_logo} alt="logo" height={125} width={150} />
                </div>
            </div>
        </div>
    );
}
