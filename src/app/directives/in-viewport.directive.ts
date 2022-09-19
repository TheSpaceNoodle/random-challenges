import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[inViewport]',
})
export class InViewportDirective implements AfterViewInit {
  @Input() treshold = 0;

  observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.intersectionObserver();
  }

  intersectionObserver() {
    let options = {
      rootMargin: '0px',
      threshold: 1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target.id);
        if (entry.intersectionRatio > 0 && entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          console.log('adding');
        }
      });
    }, options);
    this.observer.observe(this.element.nativeElement);
  }
}
