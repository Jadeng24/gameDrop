import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {

  public cube: HTMLElement;
  public cube2: HTMLElement;
  public showMultiple = true;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const min = 1;
    const max = 24;

    this.cube = document.getElementById('cube');
    this.cube.onclick = (() => {
      const xRandom = this.getRandom(max, min);
      const yRandom = this.getRandom(max, min);
      this.cube.style.transform = 'rotateX(' + xRandom + 'deg) rotateY(' + yRandom + 'deg)';
    });

    this.cube2 = document.getElementById('cube2');
    this.cube2.onclick = (() => {
      const xRandom = this.getRandom(max, min);
      const yRandom = this.getRandom(max, min);
      this.cube2.style.transform = 'rotateX(' + xRandom + 'deg) rotateY(' + yRandom + 'deg)';
    });
  }

  /**
   * Generates a random number given a min and max value
   */
  getRandom(max: number, min: number) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }

}
