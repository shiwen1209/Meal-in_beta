import axios from 'axios'

export const searchRecipes = (filters) => {

    return axios({
        method: 'get',
        url: '/api/search',
        params: filters
    })
};