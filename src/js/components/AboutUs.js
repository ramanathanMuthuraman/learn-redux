import React from 'react';

const AboutUs = (props) => (
    <div>
        <h4>About Us</h4>
        <button onClick={props.setActiveComponent.bind(this, 'Home')}> Home </button>
    </div>

);

export default AboutUs;