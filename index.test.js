describe('playerTotal', function() {
    it('should return a number ', function() {
        let playerTotal = 0;
        let card1Player = getValue('ace_of_spades');
        playerTotal += card1Player;
        let card2Player = getValue('ace_of_hearts');
        playerTotal += card2Player;
        let newCard = getValue('king_of_diamonds');
        playerTotal += newCard;
        expect(typeof(playerTotal)).toBe('number'); 
    });
    it ('playerTotal should return the correct value (WITHOUT changing the value of the ace)', function() {
        let playerTotal = 0;
        let card1Player = getValue('ace_of_spades');
        playerTotal += card1Player;
        let card2Player = getValue('ace_of_hearts');
        playerTotal += card2Player;
        let newCard = getValue('king_of_diamonds');
        playerTotal += newCard;
        expect(playerTotal).toBe(32); 
    });
});

describe('dealerTotal', function() {
    it('should return a number ', function() {
        let dealerTotal = 0;
        let card1Dealer = getValue('ace_of_spades');
        dealerTotal += card1Dealer;
        let card2Dealer = getValue('ace_of_hearts');
        dealerTotal += card2Dealer;
        let newCard = getValue('king_of_diamonds');
        dealerTotal += newCard;
        expect(typeof(dealerTotal)).toBe('number'); 
    });
    it ('dealerTotal should return the correct value (WITHOUT changing the value of the ace)', function() {
        let dealerTotal = 0;
        let card1Dealer = getValue('ace_of_spades');
        dealerTotal += card1Dealer;
        let card2Dealer = getValue('ace_of_hearts');
        dealerTotal += card2Dealer;
        let newCard = getValue('king_of_diamonds');
        dealerTotal += newCard;
        expect(dealerTotal).toBe(32); 
    });
});

describe('buildDeck()', function() {
    it('it should return a length of 52 cards when creating a deck', function() {
        let result = buildDeck();
        expect(result.length).toBe(52);
    });
});

describe('getValue()', function() {
    it('should always return a number', function() {
        let result = getValue('900_of_spades');
        expect(typeof(result)).toBe('number');
    });
});
