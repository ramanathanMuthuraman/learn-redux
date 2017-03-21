import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from "react-dom";
import setActiveComponent from '../actions';

import Home from '../components/Home';
import ContactUs from '../components/ContactUs';
import AboutUs from '../components/AboutUs';

class ComponentManager extends Component {
  constructor(props) {
    super(props);
    this.componentMap = {
      Home,
      ContactUs,
      AboutUs
    };
  }

  componentDidMount() {
    this.props.setActiveComponent('Home');
  }

  componentWillReceiveProps(nextProps) {
    ReactDOM.render(
      React.createElement(this.componentMap[nextProps.activeComponent], this.props),
      document.getElementById('componentContainer')
    );
  }
  render() {
    return (<div>
      <div id="componentContainer"></div>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    activeComponent: state.activeComponent
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveComponent: (component) => {
      dispatch(setActiveComponent(component))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentManager);