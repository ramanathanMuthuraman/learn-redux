import React from 'react';

const ContactUs = (props) => (
  <div>
    <h4>Contact Us</h4>
    <button onClick={props.setActiveComponent.bind(this, 'Home')}> Home </button>
    <button onClick={props.setActiveComponent.bind(this, 'AboutUs')}> About Us </button>
  </div>
);

export default ContactUs;