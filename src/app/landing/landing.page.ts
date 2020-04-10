import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  constructor(private themeService: ThemeService) { }

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  ngOnInit() {

  }
  enableDark() {
    this.themeService.enableDark();
    this.slides.slideNext();
  }

  enableLight() {
    this.themeService.enableLight();
    this.slides.slideNext();
  }

  goTo(slide: any) {
    console.log(slide);

    this.slides.slideTo(slide);
  }
}
