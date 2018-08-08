import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

class AppUsingArrow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sum: 0 };

    this.a = createRef();
    this.b = createRef();
  }

  sum = () =>
    this.setState({ sum: +this.a.current.value + +this.b.current.value });

  render() {
    return (
      <div>
        <h2>Using {"sum = () => {...}"}</h2>
        <div>Result: {this.state.sum}</div>
        a: <input type="number" ref={this.a} />
        b: <input type="number" ref={this.b} />
        <button onClick={this.sum}>Sum both numbers</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sum: 0 };
    this.sum = this.sum.bind(this);

    this.a = createRef();
    this.b = createRef();
  }

  sum() {
    this.setState({ sum: +this.a.current.value + +this.b.current.value });
  }

  render() {
    return (
      <div>
        <h2>Using {"sum() {...}"}</h2>
        <div>Result: {this.state.sum}</div>
        a: <input type="number" ref={this.a} />
        b: <input type="number" ref={this.b} />
        <button onClick={this.sum}>Sum both numbers</button>
      </div>
    );
  }
}

const Container = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Using Bind</Link>
        </li>
        <li>
          <Link to="/arrow">Using Arrow syntax</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={App} />
      <Route path="/arrow" component={AppUsingArrow} />
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Container />, rootElement);
