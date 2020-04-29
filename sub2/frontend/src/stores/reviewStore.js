import agent from "../agent";
import { observable, action, computed } from "mobx";

export default class ReviewStore {
  @observable reviews = [];

  @computed get length() {
    return this.reviews.length;
  }

  @action
  setReviews(reviews) {
    this.reviews = reviews;
  }
  @action get_review(store_id) {
    return agent.Data.id_review(store_id)
      .then((res) => {
        localStorage.setItem("reviews", res.data.results);
        this.setReviews(res.data.results);
      })

      .catch((err) => alert("검색 결과가 없습니다."));
  }

  @action post_review(review) {
    return agent.Data.post_review(review)
      .then((res) => {
        alert("리뷰 작성이 완료되었습니다.");
      })

      .catch((err) => alert("실패하였습니다."));
  }
  constructor(root) {
    this.root = root;
  }
}
