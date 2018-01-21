import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Home} from './App.js';
import {HomeMy} from './page2.js';
import './dist/css/bootstrap.min.css';
import './dist/css/bootstrap.css';
import './page3.css';
class Page3 extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }
  render(){
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return(
      <Switch location={isModal ? this.previousLocation : location}>
        <Route exact path='/page3' component={HomeMy3}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/page2' component={HomeMy}/>
      </Switch>
    );
  }
}

export const HomeMy3 = () => (
  <div className='genericDev'>
    <button id='first' class="btn btn-outline-info"><Link to='/' style={{ textDecoration: 'none', color: '#5bc0de'}}>go again</Link></button>
    <button id='second' class="btn btn-info"><Link to='/page2' style={{ textDecoration: 'none', color: '#fff'}}>jump to u</Link></button>
  </div>
)
