import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Notification } from '../notification/notification';

@Component({
  selector: 'app-editnotif',
  templateUrl: './editnotif.component.html',
  styleUrls: ['./editnotif.component.css']
})
export class EditnotifComponent implements OnInit {
snapshot: any;
  notifi=new Notification();
  id: any;
  data: any;

  constructor(private route:ActivatedRoute, private ds:DataService) {


  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    this.id = this.route.snapshot.params['id'];
    this.getDataN();
  }

  getDataN(){

    this.ds.getEditNotification(this.id).subscribe(
      res =>{
        console.log(res);
        this.data =res;
        this.notifi = this.data;
      }
    )

  }
  imageUpload(event: any){
  }

 ModifierNotification(){


 }

}
