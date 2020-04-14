import TestStore from './testStore';
import StoreStore from './storeStore';

class RootStore {
    constructor() {
      this.testStore = new TestStore(this);
      this.storeStore = new StoreStore(this);
    }
  }
  
  export default RootStore;
  