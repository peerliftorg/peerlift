import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Home from './containers/home';
import Notfound from './components/notFound';
import OppPage from './components/oppPage.js';
import Opps from './containers/Opps.js';
import Summer from './containers/summer.js';




import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Switch> 
        <Route exact path="/" component={Home} />
        <Route path="/scholarships" component={App} />
        <Route path="/summerprograms" component={Summer} />

        <Route component={Notfound} />
        </Switch>
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
