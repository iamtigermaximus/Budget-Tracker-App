import React from 'react'
import {SocialFollow} from './SocialFollow'

export const Home = () => {
    return (
        <div>
            <div className="main-content">
                <div className="container">
                    <div className="home-image"></div>
                </div>
            </div> 
            <div className="home-texts">
                <h1>Hi, I'm Siegfred !</h1>
                <p>I'm a passionate web developer who wants to build and create meaningful projects.<br/>Im interested in broadening my knowledge in the frontend side and to work on ambitous projects with positive people. </p>
            </div>
            <div className="social-icon">
                <SocialFollow/>
            </div>
        </div>
    )
}
