import * as actionType from '../data/actions';

const initalState = {
    showDetail: {}
};

export default (state = initalState, action) => {
    if (action.type === actionType.SET_SHOW_DETAIL) {
        return {
            ...state,
            showDetail: action.value,
        };
    }



    return state;
}
