import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.initContests
  }
  componentDidMount() {
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='app'>
        <Header text={this.state.pageHeader} />
        {this.state.contests.map(
          contest => <ContestPreview key={contest.id} contest={contest} />
        )}
      </div>
    );
  }
}

Header.propTypes = {
  initContests: PropTypes.array
};

export default App;
