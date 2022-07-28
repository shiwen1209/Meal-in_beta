import * as MpApiUtil from '../util/mp_api_util';

export const RECEIVE_MEALPLAN = "RECEIVE_MEALPLAN";

export const receiveMealplan = (mealplan) => ({
type: RECEIVE_MEALPLAN,
 mealplan
 })

 export const createMealplan = (mealplan) => dispatch => {
     return (
     MpApiUtil.createMealplan(mealplan)
             .then((payload) => dispatch(receiveMealplan(payload.data)))
     )
 }
