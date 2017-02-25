import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from "react-dom";
import setActiveComponent from '../actions';

import Home from '../components/Home';
import ContactUs from '../components/ContactUs';

class ComponentManager extends Component {
  constructor(props) {
    super(props);
    this.componentMap = {
      Home,
      ContactUs
    };
  }

  componentDidMount() {
    this.props.setActiveComponent('Home');
  }

  componentWillReceiveProps(nextProps) {
    ReactDOM.render(
      React.createElement(this.componentMap[nextProps.activeComponent]),
      document.getElementById('componentContainer')
    );
  }
  render() {
    return (<div>
      <nav>
      <a href="javascript:void(0)" onClick={() => this.props.setActiveComponent('Home')}>Home</a>
        <span> | </span>
        <a href="javascript:void(0)" onClick={() => this.props.setActiveComponent('ContactUs')}>Contact Us</a>
      </nav>
      <h2>{this.props.activeComponent}</h2>
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