import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaiementService } from '../../services/paiement.service';
import { Paiements } from './paiement.model';

@Component({
  selector: 'app-paiement',
  templateUrl:'./paiement.component.html',
  styleUrls:['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  paye = new Paiements;
  files: any;
  form!: FormGroup;
  submitted= false;
  data: any;
  paiements:any;

  constructor(private formBuilder: FormBuilder, private datas:PaiementService) { }

  ngOnInit(): void {
    this.getPaiement();

  }


  getPaiement(){
    this.datas.getPayer().subscribe((response:any)=>{
      console.log(response.data)
      this.paiements=response.data;
    });
  }


  

}



