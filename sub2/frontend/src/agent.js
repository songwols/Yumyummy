import axios from "axios";

const API_ROOT = "http://127.0.0.1:8000/api";

const responseBody = res => res.body;

const requests = {
    get: (url, header) =>
        axios.get(`${API_ROOT}${url}`, {headers: header}),
}

const Data = {
    all: () => requests.get("/all_stores"),

    search: info => 
        requests.get(
            `/search_stores?store_name=${info.store_name}`
        )
    


}

export default {
    Data
};