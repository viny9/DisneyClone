import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  navItems = [
    {name: 'DISNEY+', subItems: [
      {name: 'Saiba mais' },
      {name: 'Combo+' },
      {name: 'Disponível no Disney+' },
      {name: 'Sobre Disney+' },
      {name: 'Disney+ News' },
      {name: 'Central de Ajuda' },
    ]},

    {name: 'SHOP'},
    {name: 'NOVIDADES'},
    {name: 'FILMES', subItems: [
      {name: 'Lightyear' },
      {name: 'Eternos' },
      {name: 'Encanto' },
      {name: 'Shang-Chi e a Lenda dos Dez Anéis' },
      {name: 'Jungle Cruise' },
      {name: 'Viúva Negra' },
      {name: '20th Century Studios' },
    ]},

    {name: 'DISNEY TICKETS'},
    {name: 'MARVEL INSIDER'},
    {name: 'MAIS', subItems:[
      {name: 'TV' },
      {name: 'RÁDIO DISNEY' },
      {name: 'MAIS' }
  ]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
