import { observable, action } from "mobx";

export default class SuggestStore{
    @observable returnItems = [];

    @observable sItems = [
        {
            Title : "연남동 디저트 맛집 20",
            address : "연남동",
            menu : "디저트",
            img: "https://thumb.zumst.com/640x480/http://static.hubzum.zumst.com/hubzum/2018/09/07/17/77eb58623d8f4545ba7aed825655dce7.jpg"
        },
        {
            Title : "강남 파스타 맛집 10",
            address : "강남",
            menu : "파스타",
            img: "https://www.dailybizon.com/news/photo/202001/15469_9705_2555.jpg"
        },
        {
            Title : "이태원 핫한 술집 10",
            address : "이태원",
            menu : "술",
            img: "https://lh3.googleusercontent.com/proxy/hDHy72gF4oQ-Yb-hGrtX0IMCL4j8rRsV59j_DSVzCfNkjb0Bs2hOMOsIpfeKiDUTq3V4bpiPRu0vr_e3aWmrcLmRu0YhZWkHaD23u1aURHmD6YuRkyorNrf3y0wNQupJHAK5By48jnh6SUt2Tl4kvN6ljoLo9Hv5AHDRezyxzrYVFWWzircn81k447O5kWVER4ilWm4Tngruu2ZOjC7Tolgpph2MgZhAUgodQS5-URJ1wX-Il3LGpVknEbfIkojUeOowRg1eaTlsy8gawJxl2qyhQgBe8bn36L7DNr4RBbmPysGyMxnnm9ckBu5Mu8uiNiV-"
        },
        {
            Title : "한강 치킨 맛집 30",
            address : "",
            menu : "치킨",
            img: "https://www.amnews.co.kr/news/photo/201706/22467_11650_433.jpg"
        },
        {
            Title : "이화여대 떡볶이 맛집 5",
            address : "서대문구",
            menu : "떡볶이",
            img: "https://www.fsnews.co.kr/news/photo/201904/33262_27962_2330.jpg"
        },
        {
            Title : "이번엔 어떤 곳을 가볼까?",
            address : "강남",
            menu : "햄버거",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAN9h45GUphJ6El2iA52l7NA_rDyglCTtxPq8fWgi2xGohAFCG&usqp=CAU"
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