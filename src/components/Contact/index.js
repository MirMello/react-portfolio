import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Contact(props) {

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

    return (
        <div className='contactMe'>
            <h2>Contact Me</h2>
            <p><strong>Phone:</strong> 801-678-2814</p>
            <p><strong>Email:</strong> mirandaleeallen@gmail.com</p>
        </div>
    );
}

export default Contact;
