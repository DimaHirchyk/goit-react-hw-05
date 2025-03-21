import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2FhYTU5MTE2YjZjZTc1Njc4NDNhMjVjNDMxNzk2OCIsIm5iZiI6MTc0MjM5NTU5OS4xMDA5OTk4LCJzdWIiOiI2N2RhZDhjZmU1NGU5MjJkNzI2Y2MxODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cM1E3H4bafrDVitbg4oe4S_zjZMPKN8uPRi5TYBhmEs",
  },
};

export const fetchTranding = async (page) => {
  const resp = await axios(`trending/movie/week?page=${page}`, options);
  return resp.data;
};

export const fetchMovieDetails = async (moviesId) => {
  const resp = await axios(`movie/${moviesId}`, options);
  return resp.data;
};

export const fetchMovieCredits = async (moviesId) => {
  const resp = await axios(`movie/${moviesId}/credits`, options);
  return resp.data;
};

export const fetchMovieRewiews = async (moviesId) => {
  const resp = await axios(`movie/${moviesId}/reviews`, options);
  return resp.data;
};
