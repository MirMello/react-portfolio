import React, { useEffect } from 'react';
import barnyard from '../../assets/images/barnyard.jpg'

function Project(props) {
    return (
        <div>
            <h1>My Project</h1>
            <p>My final project for my bootcamp is an app called Barnyard. It is an app made to help people with farm animals to connect.</p>
            <div>
                <img className='projectImg' src={barnyard}></img>
            </div>
        </div>
    );
}

export default Project;