import React from 'react';

const Home = (props) => (
  <div>
    <h4>Home</h4>
    <button onClick={props.setActiveComponent.bind(this, 'ContactUs')}> Contact Us </button>
    <button onClick={props.setActiveComponent.bind(this, 'AboutUs')}> About Us </button>
  </div>
);

export default Home;