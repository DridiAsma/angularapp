import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from '../../services/types.service';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

import { Types } from './types.model';



@Component({
  selector: 'app-typevehicle',
  templateUrl: './typevehicle.component.html',
  styleUrls: ['./typevehicle.component.css']
})
export class TypevehicleComponent implements OnInit {
 types = new Types; //import les fichier model 
  files: any; // for image
  typeVoiture: any;
  form!: FormGroup; // form de reactive
  submitted= false; //pour validation les champs
  data: any;
  toastr: any;

  

  

  constructor(
    private datatypes:TypesService,
    private formBuilder: FormBuilder,
   ){ }

  ngOnInit(): void {
    this.getListetype();
    // this.createForm();
 }

 //liste
  getListetype(){
  this.datatypes.getTypeV().subscribe(res=>{
    console.log(res)
    this.typeVoiture=res;
  });
 }

  uploadImage(event:any){
   this.files = event.target.files[0];
   console.log(this.files);
 }
  createForm(){
    this.form = this.formBuilder.group({
      libelle: ['', Validators.required],
      montant: ['', Validators.required],
      image: [null, Validators.required]

    })
  }

  get f(){
    return this.form.controls;
  }

  ajouterTypeV(){
  this.submitted = true;
  if(this.form.invalid){
    return;
  }
  const formData = new FormData();
  formData.append("libelle", this.form.value.libelle);
  formData.append("montant", this.form.value.montant);
  formData.append("image", this.files, this.files.name);

  this.datatypes.ajouterTypeV(formData).subscribe(res => {
    this.data = res;
   if(this.data.status = true){this.toastr.success(JSON.stringify(this.data.message), '', {timeOut: 2000,progressBar: true })
   } else{this.toastr.error(JSON.stringify(this.data.message), '', { timeOut: 2000, progressBar: false })}
    this.submitted = false;
    this.form.get('image')?.reset();
  });
 }


 suppTypeV(id: any){
   //console.log(id);
   this.datatypes.suppTypeV(id).subscribe(res =>{
     this.getListetype();
   })
 }
}
