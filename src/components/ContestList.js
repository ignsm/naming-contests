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
        {Object.keys(this.state.contests).map(
          contestId => <ContestPreview
            onClick={this.props.onContestClick}
            key={contestId}
            contest={this.state.contests[contestId]} />
        )}
      </div>
    );
  }
}

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func
};

export default ContestList;
