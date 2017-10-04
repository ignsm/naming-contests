import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component{

  render(){
    return(
      <div className='contest-preview link'>
        <div className='category-name'>
          {this.props.contest.categoryName}
        </div>
        <div className='contest-name'>
          {this.props.contest.contestName}
        </div>
      </div>
    );
  }

}

Contest.propTypes = {
  contest: PropTypes.object.isRequired
};

export default Contest;
