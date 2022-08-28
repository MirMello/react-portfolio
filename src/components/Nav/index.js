import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

  return (
      <nav>
        <ul>
            <div><a href="#about">About Me</a></div>
            <div><a href="#project">Project</a></div>
            <div><a href="#contact">Contact</a></div>
            <div><a href="https://docs.google.com/document/d/1-hfPVej1Wy-89wDlzbDobz1vn__Lpki0CsHyD4kfo4c/edit">Resume</a></div>
        </ul>
      </nav>
  );
}

export default Nav;
