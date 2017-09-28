const React = require('react');
const ReactDOM = require('react-dom');
const HomeComponent = require('./home');
const WhitFielset = require('./withFieldset');

const props = {
  title: "Hola Mundo",
  isLogged: true,
};

const HomeComponentWithFieldset = WhitFielset(HomeComponent);
ReactDOM.render(
  <HomeComponentWithFieldset {...props} />,
  document.getElementById('root-app'),
);