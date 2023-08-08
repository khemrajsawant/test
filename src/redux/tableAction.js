// import {
//     CREATE_TUTORIAL,
//     RETRIEVE_TUTORIALS,
//     UPDATE_TUTORIAL,
//     DELETE_TUTORIAL,
//     DELETE_ALL_TUTORIALS,
//   } from "./types";
export const CREATE_TUTORIAL = "CREATE_TUTORIAL";
export const RETRIEVE_TUTORIALS = "RETRIEVE_TUTORIALS";
export const UPDATE_TUTORIAL = "UPDATE_TUTORIAL";
export const DELETE_TUTORIAL = "DELETE_TUTORIAL";
export const DELETE_ALL_TUTORIALS = "DELETE_ALL_TUTORIALS";
//   import TutorialDataService from "../services/TutorialService";
  
  export const createTutorial = (data) =>   {
    // try {
    //   const res = await TutorialDataService.create({ title, description });
  
     return {
        type: CREATE_TUTORIAL,
        payload: data,
      }
  
    //   return Promise.resolve(res.data);
    // } catch (err) {
    //   return Promise.reject(err);
    // }
  };
  
  export const retrieveTutorials = () =>  () => {
    // try {
    //   const res = await TutorialDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TUTORIALS,
        payload: res.data,
      });
    // } catch (err) {
    //   console.log(err);
    // }
  };
  
  export const updateTutorial = (id, data) =>  () => {
    // try {
    //   const res = await TutorialDataService.update(id, data);
  
      dispatch({
        type: UPDATE_TUTORIAL,
        payload: data,
      });
  
    //   return Promise.resolve(res.data);
    // } catch (err) {
    //   return Promise.reject(err);
    // }
  };
  
  export const deleteTutorial = (id) => {
    // try {
    //   await TutorialDataService.remove(id);
  
    //   dispatch({
    //     type: DELETE_TUTORIAL,
    //     payload: { id },
    //   });
      return {
        type: DELETE_TUTORIAL,
        payload: id
      };
    // } catch (err) {
    //   console.log(err);
    // }
  };
  
  export const deleteAllTutorials = (data) =>  () => {
    // try {
    //   const res = await TutorialDataService.removeAll();
  
      return{
        type: DELETE_ALL_TUTORIALS,
        payload: data,
      };
  
    //   return Promise.resolve(res.data);
    // } catch (err) {
    //   return Promise.reject(err);
    // }
  };
  
  export const findTutorialsByTitle = (title) => () => {
    // try {
    //   const res = await TutorialDataService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_TUTORIALS,
        payload: res.data,
      });
    // } catch (err) {
    //   console.log(err);
    // }
  };