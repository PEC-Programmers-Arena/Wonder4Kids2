import React from 'react';
import "./About.css";
import Navbar from "../Navbar/Navbar"

export const About = () => {
    return (
        <>
            <div className="body">
            <Navbar/>

            <b> <h1 className="heading"> About Us </h1> </b> 
            <div className="head">
                <img id="img" src="https://res.cloudinary.com/wonder4kids/image/upload/v1636828897/About_us_jcpvtv.png" />
                <p className="para">
                    Wonder4Kids is an initiative by the students of 
                    <span> PEC,Chandigarh (INDIA)</span>. The main aim of 
                    the project is to learn about and contribute to open 
                    source, while helping the community in some manner.
                    <br/><br/>

                    This project focusses primarily on students of 5th standard
                    and below and help them to increase their creativity,
                    learning power and help them to dream big.
                    <br/><br/>


                    We invite you to contribute to our project and make it
                    more better place for children to learn.
                    <br/><br/>

                    Looking forward to have you in our journey.
                </p>
            </div>

            <div className="row">
                <div className="column">
                <a href="https://github.com/PEC-Programmers-Arena/Wonder4Kids2">
                <img src="https://res.cloudinary.com/wonder4kids/image/upload/v1636832477/unknown_cujm4y.png" className="github"/>
                </a>
                </div>
                <div className="column">
                <a href="https://discord.gg/aE28BbqwUt">
                <img src="https://res.cloudinary.com/wonder4kids/image/upload/c_scale,h_123,w_437/v1636832469/unknown_z96ali.png" className="discord"/>
                </a>
                </div>
            </div>

        </div>
        </>
    )
}

export default About