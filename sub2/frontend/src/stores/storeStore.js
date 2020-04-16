import agent from "../agent";
import { observable, action, computed } from "mobx";

export default class StoreStore{
    @observable storeRegistry = observable.map();
    @observable storeItems = [];
    @observable returnItems = [];
    @observable store_name = "";
    @observable address = "";
    @observable menu = "";
    @observable score: "3.0";
    @observable review: "0";
    @observable predicate = {};


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
        this.getItems(0,2);
        // console.log(this.storeItems[0].store_id)
    }
    
    @action 
    loadPosts(){
        return agent.Data.all()
        .then(res => {
          this.setStoreItems(res.data.results)
        })
        .catch(err => console.log(err));

    }

    @action setInfo(infos){
        this.store_name = infos.store_name;
        this.address = infos.address;
        this.menu = infos.menu;
        this.score = infos.score;
        this.review = infos.review;
    }

    @action search(info){
        return agent.Data.search(info)
        .then(res => {
          this.setStoreItems(res.data.results)
        })

        .catch(err => alert("검색 결과가 없습니다."));
    }

    @action
    getItems = (startIndex, count) => {
        this.returnItems = this.storeItems;
    };

    constructor(root) {
        this.root = root;
    }
    
}