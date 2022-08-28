import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthchauffeurService } from 'src/app/views/services/authchauffeur.service';

@Component({
  selector: 'app-chauffeur-layout',
  templateUrl: './chauffeur-layout.component.html',
  styleUrls: ['./chauffeur-layout.component.css']
})
export class ChauffeurLayoutComponent implements OnInit {
  nom: any;

  constructor(private route:Router, private chaufservice:AuthchauffeurService) { 

    this.nom=chaufservice.getname()
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
  localStorage.removeItem('tokens')
  this.route.navigate(['/chauffeur/login'])
}
}
