import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initCards();
    console.log(this.cards);
  }

  initCards() {
    let card: Card = {};
    card.title = 'Saldo';
    card.subtitle = 'Saldo em contas final do mes';

    let card1: Card = {};
    card1.title = 'Dividas';
    card1.subtitle = 'Dividas em meu nome';

    this.cards.push(card);
    this.cards.push(card1);
  }
}
