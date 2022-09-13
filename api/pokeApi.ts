import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// Example: pokeApi.get('/pokemon?offset=24&limit=100');

export default pokeApi;
