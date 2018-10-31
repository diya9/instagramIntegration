import { Component, OnInit } from '@angular/core';
import { MypicsService } from './service/mypics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pic:any=[];
  constructor(private pics: MypicsService) { }

  ngOnInit(){
    this.pics.getPics().subscribe(data=>this.pic=data);
  }
 
}
