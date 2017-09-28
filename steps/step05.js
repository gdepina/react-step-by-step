const React = require('react');
const ReactDOM = require('react-dom');

const Banner = (props) => (
  <div>
    <img src={props.image} />
  </div>
);

const Login = (props) => (
  <div>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <input type="submit" value="Login"/>
  </div>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: props.isLogged
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    alert(event.target.textContent)
  }

  getTemplate() {
    return(
      <div>
        <h1 onClick={this.handleClick}>{this.props.title}</h1>
        <Banner image="http://bit.ly/2fBOxsm"/>
      </div>
    )
  }

  render() {
    return this.state.isLogged ? this.getTemplate() : <Login/>;
  }
}


ReactDOM.render(
  <Home title="Hola Mundo" isLogged={true} />,
  document.getElementById('root-app'),
);