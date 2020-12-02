const container = document.getElementById("game");

// 8 different types of card

const cardTypes = Array.from({length: 8})
    .map((element, index) => {
    return index +1;
    })
    .map((element) => {
        return `./img/${element}.jpg`;  // można to zapisać jeszecze tak: return "type-" + element;
    });