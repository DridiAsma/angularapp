import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent implements OnInit {

  public contacts: any;
  constructor(private dataservice:VoitureService) { }

  ngOnInit(): void {
    this.getListContact();
  }

  getListContact(){
    this.dataservice.getListeContact()
    .subscribe((response:any)=>{
      console.log(response.data)
      this.contacts=response.data;
    });
  }

}
