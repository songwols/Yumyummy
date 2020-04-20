import { observable, action } from "mobx";

export default class SuggestStore{
    @observable returnItems = [];

    @observable sItems = [
        {
            Title : "연남동 디저트 맛집 20",
            address : "연남동",
            menu : "디저트"
        },
        {
            Title : "강남 파스타 맛집 10",
            address : "강남",
            menu : "파스타"
        },
        {
            Title : "이태원 핫한 술집 10",
            address : "이태원",
            menu : "술"
        },
        {
            Title : "한강 치킨 맛집 30",
            address : "",
            menu : "치킨"
        },
        {
            Title : "이화여대 떡볶이 맛집 5",
            address : "서대문구",
            menu : "떡볶이"
        },
        {
            Title : "이번엔 어떤 곳을 가볼까?",
            address : "강남",
            menu : "햄버거"
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