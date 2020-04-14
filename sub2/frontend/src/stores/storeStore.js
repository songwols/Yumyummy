import agent from "../agent";
import { observable, action, computed } from "mobx";

export default class StoreStore{
    @observable storeRegistry = observable.map();
    @observable storeItems = [];
    @observable returnItems = [];

    @computed get posts() {
        return this.storeRegistry.values();
    }

    @computed get length() {
        return this.storeItems.length;
    }

    @computed get returnLength() {
        return this.returnItems.length;
    }

      
    @action 
    setStoreItems(storeItems) {
        this.storeItems = storeItems;
        this.getItems(0,2);
        console.log(this.storeItems[0].store_name)
    }
    
    @action 
    loadPosts(){
        return agent.Data.all()
        .then(res => {
          this.setStoreItems(res.data.results)
        })
        .catch(err => console.log(err));

    }

    @action
    getItems = (startIndex, count) => {
        this.returnItems = this.storeItems;
    };

    constructor(root) {
        this.root = root;
    }
    
}