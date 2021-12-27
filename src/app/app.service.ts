import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AppService {
constructor(private http: HttpClient) { }

ngOnInit(): void {
}

hello(){
  var s=this.http.get('/api/users');
  console.log("hi2: "+s);
}
}