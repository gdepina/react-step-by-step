const React = require('react');
const propTypes = require('prop-types');
const BannerComponent = require('./banner');
const LoginComponent = require('./login');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: props.isLogged
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Se ejecuta después del render()');
  }

  componentWillMount() {
    console.log('Se ejecuta antes del render()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Se ejecuta cuando reciba nuevas props');
    this.setState = {
      isLogged: nextProps.isLogged
    };
  }

  handleClick(event) {
    alert(event.target.textContent)
  }

  getTemplate() {
    return(
      <div>
        <h1 onClick={this.handleClick}>{this.props.title}</h1>
        <BannerComponent image="http://bit.ly/2fBOxsm"/>
      </div>
    )
  }

  render() {
    return this.state.isLogged ? this.getTemplate() : <LoginComponent/>;
  }
}

Home.PropTypes = {
  title: propTypes.string.isRequired,
  isLogged: propTypes.boolean,
};

module.exports = Home;