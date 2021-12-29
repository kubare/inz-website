import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/admin/";

const getListTripsBoard = () => {
  return axios.get(API_URL + "listtrips", { headers: authHeader() });
};

const getListUsersBoard = () => {
  return axios.get(API_URL + "listusers", { headers: authHeader() });
};

const postTrips = () => {
  return axios.post(API_URL, { headers: authHeader() });
};

export default {
  getListTripsBoard,
  getListUsersBoard,
  postTrips
};
