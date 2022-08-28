import { Component,  OnInit, HostListener  } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})

export class AdminLayoutComponent implements OnInit {
 name:any


  constructor(private ads:AuthadminService, private route:Router) {
    
   this.name=ads.getname()

  }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('access_token')
    this.route.navigate(['/admin/login'])
  }




}
