import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html',
  styleUrls: ['./scorekeeper.component.scss'],
})
export class ScorekeeperComponent implements OnInit {
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

  slideChanged() {

  }
}
