import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Navigation, HeaderSection, TourSection, FeaturesSection, ColorSection } from './components';

import '../styles/index.sass';

class App extends Component {
  render() {
    return(
      <div>
        <Navigation />
        <HeaderSection />
        <TourSection />
        <FeaturesSection />
        <ColorSection />
      </div>
    );
  }

  onAddItem(){
    this.props.onAdd('add');
  }
};

export default connect(
  state => ({
    onState: state.newReducer
  }),
  dispatch => ({
    onAdd(payload) {
      dispatch({ type: 'ADD', payload })
    }
  })
)(App);