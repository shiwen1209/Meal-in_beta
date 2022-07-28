import axios from 'axios';

export const createMealplan = (mealplan) => {
     return axios.post('/api/mealplan', mealplan);
 }
