import TestStore from "./testStore";
import StoreStore from "./storeStore";
import ReviewStore from "./reviewStore";
import MenuStore from "./menuStore";
import UserStore from "./userStore";
import AuthStore from "./authStore";
import SuggestStore from "./suggestStore";

class RootStore {
  constructor() {
    this.testStore = new TestStore(this);
    this.storeStore = new StoreStore(this);
    this.reviewStore = new ReviewStore(this);
    this.menuStore = new MenuStore(this);
    this.userStore = new UserStore(this);
    this.authStore = new AuthStore(this);
    this.suggestStore = new SuggestStore(this);
  }
}

export default RootStore;
