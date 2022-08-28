import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import Nav from '../Nav';

function Header(props) {

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

    return (
        <header>
            <h2>Miranda Mello</h2>
        <Nav></Nav>
        </header>
    );
}

export default Header;
