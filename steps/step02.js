const React = require('react');
const ReactDOM = require('react-dom');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}


ReactDOM.render(
  <Home title="Hola Mundo" />,
  document.getElementById('root-app'),
);