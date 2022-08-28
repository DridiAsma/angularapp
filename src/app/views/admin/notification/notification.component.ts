import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Notification } from './notification';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifi=new Notification();
  notifications:any;
  files: any;
  formdata: any;


  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
    this.getNotificationData();
  }

  //cette fonction declaration image
  imageUpload(event: any){
    this.files = event.target.files[0];
    //console.log(this.files);
  }

 /// cette fonction importe les donnee
  getNotificationData(){
    this.ds.getNotification().subscribe((response:any)=>{
      console.log(response.data)
      this.notifications=response.data;
    });

  }

  //cette fonction ajouter
  ajouterNotification(){
    let formdata = new FormData();
    formdata.append("file",this.files,this.files.name);
    formdata.append("data",JSON.stringify(this.notifications));

    this.ds.ajouterNotification(this.formdata).subscribe(response=>{
      console.log(response);
      this.getNotificationData(); //cette tache pour refreche le data lorsque on ajouter un requette
    })
   console.log(this.notifications);
  }


  supNotification(id: any){
    console.log(id);
    this.ds.supNotification(id).subscribe(res =>{
      this.getNotificationData();
 })
  }

  detailnotif(id: any){
    this.route.navigate(['/admin/edit/'+id]);

  }


}
