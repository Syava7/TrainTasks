import {UserType} from '../HW8';


type ActionType = {
  type: 'sort'
  payload: 'up' | 'down'
} | {
  type: 'check'
  payload: number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
  switch (action.type) {
    case 'sort': {
      let copyState = [...state].sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        else if (a.name < b.name) {
          return -1
        }
        else {
          return 0
        }
      })
      return action.payload === 'up' ? copyState : copyState.reverse()
    }

    case 'check': {
      return state.filter(people => people.age > action.payload)
    }
    default:
      return state
  }
}

