
// import * as httpClient from "./httpClient";
import {  SAVE_PRODUCT } from "../constants/actionTypes";



/**
 * @function createEventTypeSuccess it will return response and type to reducer
 * @param {*} response - response from api
 */
export function saveProductData(data) {
    return {
        type: SAVE_PRODUCT,
        payload: data,
    }
}


// /**
//  * @function it will return event of user in response an send it to reducer
//  * @param {*} requestBody- pass requestBody to api
//  */
// export function createEventType(requestBody) {
//   return dispatch => {
//       return httpClient
//       .post("api/v1/event-types", requestBody)
//       .then(response => {
//         if (response.result) {
//           dispatch(createEventTypeSuccess(response.result))
//         }
//       })
//       ;
//   };
// }
