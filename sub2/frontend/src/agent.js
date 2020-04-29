import axios from "axios";

// const API_ROOT = "http://52.79.156.160";
const API_ROOT = "http://localhost:8000";

const requests = {
  get: (url, header) => axios.get(`${API_ROOT}${url}`, { headers: header }),
  post: (url, body, header) =>
    axios.post(`${API_ROOT}${url}`, body, { headers: header }),
};

const Data = {
  all: (pageNumber) => requests.get(`/api/all_stores?page=${pageNumber}`),

  search: (info, pageNumber) =>
    requests.get(
      `/api/search_stores?store_name=${info.store_name}&address=${info.address}&page=${pageNumber}`
    ),

  detail: (id) => requests.get(`/api/id_stores?store_id=${id}`),

  id_review: (store_id) => requests.get(`/api/id_reviews?store_id=${store_id}`),

  id_menu: (store_id) =>
    requests.get(`/api/storeid_menus?store_id=${store_id}`),

  register: (user) =>
    requests.post(`/rest-auth/registration/`, {
      email: user.email,
      username: user.username,
      password1: user.password,
      password2: user.pw2,
    }),
  post_review: (review) =>
    requests.post(`/api/post_review/`, {
      store_id: review.store_id,
      user_id: review.user_id,
      total_score: review.total_score,
      content: review.content,
    }),
  count_stores: (address) =>
    requests.get(`/api/count_stores?address=${address}`),
};

const Auth = {
  login: (name, pw) =>
    requests.post("/rest-auth/login/", { username: name, password: pw }, {}),
};

export default {
  Data,
  Auth,
};
