import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiHandler from '../services/http/ApiHandler';
import * as actionType from '../data/actions';

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
                <div>
                    <p>{this.props.showDetail.name}</p>
                </div>
            );
        }

        return (
            <div>
                <p>Detail View</p>
                <p>Show ID: {this.props.match.params.id}</p>
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