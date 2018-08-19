import React,{Component} from 'react';
import ShowItem from './components/ShowItem';
import ApiHandler from '../services/http/ApiHandler';


class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showList: []
        };
    }

    render() {

        let showList = [];

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

// const HomeView = () => {
//     let showList = [];

//     const apiHandler = new ApiHandler();
//     apiHandler.getNowAiring()
//         .then(response => response.response.results)
//         .then(shows => {
//             for (let i = 0; i < shows.length; i++) {
//                 showList.push(<ShowItem show={shows[i]} />);
//             }

//         });

//     return (
//         <div className='home-container'>
//             <h1>Default homepage</h1>
//             <div className='showGrid'>
//                 {showList}
//             </div>
//         </div>
//     );
// }


export default HomeView;