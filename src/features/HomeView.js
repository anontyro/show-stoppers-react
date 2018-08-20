import React,{Component} from 'react';
import ShowItem from './components/ShowItem';
import ApiHandler from '../services/http/ApiHandler';
import {connect} from 'react-redux';

class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showList: []
        };
    }

    componentDidMount() {
        let showList = [];

        console.log(this.props.getNowShowing());

        const apiHandler = new ApiHandler();

        apiHandler.getNowAiring()
            .then(response => response.response.results)
            .then(shows => {
                for (let i = 0; i < shows.length; i++) {
                    showList.push(<ShowItem show={shows[i]} key={shows[i].id} />);
                }
                this.setState({
                    showList: showList
                });
            });
    }

    render() {

        console.log(this.props.nowShowing);

        return (
        <div className='home-container'>
            <h1>Default homepage</h1>
            <div className='showGrid'>
                {this.state.showList}
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        nowShowing: state.nowShowingList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getNowShowing: () => dispatch({type: 'GET_NOW_SHOWING'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);