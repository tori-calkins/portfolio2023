import React from 'react'
import profilepic from '../assets/profilepicupdated.jpg'

const Home = () => {

    return (
        <>
        <div className="homepage">
            <h1 id="greeting">Hi, I'm Tori!</h1>
            <p id="hometext">I'm a Front-End Web Developer based in San Diego, California. I specialize in crafting interactive web applications using React.js, Ruby, and React Native with proficiency in JavaScript, CSS, and HTML.</p>
            <img id="profilepicture" src={profilepic} alt="Profile Picture of me"/>
        </div>
        </>
    )
}

export default Home