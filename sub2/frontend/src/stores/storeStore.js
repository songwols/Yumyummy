import agent from "../agent";
import { observable, action, computed } from "mobx";

export default class StoreStore {
  @observable storeRegistry = observable.map();
  @observable storeItems = [];
  @observable returnItems = [];
  @observable store_name = "";
  @observable address = "";
  @observable menu = "";
  @observable score: "3.0";
  @observable review: "0";
  @observable predicate = {};
  @observable detailPost = undefined;

  @computed get posts() {
    return this.storeRegistry.values();
  }

  @computed get length() {
    return this.storeItems.length;
  }

  @computed get returnLength() {
    return this.returnItems.length;
  }

  @action setPredicate(predicate) {
    if (JSON.stringfy(predicate) === JSON.stringfy(this.predicate)) return;
    this.clear();
    this.predicate = predicate;
  }

  @action
  setStoreItems(storeItems) {
    this.storeItems = storeItems;
    this.getItems(0, 2);
  }

  @action
  loadPosts() {
    return agent.Data.all()
      .then((res) => {
        this.setStoreItems(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  @action loadPost(id) {
    console.log("로드포스트~~");
    return agent.Data.get(id).then(
      action((res) => {
        console.log("여기를 보시오");
        console.log(res);
        this.detailPost = res.data.results;
        this.storeRegistry.set(this.detailPost.id, this.detailPost);
        return this.detailPost;
      })
    );
  }

  @action setInfo(infos) {
    this.store_name = infos.store_name;
    this.address = infos.address;
    this.menu = infos.menu;
    this.score = infos.score;
    this.review = infos.review;
    localStorage.setItem("S_store_name", this.store_name);
    localStorage.setItem("S_address", this.address);
    localStorage.setItem("S_menu", this.menu);
    localStorage.setItem("S_score", this.score);
    localStorage.setItem("S_review", this.review);
  }

  @action search(info) {
    if(info.store_name==null && info.address==null && info.menu==null){
      return agent.Data.all()
      .then((res) => {
        this.setStoreItems(res.data.results);
      })
      .catch((err) => console.log(err));
    }
    else{
      return agent.Data.search(info)
      .then((res) => {
        this.setStoreItems(res.data.results);
      })

      .catch((err) => alert("검색 결과가 없습니다."));
    }
    
  }

  @action detail(id) {
    return agent.Data.detail(id).then((res) => {
      const val = res.data.results[0];
      localStorage.setItem("store_name", val.store_name);
      localStorage.setItem("address", val.address);
      localStorage.setItem("tel", val.tel);
      localStorage.setItem("latitude", val.latitude);
      localStorage.setItem("longitude", val.longitude);
      localStorage.setItem("category", val.category);
      // this.setStoreItems(res.data.results);
    });
  }

  @action getPost(id) {
    console.log(this.storeRegistry);
    return this.storeRegistry.get(id);
  }

  @action
  getItems = (startIndex, count) => {
    this.returnItems = this.storeItems;
  };

  constructor(root) {
    this.root = root;
  }
}
