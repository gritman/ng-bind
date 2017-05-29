import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl = 'http://placehold.it/400x320';

  size = 2;

  divClass: string;

  isBig = false;

  multiClass = {
    a: false,
    b: false,
    c: false
  };

  isDev = true;

  multiStyle = {
    color: 'red',
    background: 'yellow'
  };

  name: string; // 测试双向绑定

  constructor() {
    setInterval( () => {
        this.name = 'Tom';
      },
      3000
    );
  }

  ngOnInit() {
  }

  // 此处的event是MouseEvent事件,看target属性是button,target属性里有innerHTML
  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    this.name = event.target.value;
  }

}
