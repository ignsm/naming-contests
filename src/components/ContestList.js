import React, { Component } from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

class ContestList extends Component{
  constructor(props){
    super(props);
  }
  state = {
    contests: this.props.contests
  }
  render(){
    return(
      <div className='contest-list'>
        {this.state.contests.map(
          contest => <ContestPreview key={contest.id} contest={contest} />
        )}
      </div>
    );
  }
}

ContestList.propTypes = {
  contests: PropTypes.array
};

export default ContestList;
