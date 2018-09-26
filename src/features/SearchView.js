import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowItem from './components/ShowItem';
import * as actionList from '../actions/actionCreators';
import ApiHandler from '../services/http/ApiHandler';
import './SearchView.css';

/**
 * Search View class
 * React Component that is mapping local state to hold search information
 * the search update method relies on a promise structure to allow for the api
 * callback to complete correctly
 */
class SearchView extends Component {

    constructor (props) {
        super(props);

        // set the inital state of the page containing the empty details
        this.state = {
            query: '',
            results: [],
            numberPages: 0,
            page: 0,
            totalResults: 0,
        };

        this.searchChange = this.searchChange.bind(this); // must bind to the this section
    }

    // on change update the query to be used as the search term
    searchChange(event) {
        this.setState({
            query: event.target.value
        });
    }


    /**
     * update method that will use the query and call the API to get the search
     * results for the selected query
     */
    searchUpdate() {
        return new Promise ((resolve, reject) => {
            const apiHandler = new ApiHandler();
            apiHandler.getShowSearch(encodeURI(this.state.query))
                .then(response => response.response)
                .then(list => this.props.setSearchResults(list) )
                .then(() => {
                    return resolve(this.state.results);
                })
                .catch(err => console.error(err));
        });
    }

    /**
     * Main query command from the button press, uses basic validation to ensure
     * that the query has a value and will reset the results before starting the
     * promise to update the results
     */
    searchQueryBtn() {
        if (this.state.query || this.state.query.length > 2) {
            this.setState({
                results: []
            })
            this.searchUpdate().then(() =>this.forceUpdate());
        }
    }

    /**
     * State update method that is used to update the state of the values
     * from the API callback with the relivent details to be used whilst displaying
     * the data
     */
    buildResults() {

        if(this.props.searchResults.results && this.state.results.length === 0) {
            this.setState({
                results: this.createShowGrid(this.props.searchResults.results),
                numberPages: this.props.searchResults.total_pages,
                page: this.props.searchResults.page,
                totalResults: this.props.searchResults.total_results
            })
        }

        return this.state.results;
    }

    /**
     * Ensures there is a list to produce a grid out of and if so it will
     * create the show Items and put them in a list together
     * @param {*} list 
     */
    createShowGrid(list) {
        if(!list){
            return;
        }
        const output = [];
        for (let i = 0; i < list.length; i++) {
            output.push(<ShowItem className="search-show" show={list[i]} key={list[i].id}></ShowItem>)
        }
        return output;
    }

    /** When the component is going to update build the new local state */
    componentWillUpdate() {
        this.buildResults();
    }
    // not sure if this is required at present
    componentWillUnmount() {
        this.setState({
            results: []
        });
    }

    render() {
        return (
            <div className="search-view">
                <div className="search-bar">
                    <input type="text" value={this.state.query} onChange={this.searchChange}/>
                    <button onClick={() => this.searchQueryBtn()}>search</button>
                </div>
                <div className="showGrid">
                    {this.state.results}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    searchResults: state.home.searchResults,
});

const mapDispatchToProps = dispatch => ({
    setSearchResults: list => dispatch(actionList.getSearchResults(list)),
    getSearchResults: query => dispatch(actionList.searchShows(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
