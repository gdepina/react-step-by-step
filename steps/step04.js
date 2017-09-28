const React = require('react');
const ReactDOM = require('react-dom');

const Banner = (props) => (
  <div>
    <img src={props.image} />
  </div>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    alert(event.target.textContent)
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.props.title}</h1>
        <Banner image="http://bit.ly/2fBOxsm"/>
      </div>
    )
  }
}


ReactDOM.render(
  <Home title="Hola Mundo" />,
  document.getElementById('root-app'),
);