import { key } from './credentials.js';
import hash from './hash.js';
import axios from 'axios';

const PRIVATE_KEY = key.privatekey;
const PUBLIC_KEY = key.publickey;
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

export const api = {
  getCharacters: async ({
    nameStartsWith = '',
    offset = 0,
    limit = 16,
    comics = 0,
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
      return data;
    } catch (error) {
      location.replace("../404.html");
      console.log(error);
    }
  },
  getCharactersById: async ({ characterId }) => {
    try {
      const res = await axiosInst.get(`/characters/${characterId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      location.replace("../404.html");
      console.log(error);
    }
  },
  getComics: async ({
    format = '',
    title = '',
    titleStartsWith = '',
    startYear = 0,
    limit = 16,
    offset = 0,
    orderBy = '',
    dateDescriptor = '',
  }) => {
    try {
      const res = await axiosInst.get('/comics', {
        params: {
          ...(titleStartsWith && { titleStartsWith }),
          ...(format && { format }),
          ...(title && { title }),
          ...(offset && { offset }),
          ...(limit && { limit }),
          ...(startYear && { startYear }),
          ...(orderBy && { orderBy }),
          ...(dateDescriptor && { dateDescriptor }),
        },
      });
      const data = res.data.data;
      return data;
    } catch (error) {
      location.replace("../404.html");
      console.log(error);
    }
  },
  getComicById: async ({ comicId }) => {
    try {
      const res = await axiosInst.get(`/comics/${comicId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      location.replace("../404.html");
      console.log(error);
    }
  },
  getSeriesById: async ({ seriesId }) => {
    try {
      const res = await axiosInst.get(`/series/${seriesId}`);
      const data = res.data.data.results;
      return data;
    } catch (error) {
      location.replace("../404.html");
      console.log(error);
    }
  },
  getAllCharacters: async ({
    nameStartsWith = '',
    offset = 0,
    limit = 16,
    comics = 0,
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
      const data = res.data.data;
      return data;
    } catch (error) {
      location.replace("../404.html");
      console.log(error);
    }
  },
};