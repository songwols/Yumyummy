import { observable, action } from "mobx";
import agent from "../agent";

export default class AuthStore {
  @observable token = "";
  @observable name = "";
  @observable email = "";
  @observable pw = "";

  constructor(root) {
    this.root = root;
  }

  @action setInfo(info) {
    this.name = info.ID;
    window.sessionStorage.setItem("name", info.ID);
    this.pw = info.PW;
    window.sessionStorage.setItem("pw", info.PW);
    console.log(this.name);
  }

  @action setToken(token) {
    this.token = token;
    window.sessionStorage.setItem("token", token);
    window.location.reload();
  }

  @action login(info) {
    this.setInfo(info);
    return agent.Auth.login(this.name, this.pw).then((res) => {
      this.setToken(res.data.token);
      console.log(this.name);
      console.log(this.pw);
    });
  }

  @action logout() {
    window.sessionStorage.removeItem("token");
    window.location.reload();
  }
}
