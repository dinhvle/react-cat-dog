var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./components/HomePage');

ReactDOM.render(
  <HomePage />,  //same as <HomePage></HomePage> (or) React.createElement(HomePage)
  document.getElementById('root'),
);