import * as actionType from '../data/actions';

const initalState = {
    showDetail: {},
    similarShows: [],
};

export default (state = initalState, action) => {
    if (action.type === actionType.SET_SHOW_DETAIL) {
        return {
            ...state,
            showDetail: action.value,
        };
    }

    if(action.type === actionType.GET_SIMILAR_SHOWS) {
        return {
            ...state,
            similarShows: action.value
        }
    }



    return state;
}
