
const initalState = {
    nowShowingList: []
};

const reducer = (state = initalState, action) => {

    if(action.type === 'GET_NOW_SHOWING') {
        return {
            nowShowingList: state.nowShowingList
        }
    }

    if(action.type === 'SET_NOW_SHOWING') {
        if(state.nowShowingList.length > 0) {
            return {
                nowShowingList: state.nowShowingList
            }
        }
        return {
            nowShowingList: action.value
        }
    }

    return state;
}

export default reducer;