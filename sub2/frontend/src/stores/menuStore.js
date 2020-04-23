import agent from "../agent";
import { observable, action, computed } from "mobx";

export default class MenuStore {
  @observable menus = [];

  @computed get length() {
    return this.menus.length;
  }

  @action
  setMenus(menus) {
    this.menus = menus;
  }
  @action get_menu(store_id) {
    return agent.Data.id_menu(store_id)
      .then((res) => {
        this.setMenus(res.data.results);
      })

      .catch((err) => alert("검색 결과가 없습니다."));
  }
  constructor(root) {
    this.root = root;
  }
}
