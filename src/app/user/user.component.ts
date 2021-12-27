import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  constructor(private http: HttpClient, private appService: AppService) { }
  ngOnInit(): void {
    this.appService.hello();
    
  }

  hello(){
    this.appService.hello();
    console.log("hi");
  }
}
