const React = require('react');
const propTypes = require('prop-types');
const RowComponent = require('./row');
const ListComponent = require('./list');
const LoadingComponent = require('./loading');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    fetch('url.com/items')
      .then((res) => {
        this.setState = {
          items: res.items
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getTemplate() {
    if (this.state.items.length > 0) {
      return <LoadingComponent />
    } else {
      return (
        <ListComponent>
          {this.state.items.map( (item, index) => {
            return <RowComponent key={index} text={item.text} />
          })}
        </ListComponent>
      )
    }
  }

  render() {
    return this.getTemplate()
  }
}

Home.PropTypes = {
  title: propTypes.string.isRequired,
  isLogged: propTypes.boolean,
};

module.exports = Home;