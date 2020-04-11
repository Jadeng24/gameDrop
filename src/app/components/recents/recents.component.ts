import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss'],
})
export class RecentsComponent implements OnInit, OnChanges {
  @Input() newGame: any;
  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    this.addTo(this.newGame);
  }
  /**
   * Receives a new game history
   */
  public addTo(game) {
    console.log(game);
  }
}
