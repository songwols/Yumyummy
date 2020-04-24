import agent from "../agent";
import { observable, action, computed } from "mobx";

export default class StoreStore {
  @observable storeRegistry = observable.map();
  @observable storeItems = [];
  @observable returnItems = [];
  @observable store_name = "";
  @observable address = "";
  @observable menu = "";
  @observable predicate = {};
  @observable detailPost = {};
  @observable pageNumber = 1;
  @observable info = {};
  @observable latitude = [];
  @observable longitude = [];
  @observable location = [];


  @computed get posts() {
    return this.storeRegistry.values();
  }

  @computed get length() {
    return this.storeItems.length;
  }

  @computed get returnLength() {
    return this.returnItems.length;
  }

  @action pageIncrease() {
    this.pageNumber = this.pageNumber + 1;
    if (
      this.info.store_name == null &&
      this.info.address == null &&
      this.info.menu == null
    ) {
      return agent.Data.all(this.pageNumber)
        .then((res) => {
          this.setStoreItems(res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      return agent.Data.search(this.info, this.pageNumber)
        .then((res) => {
          this.setStoreItems(res.data.results);
        })

        .catch((err) => alert("검색 결과가 없습니다."));
    }
  }

  @action pageDecrease() {
    this.pageNumber = this.pageNumber - 1;
    if (
      this.info.store_name == null &&
      this.info.address == null &&
      this.info.menu == null
    ) {
      return agent.Data.all(this.pageNumber)
        .then((res) => {
          this.setStoreItems(res.data.results);
          console.log("1번");
        })
        .catch((err) => console.log(err));
    } else {
      return agent.Data.search(this.info, this.pageNumber)
        .then((res) => {
          this.setStoreItems(res.data.results);
        })

        .catch((err) => alert("검색 결과가 없습니다."));
    }
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
    return agent.Data.all(this.pageNumber)
      .then((res) => {
        this.setStoreItems(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  @action loadPost(id) {
    return agent.Data.get(id).then(
      action((res) => {
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
  }

  @action search(info) {
    this.info = info;
    if(info.store_name == undefined && info[0].store_name != undefined){
      this.info = info[0];
    }
    else{
      this.info = info;
    }
    this.pageNumber = 1;
    
    if (this.info.store_name == undefined && this.info.address == undefined && this.info.menu == undefined) {
      return agent.Data.all(this.pageNumber)
        .then((res) => {
          this.setStoreItems(res.data.results);
          localStorage.setItem("latitude", res.data.results[0].latitude)
          localStorage.setItem("longitude", res.data.results[0].longitude)
          for(var i=0;i<res.data.results.length;i++){
            this.location = this.location.concat(
              {
                lat : res.data.results[i].latitude,
                long : res.data.results[i].longitude
               }
              ) 
          }
        })
        .catch((err) => console.log(err));
    } else {
      return agent.Data.search(this.info, this.pageNumber)
        .then((res) => {
          this.setStoreItems(res.data.results);
          this.location = [];
          localStorage.setItem("latitude", res.data.results[0].latitude)
          localStorage.setItem("longitude", res.data.results[0].longitude)
          for(var i=0;i<res.data.results.length;i++){
            this.location = this.location.concat(
              {
                lat : res.data.results[i].latitude,
                long : res.data.results[i].longitude
               }
              ) 
          }
        })

        .catch((err) => console.log(err));
    }
  }

  @action detail(id) {
    return agent.Data.detail(id).then((res) => {
      this.detailPost = res.data.results[0];
      localStorage.setItem("latitude", res.data.results[0].latitude)
      localStorage.setItem("longitude", res.data.results[0].longitude)
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
