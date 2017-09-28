const propTypes = require('prop-types');

const List = (props) => (
  <ul>
    {props.children}
  </ul>
);

List.PropTypes = {
  children: propTypes.object,
};

module.exports = List;