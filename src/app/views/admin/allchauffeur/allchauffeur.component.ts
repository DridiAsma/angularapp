import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allchauffeur',
  templateUrl: './allchauffeur.component.html',
  styleUrls: ['./allchauffeur.component.css']
})
export class AllchauffeurComponent implements OnInit {

  imageDirectoryPath:any = 'http://127.0.0.1:8000/uploads/flutterimgs/';  ///for image

  public chauffeurs: any[] | undefined;
  constructor(private ds:DataService) {}

  ngOnInit(): void {
    this.getChauffeurData();
  }

  getChauffeurData(){
    this.ds.getAllchauffeur().subscribe((response:any)=>{
      console.log(response.data)
      this.chauffeurs=response.data;
    });
  }

}
