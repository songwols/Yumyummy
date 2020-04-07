import { observable, action, computed } from "mobx";

export default class TestStore{
    @observable returnItems = [];

    @observable sItems = [
        {
            STORE_ID : 0,
            NAME : "스타벅스",
            BRANCH : "동탄광장점",
            ADDRESS : "경기도 화성시 반송동 42-2",
            OPEN : "07:00",
            CLOSE : "23:00",
            TEL : "031-613-4542",
            HOLIDAY : 0,
            LATITUDE : 37.205002,
            LONGITUDE : 127.071812,
            AREA : "경기도 화성시"
        },
        {
            STORE_ID : 1,
            NAME : "스타벅스",
            BRANCH : "동탄광장점",
            ADDRESS : "경기도 화성시 반송동 42-2",
            OPEN : "07:00",
            CLOSE : "23:00",
            TEL : "031-613-4542",
            HOLIDAY : 0,
            LATITUDE : 37.205002,
            LONGITUDE : 127.071812,
            AREA : "경기도 화성시"
        },
        {
            STORE_ID : 2,
            NAME : "스타벅스",
            BRANCH : "동탄광장점",
            ADDRESS : "경기도 화성시 반송동 42-2",
            OPEN : "07:00",
            CLOSE : "23:00",
            TEL : "031-613-4542",
            HOLIDAY : 0,
            LATITUDE : 37.205002,
            LONGITUDE : 127.071812,
            AREA : "경기도 화성시"
        },
        
    ];

    constructor(root) {
        this.root = root;
    }

    @action
    getItems = (startIndex, count) => {
        this.returnItems = this.sItems.slice(startIndex, startIndex + count);
    };
    
    
}