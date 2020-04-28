import agent from "../agent";
import { observable, action } from "mobx";

export default class UserStore {
  @observable currentuser = {};

  @action
  setUser(user) {
    this.currentuser = user;
  }
  @action register(user) {
    console.log(user);
    return agent.Data.register(user)
      .then((res) => {
        console.log(res);
        window.sessionStorage.setItem("name", user.username);
        alert(
          window.sessionStorage.getItem("name") +
            "님! 회원가입이 완료되었습니다!"
        );
        window.location.reload();
      })

      .catch((err) => alert("실패하였습니다."));
  }
  constructor(root) {
    this.root = root;
  }
}
