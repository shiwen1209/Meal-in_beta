import axios from 'axios';

export const createMealplan = (mealplan) => {
    debugger
    return axios.post('/api/mealplan', mealplan);
}

// export const updateRating = (rating) => {
//     return axios.patch('/api/ratings', rating);
// }