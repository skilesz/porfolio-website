import React, { useEffect } from 'react';

const Navbar = () => {
  var hidden = true;

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > document.documentElement.clientHeight) {
        document.querySelector('#navbar').className = '';
        hidden = false;
      } else {
        document.querySelector('#navbar').className = 'hidden';
        hidden = true;
      }
    });
  }, []);

  return (
    <div id='navbar' className='hidden'>
      <div className='container'>
        <h2>
          <a href='#'>ZS</a>
        </h2>
        <ul>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#experience'>EXPERIENCE</a>
          </li>
          <li>
            <a href='#projects'>PROJECTS</a>
          </li>
          <li>
            <a href='#skills'>SKILLS</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
