import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {HomeMy} from './page2.js';
import {HomeMy3} from './page3.js';
import './App.css';
class ModalSwitch extends React.Component {

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

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={Home}/>
          <Route exact path='/page2' component={HomeMy}/>
          <Route exact path='/page3' component={HomeMy3}/>
        </Switch>
      </div>
    )
  }
}
export const Home = () => (

  <div className='homePage'>
    <div className='firstButton'>
    <Link to='/page2' style={{ textDecoration: 'none', color: 'white'}}>Jump</Link>
  </div>
  <div className='secondButton'>
      <Link to='/page3' style={{ textDecoration: 'none', color:'white'}}>Do it!</Link>
  </div>
</div>


)



const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
)

export default ModalGallery
