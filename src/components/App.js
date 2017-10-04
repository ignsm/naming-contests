import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.contests
  }

  render() {
    return (
      <div className='app'>
        <Header text={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

App.propTypes = {
  contests: PropTypes.array
};

export default App;
