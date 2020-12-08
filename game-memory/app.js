const memoryCards = document.querySelectorAll(".memory-card");
const backCard = document.querySelector(".back-card");
let card1 = null;
let card2 = null;

function toggleCard(cardNode) {
    const card = cardNode.children[0];
    if (card.classList.contains('back-card')){
        card.classList.replace('back-card', 'front-card');
    }
    else{
        card.classList.replace('front-card', 'back-card');
    }
}

memoryCards.forEach(memoryCard =>{
    memoryCard.addEventListener('click', (event) => {
        const currentCardType = event.currentTarget.dataset.cardType;
        console.log(event.currentTarget.dataset.cardType) // ta linijka to to samo co ta poniżej
        console.log(event.currentTarget.getAttribute("data-card-type"))
        if (card1 === null) {
            card1 = currentCardType;
            toggleCard(event.currentTarget);
            return;
        }
        if (card2 === null){
            card2 = currentCardType;
            toggleCard(event.currentTarget);
        }
        
        if (card1 === card2){
            card1 = null;
            card2 = null;
        }
        // chciałabym napisać warunek, że jeśli karty nie są takie same to klasa z front-card zmienia się znowu na back-card ale nie działa i nie mam już pomysłu jakby to zrobić
        if (card1 != card2){
            card1.classList.replace('front-card', 'back-card');
            card2.classList.replace('front-card', 'back-card');


        }
        const card = event.currentTarget.children[0];
    console.log(event.currentTarget.children);
    console.log(event.target.children);

        
    });
});


const divCard = document.querySelectorAll("div");

// done trzeba sprawdzić typy kard jesli są takie same to zostają odkryte
// jeśli karty są inne to po sekundzie np. wraca do poprzedniego stanu, czyli na back-card
// done nie wolno mieć odkrytych więcej niż 2 card - w senie innych niż do pary 

