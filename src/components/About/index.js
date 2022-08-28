import React, { useEffect } from 'react';
import Profile from '../../assets/images/IMG_3042.JPG'

function About(props) {
    return (
        <div>
            <h1>About Me</h1>
            <div className='container'>
                <div className='myPic'>
                    <img className='profileImg' src={Profile}></img>
                </div>
                <div className='aboutText'>
                    <p>Hello, My name is Miranda Mello! I have been married for five years with a baby girl on the way! I live in Utah with my husband and my rabbit.</p>

                    <p>I am fluent in Spanish and I enjoy learning different langaguages. I love to travel and see other cultures.</p>

                    <p>I love making art. I paint and draw when I have the time. I have a small side business making scrunchies. I am a big World of Warcraft player. I play about twice a week.</p>

                    <p>I have just completed bootcamp to get my coding certificate to become a full stack developer!</p>
                </div>
            </div>
        </div>
    );
}

export default About;