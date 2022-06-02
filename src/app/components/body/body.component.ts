import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  noticias = [
    { img: 'https://lumiere-a.akamaihd.net/v1/images/62911445297bbb0001408c33-image_cd503f4a.jpeg?region=0,42,1536,613&width=320', 
      text: "'Obi-Wan Kenobi': quais atores de 'Star Wars' retornaram para a nova série"  },

    { img: 'https://lumiere-a.akamaihd.net/v1/images/b_disneyplusoriginals_echo_mobile_22212_6c412f53.jpeg?region=0,32,640,256&width=320',
      text: "Veja a primeira imagem divulgada da nova série da Marvel Studios" },

    { img: 'https://lumiere-a.akamaihd.net/v1/images/g_obiwankenobi_7_20649_5246211b.jpeg?region=0,63,1300,519&width=320',
      text: "Que horas saem os novos episódios de 'Obi-Wan Kenobi' no Disney+" },

    { img: 'https://lumiere-a.akamaihd.net/v1/images/62911445297bbb0001408c33-image_cd503f4a.jpeg?region=0,50,1536,614&width=320',
      text: "10 frases de 'Obi-Wan Kenobi' que entraram para a história" },

    { img: 'https://lumiere-a.akamaihd.net/v1/images/au_article_disneyplus_starwars_obiwan_quotes_5x2_e466f318.jpeg?region=0,0,1365,546&width=320',
      text: "'Obi-Wan Kenobi': o exílio do Jedi, a vida de Leia, os Inquisidores e tudo o que é preciso saber antes do episódio 3 da série" },

    { img: 'https://lumiere-a.akamaihd.net/v1/images/eu_disneyplus_weekend-family_c169_r_9982127f.jpeg?region=0,138,1630,652&width=320',
      text: "'Fim de semana em família': comédia francesa sobre clã muito especial chega ao Disney+" },

    { img: 'https://lumiere-a.akamaihd.net/v1/images/g_obiwankenobi_18_20649_38d742e5.jpeg?region=18,33,765,306&width=320',
      text: "'Obi-Wan Kenobi': saiba o que aconteceu no episódio 2 da série" },

    { img: 'https://lumiere-a.akamaihd.net/v1/images/eu_disneyplus_obi-wan-kenobi_mob_m_7c3551f4.jpeg?region=0,46,800,320&width=320',
      text: "'Obi-Wan Kenobi': descubra o que acontece no primeiro episódio da série" },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
