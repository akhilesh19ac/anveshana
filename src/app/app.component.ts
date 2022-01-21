import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { AppService } from './app.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'anveshana';
  closeResult = '';
  boolval:boolean = false;

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
  constructor(private http: HttpClient, private appService: AppService, private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

onSubmitUserMessage(userMessage: NgForm) {
  console.log('Your form data : ', userMessage.value);
  this.boolval = true;
  this.appService.postUserMessage(userMessage.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
    console.log('message::::', data);
  });
}

sendBoolean(){
  return this.boolval;
}
}
