import hash from './hash.js';
import axios from 'axios';

const PRIVATE_KEY = 'bebc14fb8e0de0eb1ddaa7489aa94e51c83d5ba9';
const PUBLIC_KEY = '10d9adf698c7e03e826886b469f64fda';
const API_URL = 'https://gateway.marvel.com/v1/public';
const timeStamp = 1;

const axiosInst = axios.create({
  baseURL: API_URL,
  params: {
    apikey: PUBLIC_KEY,
    hash: hash({ timeStamp, PRIVATE_KEY, PUBLIC_KEY }),
    ts: timeStamp,
  },
});

// console.log(hash({timeStamp, PRIVATE_KEY, PUBLIC_KEY}));

export const api = {
  getCharacters: async ({
    nameStartsWith = '',
    offset = 0,
    limit = 16,
    comics = '',
    orderBy = '',
    modifiedSince = '',
  }) => {
    try {
      const res = await axiosInst.get('/characters', {
        params: {
          ...(nameStartsWith && { nameStartsWith }),
          ...(offset && { offset }),
          ...(limit && { limit }),
          ...(comics && { comics }),
          ...(orderBy && { orderBy }),
          ...(modifiedSince && { modifiedSince }),
        },
      });
      const data = res.data.data.results;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getCharactersById: async ({ characterId }) => {
    try {
      const res = await axiosInst.get(`/characters/${characterId}`);
      const data = res.data.data.results;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getComics: async ({
    format = '',
    title = '',
    startYear = 0,
    limit = 16,
    offset = 0,
    orderBy = '',
  }) => {
    try {
      const res = await axiosInst.get('/comics', {
        params: {
          ...(format && { format }),
          ...(title && { title }),
          ...(offset && { offset }),
          ...(limit && { limit }),
          ...(startYear && { startYear }),
          ...(orderBy && { orderBy }),
        },
      });
      const data = res.data.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

// console.log(api.getCharacters({}));
