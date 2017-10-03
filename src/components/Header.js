import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <div className='App'>
        <h2 className="text-center">{this.text}</h2>
      </div>
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
