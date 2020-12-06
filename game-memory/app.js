const memoryCards = document.querySelectorAll(".memory-card");
const backCard = document.querySelector(".back-card");


memoryCards.forEach(memoryCard =>{
    memoryCard.addEventListener('click', (event) => {
        const card = event.currentTarget.children[0];
    console.log(event.currentTarget.children);
    console.log(event.target.children);

        if (card.classList.contains('back-card')){
            card.classList.replace('back-card', 'front-card');
        }
        else{
            card.classList.replace('front-card', 'back-card');
        }
    });
});


const divCard = document.querySelectorAll("div");

// teraz chciałam złapać wszystkie divy z id i żeby robiło tak, że jak naleźy do tego samego diva o tym samym id to będzie odkryte