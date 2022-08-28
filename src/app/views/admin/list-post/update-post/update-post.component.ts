import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PaiementService } from 'src/app/views/services/paiement.service';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  files: any;
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/'
  modifForm = new FormGroup({
    titre: new FormControl(''),
    description:new FormControl(''),
    jour: new FormControl(''),
    images: new FormControl(''),
    
  });
 



   constructor(private dataserv:PaiementService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route:Router,
    private router:ActivatedRoute) { }

   ngOnInit(): void {
     this.editPost();
   
  }

  editPost(){
    this.dataserv.afficherblog(this.router.snapshot.params['id']).subscribe(
      (result: any) =>{
        this.modifForm = new FormGroup({
          description: new FormControl(result['description']),
          jour: new FormControl(result['jour']),
          titre: new FormControl(result['titre']),
          images: new FormControl(result['imageDirectoryPath']),
        });
    });
  }

 onSubmit(){
  console.log( this.modifForm.value);
   this.dataserv.modifierblog( this.router.snapshot.params['id'],
   this.modifForm.value).subscribe(result =>
   {
    console.log(result);
    this.toastr.success("Saved successfully", "Success");
    this.route.navigate(['/admin/listblog'])
   })
  
   }

   


   
}
