const React = require('react');
const ReactDOM = require('react-dom');
const HomeComponent = require('./home');

const props = {
  title: "Hola Mundo",
  isLogged: true,
};

ReactDOM.render(
  <HomeComponent {...props} />,
  document.getElementById('root-app'),
);