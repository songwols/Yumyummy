import TestStore from './testStore';

class RootStore {
    constructor() {
      this.testStore = new TestStore(this);
    }
  }
  
  export default RootStore;
  