import axios from "axios";

const API_ROOT = "52.79.156.160/api";

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
        ),
    
    detail: id => 
        requests.get(
            `/id_stores?store_id=${id}`
        ),


}

export default {
    Data
};