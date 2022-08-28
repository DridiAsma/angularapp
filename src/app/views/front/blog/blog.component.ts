import { Component, OnInit } from '@angular/core';
import { PaiementService } from '../../services/paiement.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any;
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/' 
  constructor(private dataServ:PaiementService) { }

  ngOnInit(): void {
   this.getBlog()
  }

 
  getBlog(){
    this.dataServ.indexBlog().subscribe(response=>{
      console.log(response)
      this.blogs=response;
    });
  }
}
