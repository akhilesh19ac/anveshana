import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postUserMessage2(userMessage: String){
    var s=this.http.post('/api/userMessage', JSON.stringify(userMessage));
    console.log("test "+JSON.stringify(userMessage) + s);
    
  }

  postUserMessage(userMessage: String): Observable<String> {
    return this.http.post<String>('/api/userMessage', userMessage);
  }
}