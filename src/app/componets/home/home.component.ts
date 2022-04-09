import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Movimentacao } from 'src/app/models/movimentacao';
import { Root, Slip } from 'src/app/models/slip';
import { SlipService } from 'src/app/services/slip.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  movimentacoes: Movimentacao[] = [];
  constructor(private slipService: SlipService) {}

  slip?: Root;

  ngOnInit(): void {
    this.initCards();
    console.log(this.cards);
    this.initMovimentacao();
    this.getSlip();
    console.log(this.movimentacoes);
  }

  initCards() {
    let card: Card = {};
    card.title = 'Saldo';
    card.subtitle = 'Saldo em contas final do mes';
    card.color = 'success';

    let card1: Card = {};
    card1.title = 'Dividas';
    card1.subtitle = 'Dividas em meu nome';
    card1.color = 'danger';

    let card2: Card = {};
    card2.title = 'Dividas';
    card2.subtitle = 'Dividas em meu nome';
    card2.color = 'danger';

    this.cards.push(card);
    this.cards.push(card1);
    this.cards.push(card2);
  }

  initMovimentacao() {
    for (let i = 0; i < 10; i++) {
      let movimentacao: Movimentacao = {};
      movimentacao.tipo = 'despesa';
      movimentacao.nome = 'Compra ' + i;
      movimentacao.valor = 'R$ ' + i;
      movimentacao.data = '09/04/2022';

      this.movimentacoes.push(movimentacao);
    }
  }

  getSlip() {
    this.slipService.getSlip().subscribe((data: Root) => {
      this.slip = data;
      console.log(data);
    });
  }
}
