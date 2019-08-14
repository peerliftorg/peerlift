import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Home from './containers/home';
import Notfound from './components/notFound';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/scholarships" component={App} />
        <Route component={Notfound} />

      </div>
    </Router>
  )

ReactDOM.render(
routing
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
