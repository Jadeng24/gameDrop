import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() goTo = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  goToPage(page: number) {
    this.goTo.emit(page);
  }
}
