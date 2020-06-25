import { Injectable } from '@angular/core';
import { Hello } from 'src/app/hello/hello';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HelloComponent } from 'src/app/hello/hello.component';
@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http  : HttpClient) {
   }
   getHellos(): Observable<Hello[]> {
    return this.http.get<Hello[]>('http://localhost:8080/hellos');
  }
}
