import React from 'react'
import profilepic from '../assets/profilepicupdated.jpg'

const Home = () => {

    return (
        <>
        <div className="homepage">
            <h1 id="greeting">Hi, I'm Tori!</h1>
            <p id="hometext">I'm a junior full-stack developer based in San Diego, California. I've actively contributed to web development initiatives, engaging with diverse technologies to enhance my skills. Through these experiences, I've cultivated a dynamic approach to project work, fostering continuous learning and adaptability.</p>
            <img id="profilepicture" src={profilepic} alt="Profile Picture of me"/>
        </div>
        </>
    )
}

export default Home