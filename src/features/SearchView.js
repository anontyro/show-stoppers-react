import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionList from '../actions/actionCreators';

class SearchView extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <p>Default Search View</p>

        );
    }

}

const mapStateToProps = state => ({
    searchResults: state.home.searchResults,
});

const mapDispatchToProps = dispatch => ({
    getSearchResults: query => dispatch(actionList.searchShows(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
