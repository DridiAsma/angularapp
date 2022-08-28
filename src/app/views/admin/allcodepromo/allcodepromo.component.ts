import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodedataService } from '../../services/codedata.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector:'app-allcodepromo',
  templateUrl:'./allcodepromo.component.html',
  styleUrls:['./allcodepromo.component.css']
})
export class AllcodepromoComponent implements OnInit {
  promocode: any;

  constructor(private datacode:CodedataService, private route:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCode();
  }

 getCode(){
  this.datacode.getcode().subscribe((response:any)=>{
    console.log(response.data)
    this.promocode=response.data;
  });
 }


 deleteCode(id: any){
  //console.log(id);
  this.datacode.deletecode(id).subscribe(res =>{
    this.toastr.success('Success', 'Successfully deleted');
    this.getCode();
  })
 }

 modifiercode(id: any){
  this.route.navigate(['/admin/editCode/'+id]);

  }
}
