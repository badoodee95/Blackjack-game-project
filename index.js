    // =================================== VARIABLE DECLARATION ================================= //
    // Declaring all the variables for the dealer's cards
    let card1Dealer = document.querySelector('#card-1-dealer');
    let card2Dealer = document.querySelector('#card-2-dealer');
    let newSecondCardDealer = card2Dealer;
    let dealerHand = document.querySelectorAll('.dealer-hand');
    let dealerSide = document.querySelector('.dealer-side');
    let dealerScore = document.querySelector('#dealer-score');
    let dealerHandArray = [];
    // Declaring all the variables for the player's cards
    let card1Player = document.querySelector('#card-1-player');
    let card2Player = document.querySelector('#card-2-player');
    let playerHand = document.querySelectorAll('.player-hand');
    let playerSide = document.querySelector('.player-side');
    let playerScore = document.querySelector('#player-score');
    let playerHandArray = [];
    let newFirstCardPlayer;
    let newSecondCardPlayer;
    // Declaring the totals
    let playerTotal = 0;
    let dealerTotal = 0;
    // Declaring the Ace; needed to declare so that we can track whether the Ace's value can be +1 or +11;
    let aceValue;
    // Declaring the deck
    let deck;
    // Declaring the results text to display on-screen
    let resultsText = document.querySelector('.results-text');
    // Declaring the hidden card for the dealer
    let hidden;

    //CONSTANTLY UPDATE YOUR JAVASCRIPT CODE


    // ==================================== DECK BUILDING =========================================//
    // Creating the Deck
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

    // Drawing a random card to add onto the hand ===============================================
    function drawCard() {
        let randomCard = Math.floor(Math.random() * deck.length);
        // console.log(deck[randomCard]);
        let card = document.createElement('img');
        card.setAttribute('src', "card-images/" + deck[randomCard] + ".svg");
        card = deck[randomCard];
        return card;
    }
    // =============================== Assigning a value to each card =========================== //
    function getValue(number) {
        let newArray = number.split("_");
        let cardValue = newArray[0];
        if (cardValue === "ace") {
             aceValue = 11;
             return cardValue = aceValue;
        } else if(cardValue === "king" || cardValue === "queen" || cardValue === "jack") {
            return 10;
        }
        return parseInt(cardValue);
        
    };


    // ================================ KEEPING TRACK OF THE TOTALS ============================ //
    function keepTrack() {
        // playerTotal = getValue(card1Player) + getValue(card2Player);
        let score = document.querySelector('#player-score');
        playerHand = document.querySelectorAll('.player-hand');
        playerSide = document.querySelector('.player-side');
        for (let i = 0; i < playerSide.length; i++) {
            
            let playerSideArray = [...playerSide];
            console.log('hand array', playerSideArray);
        }
        score.textContent = "Player: " + playerTotal;
    }
    



    // ======================================= PLAY BUTTON ============================== //
    let playButton = document.querySelector('#play');
    playButton.addEventListener('click', function() {
        hitButton.addEventListener('click', buttonHit);
        standButton.addEventListener('click', buttonStand);
        resultsText = document.querySelector('.results-text');
        resultsText.textContent = 'GAME BEGINS'
        newFirstCardPlayer = drawCard();
        card1Player.setAttribute('src', "card-images/" + newFirstCardPlayer + ".svg");
        playerHandArray.push(getValue(newFirstCardPlayer));
        newSecondCardPlayer = drawCard();
        card2Player.setAttribute('src', "card-images/" + newSecondCardPlayer + ".svg");
        playerHandArray.push(getValue(newSecondCardPlayer));
        console.log('player hand array', playerHandArray);
        let newFirstCardDealer = drawCard();
        card1Dealer.setAttribute('src', "card-images/" + newFirstCardDealer + ".svg");
        dealerTotal += getValue(newFirstCardDealer);
        dealerHandArray.push(getValue(newFirstCardDealer));
        card2Dealer.style.height = "325px";
        hidden = drawCard();
        addHiddenCardtoTotal(); 
        card2Dealer = newSecondCardDealer;
        console.log('dealer 2nd card', card2Dealer)
        console.log('dealer total', dealerTotal)
        playButton.replaceWith(restartButton);
        playerTotal += getValue(newFirstCardPlayer);
        playerTotal += getValue(newSecondCardPlayer);
        playerScore.textContent = "Player: " + playerTotal;
        checkPlayerInitialTotal();
        checkAceTotalPlayer();
        // console.log("Players first card", newFirstCardPlayer);
        console.log('playerTotal', playerTotal);
        blackjackPush();
        
    });

    // ======================================== RESTART BUTTON ======================== //
    let restartButton = document.createElement('button');
    restartButton.setAttribute('id', 'restart');
    restartButton.textContent = 'Restart';
    restartButton.addEventListener('click', function() {
        card1Player.setAttribute('src', "card-images/card-back-red.svg");
        card2Player.setAttribute('src', "card-images/card-back-red.svg");
        card1Dealer.setAttribute('src', "card-images/card-back-red.svg");
        card2Dealer.setAttribute('src', "card-images/card-back-red.svg");
        playerHand = document.querySelectorAll('.player-hand');
        playerSide = document.querySelector('.player-side');
        console.log("player's hand", playerHand, playerHand.length);
        while(playerHand.length > 2) {
            let lastChild = playerSide.lastChild;
            console.log('last child', lastChild);
            playerSide.removeChild(lastChild);
            playerSide = document.querySelector('.player-side');
            playerHand = document.querySelectorAll('.player-hand');
        };
        dealerHand = document.querySelectorAll('.dealer-hand');
        dealerSide = document.querySelector('.dealer-side');
        console.log("dealer's hand", dealerHand, dealerHand.length);
        while(dealerHand.length > 2) {
            let lastChild = dealerSide.lastChild;
            console.log('last child dealer', lastChild);
            dealerSide.removeChild(lastChild);
            dealerSide = document.querySelector('.dealer-side');
            dealerHand = document.querySelectorAll('.dealer-hand');
        };
        console.log("dealer's side", dealerSide);
        console.log("player's side", playerSide);
        restartButton.replaceWith(playButton);
        buildDeck();
        card2Dealer.style.height = '';
        playerTotal = 0;
        dealerTotal = 0;
        playerScore.textContent = 'Player: ';
        dealerScore.textContent = 'Dealer: ';
        resultsText.textContent = 'RESTARTED GAME!';
        hitButton.removeEventListener('click', buttonHit);
        standButton.removeEventListener('click', buttonStand);
        playerHandArray = [];
        dealerHandArray = [];
        
    })

    // ======================================== HIT BUTTON ============================ //
    let hitButton = document.querySelector('#hit');
    function buttonHit() {
        let newCard = drawCard();
        let newCardImg = document.createElement('img');
        newCardImg.setAttribute('class', 'player-hand');
        newCardImg.setAttribute('src', "card-images/" + newCard + ".svg");
        playerSide.append(newCardImg);
        playerHandArray.push(getValue(newCard));
        console.log('new player hand array', playerHandArray);
        playerTotal += getValue(newCard);
        playerScore.textContent = "Player: " + playerTotal;
        playerHand = document.querySelectorAll('.player-hand');
        playerSide = document.querySelector('.player-side');
        bust();
        forceStand();
    }

    hitButton.addEventListener('click', buttonHit);

    
    // ======================================== STAND BUTTON =========================== //
    let standButton = document.querySelector('#stand');
    function buttonStand() {
        card2Dealer = document.querySelector('#card-2-dealer');
        card2Dealer.setAttribute('src', 'card-images/' + hidden + ".svg");
        dealerScore = document.querySelector('#dealer-score');
        dealerScore.textContent = 'Dealer: ' + dealerTotal;
        dealerAI();
        resultMessage();
    }

    standButton.addEventListener('click', buttonStand);

    // ======================================== FUNCTION ================================= //

    function resultMessage() {
        resultsText = document.querySelector('.results-text');
        if (playerTotal > 21) {
            resultsText.textContent = "PLAYER BUST! DEALER WINS!";
        } else if (dealerTotal > 21) {
            resultsText.textContent = "DEALER BUST! PLAYER WINS!"
        } else if (dealerTotal < playerTotal) {
            resultsText.textContent = "DEALER HOLDS... \n DEALER: " + dealerTotal + " PLAYER: " + playerTotal + " PLAYER WINS!";
        } else if (playerTotal < dealerTotal) {
            resultsText.textContent = "PLAYER HOLDS... \n PLAYER: " + playerTotal + " DEALER: " + dealerTotal + " DEALER WINS!";
        } else if (playerTotal === dealerTotal) {
            resultsText.textContent = "PUSH..." + " PLAYER: " + playerTotal + " DEALER: " + dealerTotal + " NO WINNER.";
        }
    }

    function addHiddenCardtoTotal() {
        card2Dealer = document.querySelector('#card-2-dealer');
        card2Dealer = getValue(hidden);
        dealerHandArray.push(getValue(hidden));
        dealerTotal += card2Dealer;
        dealerScore = document.querySelector('#dealer-score');
        dealerScore.textContent = 'Dealer: ???';
        if (dealerTotal === 21 && playerTotal !== 21) {
            dealerScore.textContent = 'Dealer: ' + dealerTotal;
            resultsText = document.querySelector('.results-text');
            resultsText.textContent = 'DEALER HAS BLACKJACK! DEALER WINS!'
            card2Dealer = newSecondCardDealer;
            card2Dealer.setAttribute('src', "card-images/" + hidden + ".svg")
            hitButton.removeEventListener('click', buttonHit);
            standButton.removeEventListener('click', buttonStand);
        }

    }
    
    function bust() {
        if (playerTotal > 21) {
            checkAceTotalPlayer();
        }
        if (playerTotal > 21) {
            hitButton.removeEventListener('click', buttonHit);
            standButton.removeEventListener('click', buttonStand);
            resultMessage();
        }
        if (dealerTotal > 21) {
            checkAceTotalDealer();
        }
        };
    
    

    function checkPlayerInitialTotal() {
        playerScore = document.querySelector('#player-score');
        if (playerTotal === 21 && dealerTotal !== 21) {
            resultsText = document.querySelector('.results-text');
            resultsText.textContent = 'PLAYER HAS BLACKJACK! PLAYER WINS!'
            hitButton.removeEventListener('click', buttonHit);
            standButton.removeEventListener('click', buttonStand);
        } 
    }

    function checkAceTotalPlayer() {
        if (playerTotal !== 21) {
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
    };

    function checkAceTotalDealer() {
        for (let i = 0; i < dealerHandArray.length; i++) {
            if (dealerHandArray[i] === 11) {
                dealerHandArray[i] = 1;
                let newTotal = 0;
                for (let i = 0; i < dealerHandArray.length; i++) {
                    newTotal += dealerHandArray[i];
                }
                dealerTotal = newTotal;
                dealerScore = document.querySelector('#dealer-score');
                dealerScore.textContent = 'Dealer: ' + dealerTotal;
                console.log('dealer hand array', dealerHandArray)
                return;
            }
        }
    };

    function dealerAI() {
        while (dealerTotal < 17) {
            buttonHitDealer();
        }
    }

    function buttonHitDealer() {
        let newCard = drawCard();
        let newCardImg = document.createElement('img');
        newCardImg.setAttribute('class', 'dealer-hand');
        newCardImg.setAttribute('src', "card-images/" + newCard + ".svg");
        dealerSide.append(newCardImg);
        dealerHandArray.push(getValue(newCard));
        dealerTotal += getValue(newCard);
        dealerScore.textContent = "Dealer: " + dealerTotal;
        // console.log("player's hand", playerHand, playerHand.length);
        dealerHand = document.querySelectorAll('.dealer-hand');
        dealerSide = document.querySelector('.dealer-side');
        bust();
    }

    function blackjackPush() {
        if (playerTotal === 21 && dealerTotal === 21) {
            hitButton.removeEventListener('click', buttonHit);
            standButton.removeEventListener('click', buttonStand);
            resultsText.querySelector('.results-text');
            resultsText.textContent = 'BOTH PLAYER AND DEALER HAS BLACKJACK! \n PUSH.'
        } 
    }

    function forceStand() {
        if (playerTotal === 21) {
            buttonStand();
        }
    }


    hitButton.removeEventListener('click', buttonHit);
    standButton.removeEventListener('click', buttonStand);