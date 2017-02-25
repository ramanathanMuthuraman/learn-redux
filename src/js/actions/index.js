const setActiveComponent = (component) => {
  return {
    type: 'ACTIVE-COMPONENT',
    payload: component
  }
};

export default setActiveComponent;