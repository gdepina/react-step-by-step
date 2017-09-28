const propTypes = require('prop-types');

const Banner = (props) => (
  <div>
    <img src={props.image} />
  </div>
);

Banner.PropTypes = {
  image: propTypes.string,
};

module.exports = Banner;