import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Users from './components/users'
import Contact from './components/contact'
import Register from './pages/register'
import Login from './pages/login'

import Notfound from './components/notfound'
const routing = (
    <Router >
        <header className="header">
		<h1 className="logo"><Link to="/login">Home</Link></h1>
      <ul className="main-nav">
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
	</header>         
        <div>
            <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={Notfound} />
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))