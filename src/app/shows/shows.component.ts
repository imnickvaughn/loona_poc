import { ExampleModel } from './../shared/example.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-shows',
  template: `
  <submit-form label="Show" (value)="onShow($event)"></submit-form>

  `
})
export class ShowsComponent implements OnInit {

  constructor(public example: ExampleModel) { }

  ngOnInit() { }

  onShow(text: string) {
    console.log(text)
    this.example.store.push(text);
    console.log(this.example.store)
    // console.log(this.store.store)

  }

}
