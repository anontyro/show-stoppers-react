import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionList from '../actions/actionCreators';

class SearchView extends Component {

    constructor (props) {
        super(props);

        this.state = {
            query: ''
        };

        this.searchChange = this.searchChange.bind(this); // must bind to the this section
    }

    searchChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    searchQuery() {
        if (this.state.query.length > 2) {
            this.props.getSearchResults(this.state.query);
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="search-view">
                <div className="search-bar">
                    <input type="text" value={this.state.query} onChange={this.searchChange}/>
                </div>
                <button onClick={() => this.searchQuery()}>search</button>
            </div>
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
