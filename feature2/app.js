const priceElements = document.querySelectorAll('.price');


priceElements.forEach(priceElement =>{
    // nasłuchwanie na kliknęcie dla każdego elemntu
    priceElement.addEventListener('click', (event) => {
        console.log(event.currentTarget.children);

    const children = event.currentTarget.children;

    const hiddenParagraph = children[1];
    // console.log(hiddenParagraph);

    hiddenParagraph.classList.toggle('hidden')
    })
   
}) 


