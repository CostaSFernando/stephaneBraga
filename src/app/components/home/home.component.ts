import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nail-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  currentImagetransform = 0;

  constructor() { }

  ngOnInit(): void {
  }

  moveCarouselItem(e: TouchEvent, currentImg: HTMLElement, currentNumberImg: number) {
    let htmlElementCarousel = currentImg //Get carousel element
    /**
     * Voltar
     */
    if (e.changedTouches[0].pageX > 0 ) {
      // previus image

      if (this.currentImagetransform <= 0) {
        const firstElement = htmlElementCarousel.children[this.currentImagetransform] as HTMLElement
        htmlElementCarousel.style.transform = `translateX(${firstElement.clientWidth - (firstElement.clientWidth / 3)}px)`
        return
      }

      /**
       * Get carousel item element
       */

      const element = htmlElementCarousel.children[this.currentImagetransform - 1] as HTMLElement


      htmlElementCarousel.style.transform = `translateX(-${element.clientWidth - ( element.clientWidth / 3)}px)`
      this.currentImagetransform--;
    }
    /**
     * Seguinte
     */
    if (e.changedTouches[0].pageX < 0) {
      // next image

      if (this.currentImagetransform === 4 ) {
        this.currentImagetransform = 0;
        const firstElement = htmlElementCarousel.children[this.currentImagetransform] as HTMLElement

        htmlElementCarousel.style.transform = `translateX(${firstElement.clientWidth - (firstElement.clientWidth / 3)}px)`
        return
      }

      const element = htmlElementCarousel.children[this.currentImagetransform + 1] as HTMLElement
      console.log(element.clientWidth);
      const nextTranslate = this.currentImagetransform >= 1 ? (element.clientWidth * (this.currentImagetransform + 1)) - ( element.clientWidth / 3) : ( element.clientWidth / 3)
      console.log('nexttranslate', nextTranslate, element.clientWidth / 3);

      htmlElementCarousel.style.transform = `translateX(-${nextTranslate}px)`
      this.currentImagetransform++
    }

  }

}
