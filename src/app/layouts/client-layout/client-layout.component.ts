import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  name: any;

  constructor(private clientservice:AuthclientService, private route:Router) {
    this.name=clientservice.getname()
   }

  ngOnInit(): void {
  }

  status: boolean = false;
  //Sidebar opne
  clickEvent(){
   this.status = true;
}
//Sidebar close
clickEvent2()
{
 this.status = false;
}


/*unction logout*/
logout(){
  localStorage.removeItem('token')
  this.route.navigate(['/client/login'])
}

}
