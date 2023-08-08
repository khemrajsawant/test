// import {
//     CREATE_TUTORIAL,
//     RETRIEVE_TUTORIALS,
//     UPDATE_TUTORIAL,
//     DELETE_TUTORIAL,
//     DELETE_ALL_TUTORIALS,
//   } from "../actions/types";

export const CREATE_TUTORIAL = "CREATE_TUTORIAL";
export const RETRIEVE_TUTORIALS = "RETRIEVE_TUTORIALS";
export const UPDATE_TUTORIAL = "UPDATE_TUTORIAL";
export const DELETE_TUTORIAL = "DELETE_TUTORIAL";
export const DELETE_ALL_TUTORIALS = "DELETE_ALL_TUTORIALS";


  
  const initialState = [];
  
  function tutorialReducer(tutorials = initialState, action) {

    const { type, payload } = action;
  
    switch (type) {
      case CREATE_TUTORIAL:
        return [...tutorials, payload];
  
      case RETRIEVE_TUTORIALS:
        return payload;
  
      case UPDATE_TUTORIAL:
        return tutorials.map((tutorial) => {
          if (tutorial.id === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });
  
      case DELETE_TUTORIAL:
        return tutorials.filter(({ id }) => id !== payload);
  
      case DELETE_ALL_TUTORIALS:
        return [];
  
      default:
        return tutorials;
    }
  };
  
  export default tutorialReducer;