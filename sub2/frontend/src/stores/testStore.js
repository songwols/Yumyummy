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
            NAME : "민들레 떡볶이",
            BRANCH : "",
            ADDRESS : "서울시 강남구 역삼동 669-16 2F",
            OPEN : "11:30",
            CLOSE : "21:00",
            TEL : "02-566-8070",
            HOLIDAY : 0,
            LATITUDE : 37.502685,
            LONGITUDE : 127.037209,
            AREA : "서울시 강남구"
        },
        {
            STORE_ID : 2,
            NAME : "버거킹",
            BRANCH : "강남대로점",
            ADDRESS : "서울특별시 강남구 역삼동 강남대로98길",
            OPEN : "09:00",
            CLOSE : "23:00",
            TEL : "02-566-0332",
            HOLIDAY : 0,
            LATITUDE : 37.500445,
            LONGITUDE : 127.027682,
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