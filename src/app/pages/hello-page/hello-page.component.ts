import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.scss'],
})
export class HelloPageComponent implements OnInit {
  @Input() visible!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
