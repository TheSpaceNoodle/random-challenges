import { Component, Input, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.scss'],
})
export class HelloPageComponent implements OnInit {
  @Input() visible!: boolean;
  logged = false;

  constructor() {}

  ngOnInit(): void {
    if (getAuth().currentUser) {
      this.logged = true;
    }
  }
}
