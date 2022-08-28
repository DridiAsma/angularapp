import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthchauffeurService } from 'src/app/views/services/authchauffeur.service';

@Component({
  selector: 'app-login-chauff',
  templateUrl: './login-chauff.component.html',
  styleUrls: ['./login-chauff.component.css']
})
export class LoginChauffComponent implements OnInit {

  messageAuthError: any
  reponsetoken:any
  messageError: any;
  

  constructor(private chaufservice:AuthchauffeurService, 
    private route:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  loginchauf(f:any){
    let data=f.value
     this.chaufservice.login(data).subscribe(data=>{
      this.reponsetoken= data 
      this.toastr.success("Saved successfully", "Success")
      this.chaufservice.enrgisterToken(this.reponsetoken.tokens)
      this.route.navigate(['chauffeur/map'])
      
   },(err:HttpErrorResponse)=>{
    console.log(err)
    this.messageError="Veuillez vérifier vos informations"
  } )

  }
}
