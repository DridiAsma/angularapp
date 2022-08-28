import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageAuthError: any
  datatoken:any

  constructor(private clientservice:AuthclientService, private route:Router, private arouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginclient(f:any){
    let data=f.value
     this.clientservice.login(data).subscribe(data=>{
      this.datatoken= data
      this.clientservice.saveToken(this.datatoken.token)
      this.route.navigate(['/client/commande'])
   } )

  }

}
