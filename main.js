$(document).ready(init);

var deck = [];
var playersHand = [];
var dealersHand = [];
var dealOut = "-1";
var playersScore = 0
var dealersScore = 0

var val = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var suit = ["heart", "diamond", "club", "spade"];
var deckOfCards = {
	"A" : 1,
	'2' : 2,
	'3' : 3,
	'4' : 4,
	'5' : 5,
	'6' : 6,
	'7' : 7,
	'8' : 8,
	'9' : 9,
	'10': 10,
	'J' : 10,
	'Q' : 10,
	'K' : 10,

}
function init(){
	$('#start').click(startGame);
	$('#hit').click(dealCards);
	$('#stand').click(playerStand);
}


function startGame(){
	console.log("start");
	for (i=0; i < suit.length; i++){
		for (j=0; j < val.length; j++){
			deck.push([suit[i],  val[j]])
		}
	}
	shuffleCards(deck)
	console.log(deck);
	console.log(deckOfCards);
}
function shuffleCards(array){
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    dealCards();
}

return array;
}
function dealCards(){
	while (dealersHand.length !== 2) {
		var card = deck.splice(Math.floor(Math.random()*deck.length),1);
		if(dealOut === "-1"){
			playersHand.push(card);
			dealOut = "1";
			console.log("player");
		}else{
			dealersHand.push(card);
			dealOut = "-1"
			console.log("dealer");
		}
		console.log(card);
	}
}
function playerHit(){
	var i = Math.floor(Math.random()*deck.length);
	var arr = cards.splice(i, 1);
	for (var j=0; j<arr.length; j++) {
		playersHand.push(arr[j]);
	}
	console.log("hit");
}
function playerStand(){
	console.log("stand");
}

function setImage(card){
	// card === deck[something]
	var cardImg = "cards/";
	// switch statement, cardImg += card[0] "/"(suit/)
	// cardImg += card[1] ".png"
	// css backgroundimage cardimg
}

function updateScore() {
	playersScore = 0;
	dealersScore = 0;
	$.each(playersHand, function(i, card){
		console.log('player card values:', card.value);
		var amt;
		if(card.value === "ace") {
			playersScore+=11;
		}
		else if (card.value === "king") {
			playersScore+=10;
		}else if (card.value === "queen") {
			playersScore+=10;
		}else if (card.value === "jack") {
			playersScore+=10;
		}
		else {
			amt = parseInt(card.value);
			playersScore+=amt;
		}

	});
	$.each(dealersHand, function(i, card){
		console.log('dealer card values:', card.value);
		var amt;
		if(card.value === "ace") {
			dealersScore+=11;
		}
		else if (card.value === "king") {
			dealersScore+=10;
		}else if (card.value === "queen") {
			dealersScore+=10;
		}else if (card.value === "jack") {
			dealersScore+=10;
		}
		else {
			amt = parseInt(card.value);
			dealersScore+=amt;
		}

	});
	checkForWin();
	console.log('Player score:',playersScore, 'Dealer score:',dealersScore);
}
