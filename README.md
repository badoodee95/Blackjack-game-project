# Introduction

My project is a game of blackjack that can be repeated without constantly refreshing the page.
Below is some of my code to briefly explain how my blackjack game runs.

## Building the Deck

```javascript
function buildDeck() {
        deck = [];
        let cardValues = ["ace", '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
        let cardSuits = ['clubs', 'diamonds', 'hearts', 'spades'];

        for (let i = 0; i < cardSuits.length; i++) {
            for (let j = 0; j < cardValues.length; j++) {
                deck.push(cardValues[j] + "_of_" + cardSuits[i]);
            }
        }
        return deck;
    };
    deck = buildDeck();
```
This function buildDeck(), creates an arra

