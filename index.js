    // =================================== VARIABLE DECLARATION ================================= //
    // Declaring all the variables for the dealer's cards
    let card1Dealer = document.querySelector('#card-1-dealer');
    let card2Dealer = document.querySelector('#card-2-dealer');
    let dealerHand = document.querySelectorAll('.dealer-hand');
    // Declaring all the variables for the player's cards
    let card1Player = document.querySelector('#card-1-player');
    let card2Player = document.querySelector('#card-2-player');
    let playerHand = document.querySelectorAll('.player-hand');
    let playerHandArray = Array.from(playerHand);
    console.log(playerHandArray)
    // Empty space for each card slot
    let emptySpace = document.createElement('img');
    emptySpace.setAttribute('src', "");
    // Declaring the totals
    let playerTotal = 0;
    let dealerTotal = 0;
    // Declaring the Aces; needed to declare so that we can track whether the Ace's value can be +1 or +11;
    let playerAce = 0;
    let dealerAce = 0;
    // Declaring the hidden card for the dealer
    let hidden;
    // Declaring the deck
    let deck;
    // Declaring the images for the backs of the cards




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
    };
    buildDeck();

    // Drawing a random card to add onto the hand
    function drawCard() {
        let randomCard = Math.floor(Math.random() * deck.length);
        // console.log(deck[randomCard]);

        let cardImage = document.createElement('img');
        cardImage.setAttribute('src', "card-images/" + deck[randomCard] + ".svg");
        let drawnCard = deck[randomCard];
        deck.splice(randomCard, 1); // Used to remove the card drawn from the deck/array
        return drawnCard;
    }

    // =============================== Assigning a value to each card =========================== //
    function getValue(card) {
        let data = card.split("_");
        let value = data[0];

        if (isNaN(value)) {
            if (value === 'ace') {
                return 11;
            } else {
                return 10;
            }
        }
        return parseInt(value);
    }


    // ================================ KEEPING TRACK OF THE TOTALS ============================ //




    // ======================================= PLAY BUTTON ============================== //
    let playButton = document.querySelector('#play');
    playButton.addEventListener('click', function() {
        let newFirstCardPlayer = card1Player;
        newFirstCardPlayer.setAttribute('src', "card-images/" + drawCard() + ".svg");
        let newSecondCardPlayer = card2Player;
        newSecondCardPlayer.setAttribute('src', "card-images/" + drawCard() + ".svg");
        let newFirstCardDealer = card1Dealer;
        newFirstCardDealer.setAttribute('src', "card-images/" + drawCard() + ".svg");
        let newSecondCardDealer = card2Dealer;
        newSecondCardDealer.style.height = "325px";
        playButton.replaceWith(restartButton);

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
        while(playerHand.length > 3) {
            playerHand.pop().remove();
        }
        restartButton.replaceWith(playButton);
        buildDeck();
        card2Dealer.style.height = '';

    })

    // ======================================== HIT BUTTON ============================ //
    let hitButton = document.querySelector('#hit');
    hitButton.addEventListener('click', function() {
        let newCard = document.createElement('img');
        newCard.setAttribute('src', "card-images/" + drawCard() + ".svg");
        playerHand.appendChild(newCard);
        playerHandArray.appendChild(newCard);
    })






