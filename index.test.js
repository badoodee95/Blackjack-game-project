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
    it ('playerTotal should return the correct value (WITHOUT changing the value of the ace) ', function() {
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

describe('checkAcePlayerTotal()', function() {
    it ('playerTotal should return the correct value (WITH changing the value of the ace) ', function() {
    });
});