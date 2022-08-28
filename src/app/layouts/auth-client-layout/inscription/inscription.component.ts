import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthclientService } from 'src/app/views/services/authclient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  messageError:any

  constructor(private clientservice:AuthclientService,
    private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerclient(f:any){
    let data=f.value
    this.clientservice.register(data).subscribe(data=>
     {
       this.router.navigate(['/client/login']),
       this.toastr.success('Success', 'Successfully ajouter');
       console.log(data)},
       (err:HttpErrorResponse)=>{
         console.log(err)
         this.messageError="les donnes est n'est pas valider"
         //this.toastr.error('Error', 'les donnes non valider');
       })
 }
}
