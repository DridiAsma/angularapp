import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { CodedataService } from '../../services/codedata.service';
import { Codes } from './codes.model';

@Component({
  selector: 'app-codepromo',
  templateUrl: './codepromo.component.html',
  styleUrls: ['./codepromo.component.css']
})
export class CodepromoComponent implements OnInit {
  messageErr!: "";

  constructor(private datacode:CodedataService,
     public toastr: ToastrService,
     private route:Router) { }

  ngOnInit(): void {
  }


  AjouterCode(f:any)
  { let data=f.value
      //console.log(data)
     this.datacode.postcode(data).subscribe(res=>{
       //console.log(res)
       this.toastr.success( 'Validation Faite avec Success');
       this.route.navigate(['/admin/allcodepromo'])
      
      },
      (err:HttpErrorResponse)=>{
        this.messageErr=err.error
        if (err.status === 400) {
          this.toastr.warning('Something went wrong', 'Data');
        } else {
          this.toastr.error('Something went error', 'Error');
        }

        // console.log(err.error)
        // console.log(err.status)
      });
  }

}
