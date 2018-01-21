import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Home} from './App.js';
import {HomeMy3} from './page3.js';
import { Button } from 'react-materialize';
import './page2.css';
import './materialize-css/dist/css/materialize.min.css';
class Page2 extends React.Component {
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
        <Route exact path='/page2' component={HomeMy}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/page3' component={HomeMy3}/>
      </Switch>
    );
  }
}
export const HomeMy = () => (
  <div className='homePage1'>
    <div className='button1'>
    <Button className='waves-effect waves-light purple lighten-3'><Link to='/' style={{ textDecoration: 'none', color: 'white'}}>Jump again</Link></Button>
  </div>
  <div className='button2'>
    <Button className='waves-effect waves-light deep-purple accent-1'><Link to='/page3'style={{ textDecoration: 'none', color: 'white'}}>Do it again</Link></Button>
  </div>

</div>
)
