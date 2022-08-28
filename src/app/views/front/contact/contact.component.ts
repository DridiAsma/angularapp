import { Component, OnInit } from '@angular/core';
import { CodedataService } from '../../services/codedata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ajcontact:CodedataService) { }

  ngOnInit(): void {
  }


  ajouterContact(f:any){

    let data=f.value
    this.ajcontact.ajouteContact(data).subscribe(
      data=>
      {

        //this.route.navigate(['/chauffeur/login'])
        console.log(data)
      },
      // (err:HttpErrorResponse)=>{
      //   console.log(err)
      //   this.messageError="l'authentification a échoué, veuillez vérifier vos informations"
      // }
      )
  }

}
