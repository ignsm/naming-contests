import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import PropTypes from 'prop-types';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    contests: this.props.data.contests
  }

  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId },
      `/contest/${contestId}`
    );

    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id
      });
    });
  }

  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }
    return 'Naming Contest';
  }

  currentContent(){
    if(this.state.currentContestId){
      return <Contest contest={this.currentContest()} />;
    } else{
      return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />;
    }
  }

  render() {
    return (
      <div className='app'>
        <Header text={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.object
};

export default App;
