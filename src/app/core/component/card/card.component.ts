import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  color = 'hdcs'      //h : coeur, d: carreau, c: trèfle, s: pique
  numberOfCards = 10  //nombre de cartes dans une main
  compteur = 0
  showHand = false    
  hand!: Card[]       //main contenant les cartes
  handSorted!: Card[] //main contenant les cartes triées
  
  htab : Card[] = []  //tableau contenant les cartes coeurs présentent dans la main
  stab : Card[] = []  //tableau contenant les cartes piques présentent dans la main
  dtab : Card[] = []  //tableau contenant les cartes carreaux présentent dans la main
  ctab : Card[] = []  //tableau contenant les cartes trèfles présentent dans la main
  showSortedHand = false
  showError = false

  
  constructor(private cardService: CardService){}

  //Dès l'affichage de l'écran on définit la main aléatoire qui sera afficher si l'utilisateur clique sur le bouton "Créer main"
  //On limite la main à 10 cartes 
  //Avant d'ajouter une carte aléatoire à la main on vérifie qu'elle n'est pas déjà présente dans la main
  
  ngOnInit(): void {
    while (this.compteur < this.numberOfCards){

      const valueCard = Math.floor(Math.random()*(14-1) + 1) 
      const colorCard = this.color[Math.floor(Math.random()*4)] 
      const imgCard = `assets/images/${valueCard}${colorCard}.gif`  
      if(this.cardService.checkCard(valueCard, colorCard)){

        this.cardService.addCard(valueCard, colorCard, imgCard)
        this.compteur += 1;
      }
      
    }
  }

  //Affichage de la main

  showCards(){
    this.hand = this.cardService.hand
    this.showHand = true
    this.showError = false
  }

  //Trie de la main et affichage de celle-ci

  sortCards(){
    if(!this.showHand){
      this.showError = true
    }
    else{
      this.hand.map(card=>{
        switch (card.color){
          case 'h': 
            this.htab.push(card)
            break 
          case 's':
            this.stab.push(card)
            break
          case 'd':
            this.dtab.push(card)
            break
          case 'c':
            this.ctab.push(card)
        }
      })
      this.htab.sort((a,b)=>a.value-b.value)
      this.stab.sort((a,b)=>a.value-b.value)
      this.dtab.sort((a,b)=>a.value-b.value)
      this.ctab.sort((a,b)=>a.value-b.value)
  
      this.handSorted = this.htab.concat(this.stab, this.dtab, this.ctab)
  
      this.showSortedHand = true
    }
  }

  //Nouvelle main

  newHand(){
    this.showHand = false
    this.showSortedHand = false
  }
}
