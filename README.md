# Damien ROBERT - Jeu de cartes

## Objectif :

Développer un jeu de cartes donnant au joueur 10 cartes aléatoires qui sont ensuites triées par couleurs (carreau, trèfle, pique, coeur) et par valeurs (de l'as jusqu'au roi).

## Choix techniques : 

Site web développé en Angular. 

## Lancement du site :

Pour lancer le site, récupérer le dépôt git dans un IDE. Lancer la commande ```ng serve```. Si votre navigateur ne s'ouvre pas directement, ouvrez le et taper l'adresse *http://localhost:4200/* (Le port peut être différent du port 4200 si celui-ci est utilisé pour un autre processus).

## Mode d'emploi : 

L'utilisateur est sur un écran blanc avec 3 boutons : 
  - **Créer main** pour afficher une nouvelle main aléatoire
  - **Trier cartes** pour afficher la main triée par couleurs et par valeurs
  - **Supprimer main** pour supprimer la main tirée

## Raisonnement : 

- Créer une interface Card ayant 3 propriétés :
```
value: number //valeur de la carte (de as à roi)
color: string //couleur de la carte
img: string //chemin de l'image affichant la carte

```
- Créer une interface Hand qui est un tableau de Card.
- Créer un composant CardComponent qui va gérer l'affichage des cartes (fichier HTML et CSS) et les intéractions utilisateurs. 
- Créer un service CardService qui contient toutes les fonctions permettant de travailler avec la main de l'utilisateur.

Le programme, dès la construction du composant CardComponent génère 10 cartes aléatoires. Pour cela il choisit un nombre aléatoire entre 1 (valeur de l'as, la plus faible dans le programme) et 13 (valeur du roi, la valeur la plus haute dans le programme). Le programme détermine ensuite la couleur de la carte, il génère un nombre aléatoire (entre 0 et 3) qui va déterminer l'indice du caractère de la chaîne **hdcs** (h: coeur,d: carreau, c: trèfle et s:pique). Finalement on concatène la valeur et la couleur aléatoire pour obtenir le chemin de l'image de la carte (ex: 'assets/images/1c.gif' équivaut à l'as de trèfle).

Avant d'ajouter une nouvelle carte à la main, le programme vérifie que la carte n'est pas dans la main existante, pour celà à chaque carte générée il parcourt la main (sauf si la main est vide) en vérifiant qu'aucune carte n'est identique à celle-ci.

Après le clique sur le bouton "Créer main", le code HTML affiche les cartes.

Lorsque l'utilisateur clique sur le bouton "trier main", il appelle la méthode sortCards qui ajoute chaque carte, en fonction de sa couleur, dans un tableau associé (un pique dans le tableau des piques) puis trie chaque tableau de couleur par valeurs pour au final les concaténer et obtenir un nouveau tableau trié par couleurs et par valeurs.

Si l'utilisateur clique sur le bouton "Supprimer main" on vide le tableau contenant les objets Card.

## Axe d'améliorations

Plusieurs axes d'améliorations sont possibles. 

L'utilisation d'Observable ou de promesses ou de fonctions asynchrones pour les fonctions de trie ou de vérification que la carte n'est pas déjà dans la main. Si le nombre de cartes venait à grandir très fortement leur utilisation deviendrait indispensable pour éviter des enchevêtrements.

L'utilisation d'un store pour sauvegarder le changement d'état de la main. Très utile dans le cas où il faut conserver des modifications d'état de données tout en utilisant de la navigation ou pour éviter des appels API trop régulièrement qui sont lourd en énergie.








