import { Component, OnInit } from '@angular/core';

import { MypicsService } from '../../service/mypics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photos:any[];
  
  constructor(private pics: MypicsService) { }

  ngOnInit() {
    this.pics.getPics().subscribe(data=>{
      this.photos = data;
      console.log(this.photos)
    });
  }
}
