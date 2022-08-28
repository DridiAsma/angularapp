import { Component,  OnInit  } from '@angular/core';

@Component({
  selector: 'app-mapadmin',
  templateUrl: './mapadmin.component.html',
  styleUrls: ['./mapadmin.component.css']
})
export class MapadminComponent implements OnInit {
  ngOnInit(): void {}


  lat = 51.678418;
  lng = 7.809007;
  commandes: any;
}






