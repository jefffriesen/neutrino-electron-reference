import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
            <Route path="/" exact component={Counter} />
            <Route path="/about" render={() => <h3>About Us</h3>} />
          </Col>
        </Grid>
      </Router>
    );
  }
}

const Nav = () => (
  <nav style={navStyles}>
    <ul style={navStyles.list}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
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
};
