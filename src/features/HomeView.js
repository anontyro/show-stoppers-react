import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionList from '../actions/actionCreators';

class HomeView extends Component {
  componentDidMount() {
  
    this.props.getNowShowing();

  }

  render() {

    let homeRender;

    if(this.props.nowShowing.length > 0) {
      homeRender = (
        <div className='home-container'>
          <h1>Default homepage</h1>
          <div className='showGrid'>
            {this.props.nowShowing}
          </div>
        </div>
      );
    } else {
      homeRender = (
        <div className="page-loader">
          Loading...
        </div>
      );
    }

    return <div>{homeRender}</div>;
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
