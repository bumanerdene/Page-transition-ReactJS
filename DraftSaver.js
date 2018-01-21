import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import {Page2} from './page2.js';
import {Page3} from './page3.js';
import {Page1} from './page1.js';

const history = createBrowserHistory();
class App extends Component {
    render () {
        return (
            <Router history={history}>
                <div>
                    <header className="header">
                        <nav className="navbar container">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Lazy Loading Routes</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/page2">
                                    <span className="navbar-item">Maps</span>
                                </Link>
                                <Link to="/page3">
                                    <span className="navbar-item">Blog</span>
                                </Link>
                            </div>
                        </nav>
                    </header>

                    <section className="content">
                        <Switch>
                            <Route exact path="/page1" component={Page1} />
                            <Route path="/page2" component={Page2} />
                            <Route path="/page3" component={Page3} />

                        </Switch>
                    </section>
                </div>
            </Router>
        )
    }
}

export default App;
