import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import {App} from './App';
import {Page2} from './page2.js';
import {Page3} from './page3.js';
import {Page1} from './page1.js';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/page3" component={Page3} />
  </Route>
);
