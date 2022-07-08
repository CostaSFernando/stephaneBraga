import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nail-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moveCarouselWheel(e: WheelEvent) {
    e.deltaY > 0 ? this.moveCarousel('NEXT', e) : this.moveCarousel('PREVIOUS', e)
  }

  moveCarousel(move: 'NEXT' | 'PREVIOUS', event: Event) {
    if ( move === 'NEXT') {
      (event?.target as HTMLElement)?.scrollBy(300, 0)
    } else {
      (event?.target as HTMLElement)?.scrollBy(-300, 0)
    }
  }

}
