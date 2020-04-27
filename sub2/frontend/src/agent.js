import axios from "axios";

// const API_ROOT = "http://52.79.156.160/api";
const API_ROOT = "http://localhost:8000/api";
const Auth_ROOT = "http://localhost:8000/rest-auth/"

const responseBody = (res) => res.body;

const requests = {
  get: (url, header) => axios.get(`${API_ROOT}${url}`, { headers: header }),
  post: (url, body, header) => 
    axios.post(`${Auth_ROOT}${url}`, body, {headers: header}),
};

const Data = {
  all: (pageNumber) => requests.get(`/all_stores?page=${pageNumber}`),

  search: (info, pageNumber) =>
    requests.get(
      `/search_stores?store_name=${info.store_name}&address=${info.address}&page=${pageNumber}`
    ),

  detail: (id) => requests.get(`/id_stores?store_id=${id}`),

  id_review: (store_id) => requests.get(`/id_reviews?store_id=${store_id}`),

  id_menu: (store_id) => requests.get(`/storeid_menus?store_id=${store_id}`),
};

const Auth = {
  login : (name, id, pw) => requests.post('/login', {username: name, email: id, password: pw}, {})
}

export default {
  Data,
  Auth
};
