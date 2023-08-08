export const INCREMENT_ID = "INCREMENT_ID"
export const DECREMENT_ID = "DECREMENT_ID"


const initialState = {
  id: 1
}

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ID: return {
      ...state,
      id: state.id + 1
    }
    case DECREMENT_ID: return {
        ...state,
        id: state.id - 1
      }
    default: return state
  }
}

export default idReducer
