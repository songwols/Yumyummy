import { observable, action, reaction } from "mobx";
import agent from "../agent";

export default class AuthStore {
    @observable token = "";
    @observable name = "";
    @observable email = "";
    @observable pw = "";
    
    constructor(root) {
        this.root = root;

        reaction(
            () => this.name,
            name => {
              if (name) {
                this.name = "송월";
              }
            }
          );
      
          reaction(
            () => this.email,
            email => {
              if (email) {
                this.email = email;
              }
            }
          );
      
          reaction(
            () => this.pw,
            pw => {
              if (pw) {
                this.pw = pw;
              }
            }
          );
      }

    @action setInfo(info){
        this.name = info.ID;
        this.pw = info.PW;
        console.log(this.name)
    }

    @action setToken(token) {
        this.token = token;
        window.sessionStorage.setItem("token", token);
        window.location.reload();
    }
    
      
    @action login(info){
      this.setInfo(info);
        return agent.Auth.login(
            this.name,
            this.pw
        )
        .then((res) => {
            this.setToken(res.data.token)
        })
        
    }

    @action logout() {
        window.sessionStorage.removeItem("token");
        window.location.reload();
      }
    

}