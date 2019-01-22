import { ExampleModel } from './../shared/example.model';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';



@Component({
  selector: 'app-shows',
  template: `
  <submit-form label="Show" (value)="onShow($event)"></submit-form>
  <list title="List of shows" [list]="example.store"></list>
  `
})
export class ShowsComponent implements OnInit {


  constructor(public example: ExampleModel) { }

  ngOnInit() { }

  onShow(text: string) {
    console.log('text: ', text);
    let uuid = UUID.UUID();
    console.log('uuid: ', uuid);
    let pushed: any = { title: text, subtitle: `ID:${uuid}` }
    this.example.store.push(pushed);
    console.log(this.example.store)

  }

}
