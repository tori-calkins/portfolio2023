import React from "react"
import ReactIcon from'../assets/reacticon.png'
import RailsIcon from'../assets/railsicon.png'
import RubyIcon from'../assets/rubyicon.png'
import JavaScriptIcon from'../assets/javascripticon.png'
import HTMLIcon from'../assets/htmlicon.png'
import CSSIcon from'../assets/cssicon.png'
import SlackIcon from'../assets/slackicon.png'
import VSCodeIcon from'../assets/vscodeicon.png'
import profilepic from '../assets/profilepicupdated.jpg'

const AboutMe= () => {

    return (
        <>
        <div id="makespace">
            <img id="aboutmepicture" src={profilepic} alt="Profile Picture of me"/>
            <div id="icons">
                <img src={ReactIcon} alt="React Icon"/>
                <img src={RailsIcon} alt="Rails Icon"/>
                <img src={CSSIcon} alt="CSS Icon"/>
                <img src={JavaScriptIcon} alt="JavaScript Icon"/>
                <img src={RubyIcon} alt="Ruby Icon"/>
                <img src={HTMLIcon} alt="HTML Icon"/>
                <img src={SlackIcon} alt="Slack Icon"/>
                <img src={VSCodeIcon} alt="VSCode Icon"/>
            </div>
            <div className="aboutme">
                <p>Hello! I'm Tori, I'm passionate about weaving technology with teamwork to craft innovative solutions. Beyond my coding adventures, you'll often find me twirling on the dance floor to some country beats, sharing laughs with friends, or exploring local restaurants.
                <br/>
                <br/>
                My enthusiasm for technology is fueled by the collaborative spirit— I thrive on pair programming and diving into projects alongside a dynamic team. As a dedicated worker, I thoroughly enjoy the challenge of problem-solving and successfully handling multiple tasks simultaneously. I believe in the power of synergy, where diverse minds come together to create something truly exceptional.
                <br/>
                <br/>
                Whether it's finding elegant solutions to complex problems or savoring the joy of social connections, I bring the same level of dedication and passion. I'm driven by the excitement of conquering challenges, both in the coding realm and in my personal world, always eager to learn, adapt, and grow.
                <br/>
                <br/>
                Let's connect, collaborate, and code our way to remarkable innovations!</p>
            </div>
        </div>
        </>
    )
}

export default AboutMe
