import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() challenge!: Challenge;

  constructor() {}

  ngOnInit(): void {}
}
