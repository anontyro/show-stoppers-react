import React,{Component} from 'react';
import { connect } from 'react-redux';
import ApiHandler from '../services/http/ApiHandler';
import * as actionType from '../data/actions';

class ShowDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showId: this.props.match.params.id,
            show: null
        };
    }

    componentDidMount() {
        const apiHandler = new ApiHandler();

        apiHandler.getShowDetails(this.props.match.params.id)
            .then(response => {
                console.log(response);
                return response.response
            })
            .then(show => this.setState({show: show}));
    }

    render(){

        let showView;

        if (this.state.show){
            showView = (
                <div>
                    <p>{this.state.show.name}</p>
                </div>
            );
        }

        return (
            <div>
                <p>Detail View</p>
                <p>Show ID: {this.state.showId}</p>
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