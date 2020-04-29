import { observable, action } from "mobx";

export default class SuggestStore {
  @observable returnItems = [];

  @observable sItems = [
    {
      Title: "연남동 핫플레이스 10",
      address: "연남동",
      menu: "",
      img:
        "https://thumb-wishbeen.akamaized.net/YWzk79F3Z3Ur4o8t7lptTVomBQo=/898x420/smart/filters:no_upscale()/img-wishbeen.akamaized.net/spot/1509865127488_image",
    },
    {
      Title: "강남 핫플레이스 10",
      address: "강남",
      menu: "",
      img:
        "https://post-phinf.pstatic.net/MjAxNzA0MTVfMTM0/MDAxNDkyMTkwODIzODg3.pgQ-zaDsSXG0x5P-_i6eLx4XuyBD_Hscl1D4wiMswVEg.r_H12HI0Ye0Sv3gJMwRTX-V4Vago7Tk1Syd5RfskYbEg.JPEG/12.jpg?type=w1200",
    },
    {
      Title: "이태원 핫플레이스 10",
      address: "이태원",
      menu: "",
      img: "https://t1.daumcdn.net/cfile/tistory/996D77485A2FF05018",
    },
    {
      Title: "종로 핫플레이스 10",
      address: "종로",
      menu: "",
      img:
        "https://post-phinf.pstatic.net/MjAxNzEwMTBfMTY1/MDAxNTA3NjE4MzkwMjk5.0f09ieqTRZYVUYpBbeMXyXfWZhOgdhAmZe5UNSKF5s8g.8HpxiNTCezU_9AnffpXFVEFCLf2GLJg690khUwo6B3wg.JPEG/%EC%A2%85%EB%A1%9C%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3_%289%29.jpg?type=w1200",
    },
    {
      Title: "수원 핫플레이스 10",
      address: "경기도 수원",
      menu: "",
      img:
        "https://www.suwon.go.kr/resources/web/visitsuwon/images/sub/tour_02/sub_list02.png",
    },
    {
      Title: "인천 핫플레이스 10",
      address: "인천",
      menu: "",
      img:
        "https://travelblog.expedia.co.kr/wp-content/uploads/2018/12/5-2.jpg",
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
