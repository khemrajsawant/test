export const INCREMENT_ID = "INCREMENT_ID"
export const DECREMENT_ID = "DECREMENT_ID"

export const incrementId = (id = 0) => {
  return {
    type: INCREMENT_ID,
    payload: id
  }
}

export const decrementId = (id = 0) => {
    return {
      type: DECREMENT_ID,
      payload: id
    }
  }
