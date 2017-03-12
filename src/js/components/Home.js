import React from 'react';

const Home = (props) => (
  <div>
    <h4>Home</h4>
    <a href="javascript:void(0)" onClick={props.setActiveComponent.bind(this, 'ContactUs')}> Contact Us </a>
    <span> | </span>
    <a href="javascript:void(0)" onClick={props.setActiveComponent.bind(this, 'AboutUs')}> About Us </a>
  </div>
);

export default Home;