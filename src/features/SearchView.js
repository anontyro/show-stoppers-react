import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowItem from './components/ShowItem';
import * as actionList from '../actions/actionCreators';
import ApiHandler from '../services/http/ApiHandler';

class SearchView extends Component {

    constructor (props) {
        super(props);

        this.state = {
            query: '',
            results: [],
            numberPages: 0,
            page: 0,
            totalResults: 0,
        };

        this.searchChange = this.searchChange.bind(this); // must bind to the this section
    }

    searchChange(event) {
        this.setState({
            query: event.target.value
        });
    }

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

    searchQuery() {
        if (this.state.query || this.state.query.length > 2) {
            this.setState({
                results: []
            })

            this.searchUpdate()
                .then(() => {
                    console.log('resolved');
                    this.forceUpdate();
                });
            
        }
    }

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

    createShowGrid(list) {
        if(!list){
            return;
        }
        const output = [];
        for (let i = 0; i < list.length; i++) {
            output.push(<ShowItem show={list[i]} key={list[i].id}></ShowItem>)
        }
        return output;
    }

    componentWillMount() {
        
    }

    componentDidMount() {

    }

    componentWillUpdate() {
        this.buildResults();
    }

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
                    <button onClick={() => this.searchQuery()}>search</button>
                </div>
                <div className="search-results">
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
