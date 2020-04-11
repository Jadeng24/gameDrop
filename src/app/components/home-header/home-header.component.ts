import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Output() goTo = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  emit() {
    this.goTo.emit(2);
  }

}
