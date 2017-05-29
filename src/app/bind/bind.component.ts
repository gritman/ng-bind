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

  constructor() {
    setTimeout( () => {
        this.isBig = true;
      }, 3000
    );
  }

  ngOnInit() {
  }

  // 此处的event是MouseEvent事件,看target属性是button,target属性里有innerHTML
  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value); // 打印DOM属性
    console.log(event.target.getAttribute('value')); // 打印HTML属性,只显示初始值,后面不会变
  }

}
