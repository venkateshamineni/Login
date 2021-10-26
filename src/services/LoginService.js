import axios from "axios";

const baseUrl ="http://localhost:3000/users?q=";

class  LoginService {

    getUser(username,password){
       alert(username+" "+password)
      
    }
    
}
export default new LoginService();