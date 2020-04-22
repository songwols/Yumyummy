import TestStore from "./testStore";
import StoreStore from "./storeStore";
import ReviewStore from "./reviewStore";
import SuggestStore from "./suggestStore";

class RootStore {
  constructor() {
    this.testStore = new TestStore(this);
    this.storeStore = new StoreStore(this);
    this.reviewStore = new ReviewStore(this);
    this.suggestStore = new SuggestStore(this);
  }
}

export default RootStore;
