import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends Component{

  handleClick = () => {
    console.log(this.props.contest);
  };

  render(){
    return(
      <div className='contest-preview link' onClick={this.handleClick}>
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

ContestPreview.propTypes = {
  contest: PropTypes.object
};

export default ContestPreview;
