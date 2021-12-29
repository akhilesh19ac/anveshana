import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  constructor(private http: HttpClient, private appService: AppService) { }
  ngOnInit(): void {
    this.appService.hello();

  }

  hello(){
    this.appService.hello();
    console.log("hi");
  }
}
