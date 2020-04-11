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
  public currentSlide = 0;

  ngOnInit() {
    this.themeService.enableDark();
  }

  goTo(slide: number) {
    this.slides.slideTo(slide);
    this.slideChanged(slide);
  }

  slideChanged(slide?: number) {
    this.slides.getActiveIndex().then(index => {
      this.currentSlide = index;
    }).catch(err => {
      console.error(`Changing Slide Error: ${err}`);
    });
  }
}
