import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  scrolled = 0;
  prevScrolled = 0;

  @HostListener('window:scroll', ['$event.path[1].scrollY'])
  handleScroll(scrollY: any) {
    if (scrollY > this.prevScrolled && scrollY > 80) {
      this.scrolled = 1;
    } else if (this.prevScrolled > scrollY && scrollY != 0) {
      this.scrolled = 2;
    } else {
      this.scrolled = 0;
    }
    this.prevScrolled = scrollY || 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
