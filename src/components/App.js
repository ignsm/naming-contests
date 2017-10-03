import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(){
    super();
  }
  state = {
    pageHeader: 'Naming Contest'
  }

  render() {
    return (
      <div className='app'>
        <Header text={this.state.pageHeader} />
        {this.props.contests.map(
          contest => <ContestPreview key={contest.id} contest={contest} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  contests: PropTypes.array
};

export default App;
