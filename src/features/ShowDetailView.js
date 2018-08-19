import React,{Component} from 'react';
import ApiHandler from '../services/http/ApiHandler';

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

        apiHandler.getShowDetails(this.state.showId)
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




export default ShowDetailView;