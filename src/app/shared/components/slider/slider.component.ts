import { Component, Input, OnInit } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input({required: true}) listImages: string[] = [];
  @Input() imgXSlide = 1;
  @Input() isAutoplay = true;
  @Input({required: true}) effect:'coverflow' | 'cube' = 'coverflow';

  ngOnInit(): void {
    console.log(this.listImages);
  }
}
