import { Component, OnInit } from '@angular/core';
import { Hello } from './hello';
import { HelloService } from '../service/hello/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  hellos : Hello[];
  constructor(private helloService : HelloService) { }

  ngOnInit(): void {
    this.getHellos();
    console.log(this.hellos);
  }
  getHellos(): void {
    this.helloService.getHellos()
    .subscribe(hellos => 
      this.hellos = hellos);
  }

}
