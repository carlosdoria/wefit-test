import axios from "axios";

export const MoviesApi = axios.create({
  baseURL: "http://localhost:5001",
});
