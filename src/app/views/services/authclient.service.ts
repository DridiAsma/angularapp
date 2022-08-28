import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthclientService {
  helper=new JwtHelperService()
  user=''

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/client/login',data);
  }

  saveToken(token:any){

    //let decodeToken = this.helper.decodeToken(token)
    localStorage.setItem('token',token)

    }

  register(data:any){
    return this.http.post('http://127.0.0.1:8000/api/client/register',data);
  }

//  profile(){
//   return this.http.get('http://127.0.0.1:8000/api/auth/profile');
//  }
  



  getname(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)
    return decodeToken.name
  }


  //LoggedIn(){
    //let token:any=localStorage.getItem('token')

    //if(!token){
  //   return false
    //}
    //let decodeToken=this.helper.decodeToken(token)


     //if(decodeToken.user){
    //   return false
    // }

     //if(this.helper.isTokenExpired(token)){
     //  return false
     //}

 //  // return true
  //}

}
