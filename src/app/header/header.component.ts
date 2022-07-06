import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  @Output() categoryClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }
  getCategory(category){
      this.categoryClicked.emit(category);
  }
}
