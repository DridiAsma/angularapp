import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';

@Component({
  selector: 'app-note-star',
  templateUrl: './note-star.component.html',
  styleUrls: ['./note-star.component.css']
})
export class NoteStarComponent implements OnInit {

  myArray: any = [];
  constructor(private dataservice:VoitureService) { }

  ngOnInit(): void {
    this.getListeReview();
  }

  getListeReview(){
    this.dataservice.getListeStar()
    .subscribe(data =>{
      console.log(data)
      this.myArray = data;
    });
  }


}
