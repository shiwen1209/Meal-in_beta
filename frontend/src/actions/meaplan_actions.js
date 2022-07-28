import * as MpApiUtil from '../util/mp_api_util';

export const RECEIVE_MEALPLAN = "RECEIVE_MEALPLAN";
export const REMOVE_MEALPLAN = "REMOVE_MEALPLAN";

export const receiveMealplan = (data) => ({
type: RECEIVE_MEALPLAN,
 mealplan: data.mealplan,
 nutrients: data.nutrients
 })

export const removeMealplan = () => ({
    type: REMOVE_MEALPLAN
})


 export const createMealplan = (mealplan) => dispatch => {
     return (
     MpApiUtil.createMealplan(mealplan)
             .then((payload) => {
                return dispatch(receiveMealplan(payload.data))
            })
     )
 }
