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
        console.log(event.currentTarget.dataset.cardType)//
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
            card2 =null;
        }
        const card = event.currentTarget.children[0];
    console.log(event.currentTarget.children);
    console.log(event.target.children);

        
    });
});


const divCard = document.querySelectorAll("div");

// teraz chciałam złapać wszystkie divy z id i żeby robiło tak, że jak naleźy do tego samego diva o tym samym id to będzie odkryte


// const pairCards = document.getElementsById("");

