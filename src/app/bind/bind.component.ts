import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // 此处的event是MouseEvent事件,看target属性是button,target属性里有innerHTML
  doOnClick(event: any) {
    console.log(event);
  }

}
