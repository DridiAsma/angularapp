import { Component, OnInit } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:any
  profile: any;

  constructor(private ads:AuthadminService) { 
    this.name=ads.getname()
  }

  ngOnInit(): void {

    this.getprofile();

  }

  getprofile(){
    this.ads.profileadmin().subscribe((response:any)=>{
      console.log(response)
      this.profile=response;
    });
  }

}
