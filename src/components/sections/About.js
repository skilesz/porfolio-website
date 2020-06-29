import React from 'react';

const About = () => {
  return (
    <div id='about'>
      <div className='content-container'>
        <img src={require('../../img/profile-photo.JPG')} alt='' />
        <div id='about-content'>
          <h2>ABOUT ME</h2>
          <div className='bottom-line'></div>
          {/* <h3>
            Computer science student @ Purdue University and web development
            enthusiast.
          </h3> */}
          <p>
            Hi, I'm Zach Skiles! I'm a rising junior at Purdue University
            majoring in Computer Science and minoring in Mathematics,
            Computer/Electrical Engineering, and Music Technology.
          </p>
          <br />
          <p>
            Here are some quick facts about me! First of all, technology and
            computers are my passion, and have been since I was very young.
            Second, I am a quick and avid learner, and my grades at Purdue
            reflect that. Last but not least, I'm a huge fan of Fleetwood Mac!
          </p>
          <br />
          <p>
            I work hard to <span>inspire</span> others with my creativity and
            passion, to <span>build</span> new and innovative technologies, and
            to <span>develop</span> meaningful and fulfilling relationships.
          </p>
          <br />
          <p>
            <strong>AREAS OF INTEREST</strong>
          </p>
          <p>Systems Programming, Hardware Design, Web Development, Security</p>
        </div>
      </div>
    </div>
  );
};

export default About;
