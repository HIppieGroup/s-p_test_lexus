import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Element, scroller } from 'react-scroll';
import { Navigation, HeaderSection, TourSection, FeaturesSection, ColorSection } from './components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import actions from './actions'

import '../styles/index.sass';

var timer = null; 

class App extends Component {
  render() {
    const { action, tour, feature, color, car } = this.props
    return(
      <div className="dev-bg">
      <ReactCSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={10000}
          transitionLeaveTimeout={10000}
          transitionAppear={true}
          transitionAppearTimeout={1500}>
        <Navigation/>
            <Element name="top">
          <HeaderSection />
        </Element>
        <Element name="tour">
          <TourSection 
            data={tour} 
            tourEnabled={action.tourEnabled.bind(this)}
            tourSubEnabled={action.tourSubEnabled.bind(this)}/>
        </Element>
        <Element name="feature">
          <FeaturesSection 
            data={feature} 
            videoEnabled={action.videoEnabled.bind(this)}
            videoDisabled={action.videoDisabled.bind(this)}
            videoInit={action.videoInit.bind(this)}/>
        </Element>
        <Element name="color">
          <ColorSection 
            data={color} 
            colorChange={action.colorChange.bind(this)}
            carChange={action.carChange.bind(this)} 
            car={car}/>
        </Element>
        </ReactCSSTransitionGroup>
          <div ref="backDiv" className="parallax__layer parallax__layer--back" ></div>
      </div>
    );
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    document.querySelector('.preloader').classList.add('preloader__of');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const scroll = event.srcElement.body.scrollTop;
    const clientHeight = event.srcElement.body.clientHeight;
    const raz = clientHeight/scroll;
    const coor = 20 + (scroll/100)
    if (scroll < 1425){
      this.refs.backDiv.style.backgroundPosition= `center ${coor}%`;
    }
    if(timer !== null) {
      clearTimeout(timer);       
    }
    timer = setTimeout(function() {
      if (raz>9){
        scroller.scrollTo('top', {offset: -250, duration: 1000, delay: 100, smooth: true,})
      }else if (raz < 9 && raz > 2.3){
        scroller.scrollTo('tour', {offset: -180, duration: 1000, delay: 100, smooth: true,})
      }else if (raz < 2.3 && raz > 1.6) {
        scroller.scrollTo('feature', {offset: -180, duration: 1000, delay: 100, smooth: true,})
      } else if (raz < 1.6 && raz > 1) {
        scroller.scrollTo('color', {offset: -180, duration: 1000, delay: 100, smooth: true,})
      }
    }, 5000);
  }

};

export default connect(
  state => ({
    tour: state.tourReducer,
    feature: state.featuresReducer,
    color: state.colorReducer,
    car: state.colorCarReducer
  }),
  dispatch => ({
    action: bindActionCreators(actions, dispatch)
  })
)(App);


