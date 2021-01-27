import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  public time = moment.duration(1, 'minute');
  public isCountdownOn = false;
  constructor() { }

  ngOnInit() { }

  toggleCountdown() {
    console.log('toggling');
    console.log(this.time);


    this.isCountdownOn = !this.isCountdownOn;

    for (let i; i < 0; i++) { // Need to get a loop going here until its stopped or its 0
      setTimeout(() => {
        this.time = this.time.add(1, 's');
      }, 1000);
    }

  }
}
