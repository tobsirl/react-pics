import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID 69f8a965f8ea12b3ccb3d856257a389343332bdb57564efd91c73985efce0058`
  }
});
