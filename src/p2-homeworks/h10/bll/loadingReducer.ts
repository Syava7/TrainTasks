
const initState = {
  isLoading: false
};

type ActionType = {
  type: 'CHANGE-LOADING'
  isLoading: boolean
}

export const loadingReducer = (state = initState, action: ActionType): typeof initState => {
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
              ...state,
              isLoading: action.isLoading
            }
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean): ActionType => {
  return {
    type: 'CHANGE-LOADING',
    isLoading
  }
};