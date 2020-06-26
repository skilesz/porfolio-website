import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Navbar = () => {
  useEffect(() => {
    if (window.pageYOffset > document.documentElement.clientHeight) {
      document.querySelector('#navbar').className = '';
    } else {
      document.querySelector('#navbar').className = 'hidden';
    }

    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > document.documentElement.clientHeight) {
        document.querySelector('#navbar').className = '';
      } else {
        document.querySelector('#navbar').className = 'hidden';
      }
    });
  }, []);

  const triggerScroll = (location) => {
    scroller.scrollTo(location, {
      activeClass: 'active',
      duration: 1000,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <div id='navbar' className='hidden'>
      <div className='container'>
        <h2>
          {/* eslint-disable-next-line */}
          <a onClick={() => triggerScroll('home')}>ZS</a>
        </h2>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => triggerScroll('about')}>ABOUT</a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => triggerScroll('experience')}>EXPERIENCE</a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => triggerScroll('projects')}>PROJECTS</a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => triggerScroll('skills')}>SKILLS</a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => triggerScroll('contact')}>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
