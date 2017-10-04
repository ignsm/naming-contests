import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 className="text-center">{this.props.text}</h2>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string
};

Header.defaultProps = {
  text: 'Hello, React!'
};

export default Header;
