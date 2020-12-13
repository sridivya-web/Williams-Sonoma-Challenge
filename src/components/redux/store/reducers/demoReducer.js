import {SAVE_PRODUCT} from "../constants/actionTypes";


  const initialState ={
      data: [],
     
  }

  /**
 * @function getEvent will return reducer value of action type
 * @param {*} state will be the initail state of reducer
 * @param {*} action will be the type of reducer
 */

  const demoReducerStore = (state = initialState, action) => {

    switch (action.type) {
      case SAVE_PRODUCT:
        //console.log('action',action);
        return { ...state, 
            data: action.payload}
        
      default:
        return state;
    }
  };

  export default demoReducerStore;