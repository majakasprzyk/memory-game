const memoryCard = document.querySelector(".memory-card");
const backCard = document.querySelector(".back-card");

memoryCard.addEventListener('click', (event) => {
    const card = event.currentTarget.children[0];

    if (card.classList.contains('back-card')){
        card.classList.replace('back-card', 'front-card');
    }
    else{
        card.classList.replace('front-card', 'back-card');
    }
});
