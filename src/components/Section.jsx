import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../Images/home-1.jpg';
import Img2 from '../Images/home-2.jpg';
import Img3 from '../Images/home-3.jpg';
import Img4 from '../Images/home-5.jpg';
import Img5 from '../Images/home-6.jpg';
import Img6 from '../Images/home-7.jpg';
import Img7 from '../Images/home-8.jpg';
import Img8 from '../Images/home-9.jpg';
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

                <div className='col-md-6'>
                    {/* <div style={{ width: '100%', marginBottom: '-40px' }}>
                        <div className='faq-cont'>
                            <div className='faq-txt'><h3 style={{ marginRight: '15px' }}><span style={{ color: 'red' }}>GALLERY</span></h3></div>
                            <div className='faq-icon' style={{ marginTop: '-15px', marginRight: '10px', fontSize: '40px', color: 'gray' }}> <i className="fas fa-images"></i></div>
                            <div className='faq-btn'> <Button variant="danger" size="sm">VIEW All</Button></div>
                        </div>
                    </div> */}

                    <div className='gallery'>
                        <Carousel infiniteLoop autoPlay>
                            <div className='image1'>
                                <img src={Img1} alt='image' />
                            </div>
                            <div className='image1'>
                                <img src={Img2} alt='image' />
                            </div>
                            <div className='image1'>
                                <img src={Img3} alt='image' />
                            </div>
                            <div className='image1'>
                                <img src={Img4} alt='image' />
                            </div>
                            <div className='image1'>
                                <img src={Img5} alt='image' />
                            </div>
                            <div className='image1'>
                                <img src={Img6} alt='image' />
                            </div>
                            <div className='image1'>
                                <img src={Img7} alt='image' />
                            </div>
                            <div className='image1'>
                                <img src={Img8} alt='image' />
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}