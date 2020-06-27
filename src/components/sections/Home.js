import React from 'react';
import { scroller } from 'react-scroll';

const Home = () => {
  const triggerScroll = (location) => {
    scroller.scrollTo(location, {
      activeClass: 'active',
      duration: 1000,
      smooth: 'easeInOutQuint',
      offset:
        location === 'home'
          ? 0
          : -document.querySelector('#navbar').clientHeight + 1,
    });
  };

  return (
    <div id='home'>
      <div id='main-section'>
        <ul>
          <li>
            <h2 onClick={() => console.log('Resume')}>RESUME</h2>
          </li>
          <li>
            <h2 onClick={() => triggerScroll('projects')}>PROJECTS</h2>
          </li>
          <li>
            <h2 onClick={() => triggerScroll('contact')}>CONTACT</h2>
          </li>
        </ul>
        <div id='title'>
          <h1>ZACH SKILES</h1>
          <p>Computer Science @ Purdue</p>
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <a className='transition' onClick={() => triggerScroll('about')}>
        About <i className='fas fa-arrow-alt-circle-down'></i>
      </a>
    </div>
  );
};

export default Home;
