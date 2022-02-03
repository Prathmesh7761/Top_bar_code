import React from "react";
import "./Section.css";
import Placement_img from "../Images/Placement_img.jpg";
import Alumni_image from "../Images/Alumni_image.jpg";
import Gallery_image from "../Images/Gallery_image.png";
export default function Section() {
    return (
        <>
            {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link> */}
            <div className="section">
                <div className="circle">
                    <p><a href='./alumni'><more><img className="images" src={Alumni_image} alt="Alumni" /></more></a></p>
                    <p className="name">Alumni</p>
                </div>
                <div>
                    <p><a href="./placement"><more><img className="images" src={Placement_img} alt="placement" /></more></a></p>
                    <p className="name">Placement</p>
                </div>
                <div>
                    <p><a to="./gallery"><more><img className="images" src={Gallery_image} alt="Gallery" /></more></a></p>
                    <p className="name">Gallery</p>
                </div>

            </div>

        </>
    )
}