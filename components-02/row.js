const propTypes = require('prop-types');

const Row = (props) => (
  <li>{props.text}</li>
);

Row.PropTypes = {
  image: propTypes.string,
};

module.exports = Row;