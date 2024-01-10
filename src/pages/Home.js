import React from 'react'
import profilepic from '../assets/profilepicupdated.jpg'
import icon from'../assets/linkedin.png'


const Home = () => {

    return (
        <>
        <div className="homepage">
            <h1 id="greeting">Hi, I'm Tori!</h1>
            <p id="hometext">I'm a junior full-stack developer based in San Diego, California. I've worked on web development projects using HTML, CSS, JavaScript, React.js, Ruby, and Ruby on Rails, and my passion for creative problem-solving drives my constant skill growth.</p>
            <img id="profilepicture" src={profilepic} alt="Profile Picture of me"/>
            <img src="../assets/linkedin.png"/>
        </div>
        </>
    )
}

export default Home