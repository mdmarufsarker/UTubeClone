import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
//   method: 'GET',
//   url: '/auto-complete/',
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': import.meta.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
}

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });