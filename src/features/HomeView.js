import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionList from '../actions/actionCreators';

class HomeView extends Component {
  componentDidMount() {
  
    this.props.getNowShowing();

  }

  render() {
    return (
      <div className='home-container'>
        <h1>Default homepage</h1>
        <div className='showGrid'>
          {this.props.nowShowing}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nowShowing: state.home.nowShowingList,
});

const mapDispatchToProps = dispatch => ({
  setNowShowing: list => dispatch(actionList.getNowShowing(list)),
  getNowShowing: () => dispatch(actionList.nowShowingList())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
