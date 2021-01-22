import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { IonSlides } from '@ionic/angular';
// import { NavigationBar } from '@ionic-native/navigation-bar/ngx';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  constructor(
    private themeService: ThemeService,
    // private navigationBar: NavigationBar
  ) { }

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  public currentSlide = 0;
  public newRecentGame: any; // components

  ngOnInit() {
    this.themeService.enableDark();
    // const autoHide = true;
    // this.navigationBar.setUp(autoHide);
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

  addToRecents(event) {
    this.newRecentGame = event;
  }
}
