# Introduction

My project is a game of blackjack that can be repeated without constantly refreshing the page.
At the end, there is some of my code to briefly explain how my blackjack game runs.

## Wireframe
(https://excalidraw.com/#json=WVlGHWK3HEXMOtziybJLA,AZEdrGQmiPsgxrcMgHhEZg)

Here is my outline on my project. It's a very simple step-by-step process that covers all the scenarios in which the result text appears depending on who wins or if there is a tie.

### Initial Draw/Start of Blackjack
![Alt text](/wireframe-images/Initial-card-draw.png "Initial Card Draw")

### How the cards should be lined up
![Alt text](/wireframe-images/Centering-of-Cards.png)

### Pop-up Messages
![Alt text](/wireframe-images/Pop-up%20Messages-Win.png)
![Alt text](/wireframe-images/Pop-up-Messages-push.png)
![Alt text](/wireframe-images/Pop-up-Messages-push-blackjack.png)





# Description
This blackjack game consists of all 52 cards (not including joker) and each individual card may be drawn again in the same round. This is due to how irl casinos will use multiple decks to make it harder for people to count the cards left and will have less of an advantage in doing so (while not illegal, some casinos have it as a rule in their own place). 

## How to Play
There are 3 buttons, Play, Hit, and Stand. The play button will start the game of blackjack and allow the players to interact with the other 2 buttons while also changing the play button to a restart button that you can press at any time during the game.  Pressing Hit will draw a card into your hand and add to your total. Stand will basically end your turn and pass to the dealer's. Once the game finished and the winner is determined, the player can press the restart button play again.

# Code Snippets

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
This function buildDeck(), creates an empty deck of which will contain an array of strings. The array of strings is created through the for loop inside the function. The naming scheme of each string corresponds to the name/title of each image in the /card-images directory.

## Checking the Ace Value
```javascript
function checkAceTotalPlayer() {
        if (playerTotal > 21) {
            for (let i = 0; i < playerHandArray.length; i++) {
                if (playerHandArray[i] === 11) {
                    playerHandArray[i] = 1;
                    let newTotal = 0;
                    for (let i = 0; i < playerHandArray.length; i++) {
                        newTotal += playerHandArray[i];
                    }
                    playerTotal = newTotal;
                    playerScore = document.querySelector('#player-score');
                    playerScore.textContent = 'Player: ' + playerTotal;
                    console.log('player hand array', playerHandArray)
                    return;
                }
            }
        }
    }
```
This function checkAceTotalPlayer(), will examine the player's hand any time a card is drawn; this includes the initial 2 cards when you start the game.



## Stretch Goals
Eventually I would like to make a split button that will make it so that if the player has 2 cards of the same value, pressing said button will allow the player to separate the cards into their own individual groups that will allow the player to keep track of 2 different totals.
Furthermore, adding a setinterval for the dealer to draw their card would help to easily grasp what happens after the player stands.
