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
        console.log(info)
        this.name = "송월";
        this.id = info.ID;
        this.pw = info.PW;
        console.log(this.name)
    }

    @action setToken(token) {
        this.token = token;
        window.sessionStorage.setItem("token", token);
    }
    
      
    @action login(info){
        console.log(info)
        return agent.Auth.login(
            this.name,
            info.ID,
            info.PW
        )
        .then((res) => {
            this.setToken(res.data.results)
        })
        
    }

    @action logout() {
        window.sessionStorage.removeItem("jwt");
        window.location.reload();
      }
    

}