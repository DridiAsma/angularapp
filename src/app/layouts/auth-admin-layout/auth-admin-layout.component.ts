import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {
  dataReceived: any;
  url: any;
  messageAuthError: any

  constructor(private ads:AuthadminService,private route:Router,private arouter:ActivatedRoute) {


    //cette fonction return la page admin sont login

    if(this.ads.LoggedIn()==true){
      this.route.navigate(['/admin'])
  }

  }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
    console.log(this.url)
  }

  loginadmin(f:any){
    let data=f.value

   this.ads.login(data).subscribe(response=>

   {
    this.dataReceived=response
    this.ads.saveData(this.dataReceived.access_token)
    this.route.navigate([this.url])

   },err=>this.messageAuthError="Désactive email ou mot de passe")
  }



}

