import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiHandler from '../services/http/ApiHandler';
import * as actionType from '../data/actions';
import ShowDetailMain from './components/DetailComponents/ShowDetailMain';
import ShowsSideInfo from './components/DetailComponents/ShowsSideInfo';
import ShowSideInfo from './components/DetailComponents/ShowsSideInfo';

import './ShowDetailView.css';
class ShowDetailView extends Component {

    componentDidMount() {
        const apiHandler = new ApiHandler();

        apiHandler.getShowDetails(this.props.match.params.id)
            .then(response => {
                return response.response
            })
            .then(show => {
                console.log(show);
                this.props.setShowDetail(show)
            });
    }

    render(){

        let showView;

        if (this.props.showDetail){
            showView = (
                <div className='show-detail-container'>
                    <ShowSideInfo show = {this.props.showDetail}></ShowSideInfo>
                    <ShowDetailMain show={this.props.showDetail}></ShowDetailMain>
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
});

const mapDispatchToProps = dispatch => ({
    setShowDetail: show => dispatch({type: actionType.SET_SHOW_DETAIL, value: show}),

});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailView);