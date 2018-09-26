import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiHandler from '../services/http/ApiHandler';
import * as actionList from '../actions/actionCreators';
import ShowDetailMain from './components/DetailComponents/ShowDetailMain';
import ShowsSideInfo from './components/DetailComponents/ShowsSideInfo';
import ShowSideInfo from './components/DetailComponents/ShowsSideInfo';

import './ShowDetailView.css';
class ShowDetailView extends Component {

    updateSeason = (showId, season) => {
        return this.props.getSeason(showId, season);
    }

    componentDidMount() {
        const apiHandler = new ApiHandler();

        apiHandler.getShowDetails(this.props.match.params.id)
            .then(response => {
                return response.response
            })
            .then(show => {
                console.log(show);
                this.props.setShowDetail(show);
                this.props.getSimilarShows(show.id);
                this.props.getSeason(show.id, 1);
            });

    }

    render(){

        // console.log(this.props.similarShows);

        let showView;

        if (this.props.showDetail.id){
            showView = (
                <div className='show-detail-container'>
                    <ShowSideInfo show = {this.props.showDetail} season = {this.props.seasonDetail}></ShowSideInfo>
                    <ShowDetailMain 
                        show={this.props.showDetail} 
                        similarShows={this.props.similarShows}
                        updateSeason = {this.updateSeason}
                        season = {this.props.seasonDetail}>
                    </ShowDetailMain>
                </div>
            );
        } else {
            showView = (
                <div className='page-loader'>
                    Loading...
                </div>
            );
        }

        return (
            <div>
                {showView}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showDetail: state.detail.showDetail,
    similarShows: state.detail.similarShows,
    seasonDetail: state.detail.seasonDetail,
});

const mapDispatchToProps = dispatch => ({
    setShowDetail: show => dispatch(actionList.setShowDetail(show)),
    getSimilarShows: id => dispatch(actionList.similarShowList(id)),
    getSeason: (showId, seasonNo) => dispatch(actionList.showSeasonDetail(showId, seasonNo)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailView);