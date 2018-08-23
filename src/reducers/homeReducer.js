import * as actionType from '../data/actions';

const initalState = {
  nowShowingList: [],
};

export default (state = initalState, action) => {
  if (action.type === actionType.GET_NOW_SHOWING) {
    return {
      nowShowingList: state.nowShowingList,
    };
  }

  if (action.type === actionType.SET_NOW_SHOWING) {
    if (state.nowShowingList.length > 0) {
      return {
        ...state,
        nowShowingList: state.nowShowingList,
      };
    }
    return {
      ...state,
      nowShowingList: action.value,
    };
  }

  return state;
};
