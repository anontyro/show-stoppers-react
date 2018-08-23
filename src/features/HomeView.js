import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowItem from './components/ShowItem';
import ApiHandler from '../services/http/ApiHandler';
import * as actionType from '../data/actions';

class HomeView extends Component {
  componentDidMount() {
    const showList = [];

    const apiHandler = new ApiHandler();

    apiHandler.getNowAiring()
      .then(response => response.response.results)
      .then((shows) => {
        for (let i = 0; i < shows.length; i += 1) {
          showList.push(<ShowItem show={shows[i]} key={shows[i].id} />);
        }
        this.props.setNowShowing(showList);
      });
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
  setNowShowing: list => dispatch({ type: actionType.SET_NOW_SHOWING, value: list }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
