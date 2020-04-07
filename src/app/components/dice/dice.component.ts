import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {

  public cube: HTMLElement;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {

    this.cube = document.getElementById('cube');

    const min = 1;
    const max = 24;

    this.cube.onclick = (() => {
      const xRandom = this.getRandom(max, min);
      const yRandom = this.getRandom(max, min);
      console.log('xRandom', xRandom);
      console.log('xRandom', yRandom);

      this.cube.style.transform = 'rotateX(' + xRandom + 'deg) rotateY(' + yRandom + 'deg)';
    });



  }

  getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }

}
