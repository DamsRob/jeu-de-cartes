# Damien ROBERT - Jeu de cartes

## Objectif :

Développer un jeu de cartes donnant au joueur 10 cartes aléatoires qui sont ensuites triés par couleurs (carreau, trèfle, pique, coeur) et par valeurs (de l'as jusqu'au roi).

## Choix technique : 

Site web développer en Angular. 

## Lancement du site :

Pour lancer le site, récupérer le dépôt git dans un IDE. Lancer la commande ```ng serve```. Si votre navigateur ne s'ouvre pas directement, il suffit de l'ouvrir soit-même et de copier l'adresse *http://localhost:4200/*

## Mode d'emploi : 

L'utilisateur arrive sur un écran blanc avec 3 boutons : 
  - **Créer main** pour afficher une nouvelle main aléatoire
  - **Trier cartes** pour afficher la main trier par couleurs et par valeurs
  - **Supprimer main** pour supprier la main tirer

## Raisonnement : 

- Créer un type Card qui est un objet ayant 3 paires de clés, valeurs :
```
value: number //valeur de la carte (de as à roi)
color: string //couleur de la carte
img: string //chemin de l'image affichant la carte

```
- Créer un type Hand qui est un tableau de Card.
- Créer un composant CardComponent qui va gérer l'affichage des cartes (fichier HTML et CSS) et les intéractions utilisateurs. 
- Créer un service CardService qui contient toutes les fonctions permettant de travailler la main de l'utilisateur.

Le programme, dès la construction du composant CardComponent génère 10 cartes aléatoires. Pour cela il choisit un nombre aléatoire entre 1 (valeur de l'as la plus faible dans le programme) et 13 (valeur du roi la
valeur la plus haute dans le programme). Le programme détermine ensuite la couleur de la carte, pour cela il génère un nombre aléatoire (entre 0 et 3) qui va déterminer l'indice du caractère de la chaîne **hdcs** (h: coeur,
d: carreau, c: trèfle et s:pique). Finalement on concatène la valeur et la couleur aléatoire pour obtenir le chemin de l'image de la carte (ex: 'assets/images/1c.gif' équivaut à l'as de trèfle).

Avant d'ajouter la carte à la main, le programme vérifie que la carte n'y est déjà pas, pour celà à chaque carte générée (sauf si la main est vide) on parcours la main en vérifiant qu'aucune carte n'est identique à
la générée.

Après le clique de l'utilisateur sur le bouton "Créer main", le code HTML affiche les cartes.

Lorsque l'utilisateur clique sur le bouton "trier main", il appelle la méthode sortCards qui ajoute chaque carte en fonction de sa couleur dans un tableau associé (un pique dans le tableau des piques) puis le programme
trie chaque tableau de couleur par valeurs pour au final les concaténer et obtenir un nouveau tableau trié par couleurs et par valeurs.

Si l'utilisateur clique sur le bouton "Supprimer main" on vide le tableau contenant les objets Card.

## Axe d'améliorations

Plusieurs axes d'améliorations sont possibles. 

L'utilisation d'Observable ou de promesses ou de fonctions asynchrones pour laisser le temps aux différentes fonctions de se réaliser complètement sans enchevêtrement (en particulier lorsqu'on vérifie si une carte
n'existe pas dans la main et pour la fonction de trie). Au vue de la taille des données à trier il n'était pas forcément nécessaire d'en utiliser un ici.

L'utilisation d'un store pour sauvegarder le changement d'état de la main. Très utile dans le cas où il faut conserver des modifications d'état de données tout en utilisant de la navigation ou pour éviter des appels API
trop régulièrement qui sont lourd en énergie. Dans notre cas les stores n'étaient pas forcément utiles.








