import axios from 'axios';

export const ElementsService = {
  get: async function () {
    return axios.get('http://localhost:8080/definition');
  },
};
