import axios from 'axios'

export default class AuthService{

 login(email,password){
     return axios.post("http://localhost:8080/api/auth/login", {email:email, password:password});
 }

}