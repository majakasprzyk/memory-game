const container = document.getElementById("game");

// 8 different types of card

const cardTypes = Array.from({length: 8})
    .map((element, index) => {
    return index +1;
    })
    .map((element) => {
        return `./img/${element}.png`;  // można to zapisać jeszecze tak: return "type-" + element;
    });

// double the array 

const cards = cardTypes.flatMap((type) => [type, type]);

const cardsToPick = cards.map((item) => item);
const cardsInRandomOrder = [];

for (let i = 0; i <cards.length; i += 1){
    const randomIndex = Math.floor(Math.random() * cardsToPick.length);
    cardsInRandomOrder.push(cardsToPick.splice(randomIndex, 1)[0]);
}

console.log(cardTypes);
console.log(cards);
console.log(cardsToPick);
console.log(cardsInRandomOrder);