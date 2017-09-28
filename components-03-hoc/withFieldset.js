const React = require('react');

const WithFieldset = (WrappedComponent) => {
  return class extends React.Component {
      contructor(props) {
        super(props);
      }

      render() {
        return (
          <fieldset id={this.props.id}>
            <WrappedComponent {...this.props} />
          </fieldset>
        )
      }
  }
};

module.exports = WithFieldset;