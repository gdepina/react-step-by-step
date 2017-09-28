const React = require('react');
const ReactDOM = require('react-dom');

/* DONT
const Home = function() {
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  )
};
*/

/* DO */
const Home = (props) => (
    <div>
      <h1>{props.title}</h1>
    </div>
);


ReactDOM.render(
  <Home title="Hola Mundo" />,
  document.getElementById('root-app'),
);