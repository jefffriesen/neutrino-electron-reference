import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import {Grid, Col} from 'react-bootstrap';
import Counter from './counter';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Col sm={2}>
            <Nav />
          </Col>
          <Col sm={10}>
            <h2>Hello Neutrino + React!</h2>
            <Switch>
              <Route path="/" exact component={Counter} />
              <Route path="/about" render={() => <h3>About Us</h3>} />
              <Route render={() => <h3>No route found!</h3>} />
            </Switch>
          </Col>
        </Grid>
      </Router>
    );
  }
}

const Nav = () => (
  <nav style={navStyles}>
    <ul style={navStyles.list}>
      <li>
        <NavLink to="/" exact activeStyle={navStyles.activeLinks}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={navStyles.activeLinks}>About</NavLink>
      </li>
    </ul>
  </nav>
);

const navStyles = {
  marginTop: '60px',
  list: {
    listStyleType: 'none',
    textTransform: 'uppercase',
    lineHeight: '2',
    paddingLeft: '10px',
  },
  activeLinks: {
    fontWeight: 900,
  },
};
