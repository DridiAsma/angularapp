import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allclient',
  templateUrl: './allclient.component.html',
  styleUrls: ['./allclient.component.css']
})
export class AllclientComponent implements OnInit {

  public clients:any

  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
    this.getClientData();
  }

  getClientData(){
    this.ds.getAllclient().subscribe((response:any)=>{
      console.log(response.data)
      this.clients=response.data;
    });
  }

  details(id:any){
    this.route.navigate(['/admin/detailleclient/'+id]);
  }
}
