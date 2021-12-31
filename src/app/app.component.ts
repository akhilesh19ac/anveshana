import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anveshana';

  destroy$: Subject<boolean> = new Subject<boolean>();
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  constructor(private http: HttpClient, private appService: AppService) { }
  ngOnInit(): void {

  }

onSubmitUserMessage(userMessage: NgForm) {
  console.log('Your form data : ', userMessage.value);
  this.appService.postUserMessage(userMessage.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
    console.log('message::::', data);
  });
}
}
