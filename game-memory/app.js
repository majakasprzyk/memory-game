const memoryCards = document.querySelectorAll(".memory-card");
const backCard = document.querySelector(".back-card");
const divCard = document.querySelectorAll("div");
const score = document.querySelector(".score");
let card1Element = null;
let card2Element = null;
let card1 = null;
let card2 = null;

// to jest wyciągnięta funkcja zmiany klas, którą używam na dole

function toggleCard(cardNode) {
    const card = cardNode;
    if (card.classList.contains('back-card')){
        card.classList.replace('back-card', 'front-card');
    }
    else{
        card.classList.replace('front-card', 'back-card');
    }
}


// cała główna funkcja sprawiająca, że karty działają

memoryCards.forEach(memoryCard =>{
    memoryCard.addEventListener('click', (event) => {
        const currentCardType = event.currentTarget.dataset.cardType;
        const card = event.currentTarget;
        console.log(event.currentTarget.dataset.cardType) // ta linijka to to samo co ta poniżej
        console.log(event.currentTarget.getAttribute("data-card-type"))
     
        if (card1 === null) {
            card1 = currentCardType;
            card1Element = card;
            console.log({card1, card2})

            toggleCard(event.currentTarget);
            return;
        }
        if (card2 === null){
            card2Element = card;
            card2 = currentCardType;
            toggleCard(event.currentTarget);
        }
            console.log({card1, card2})

        if (card1 === card2){
            card1 = null;
            card2 = null;
            card1Element = null;
            card2Element = null;
        }
        // warunek, że jeśli karty nie są takie same to zmienia się klasa i się odwracają tak jak były
        if (card1 !== card2){
            setTimeout(() =>{
                card1Element.classList.replace('front-card', 'back-card');
                card2Element.classList.replace('front-card', 'back-card');
            }, 1000); 
            card1 = null;
            card2 = null;
            
        }

    console.log(event.currentTarget.children);
    console.log(event.target.children);

        
    });
});



