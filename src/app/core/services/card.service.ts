import { Card } from "../models/card.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CardService{
    
    hand: Card[] = []

    constructor(){}

    //Ajouter une carte à la main 

    addCard(valueCard: number, colorCard: string, imgCard: string){
            this.hand.push({
                value: valueCard,
                color: colorCard,
                img: imgCard
            })
    }

    //Vérifier si la nouvelle carte aléatoire générée n'est pas déjà dans la main

    checkCard(valueCard: number, colorCard: string): boolean {
        if (this.hand.length > 0){
            const alreadyCard = this.hand.find(card => card.value == valueCard && card.color == colorCard)
            return alreadyCard == undefined
        }
        return true
    }

    //Supprimer la main

    resetHand(){
        this.hand = []
    }
}

