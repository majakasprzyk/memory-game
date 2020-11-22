let cookie = document.querySelector("#cookie");
let cookieCounter = 0;
let cookieCounterNode = document.querySelector(".cookie-counter");
function render() {
  if (cookieCounter >= 10) {
    const storeList = document.querySelector(".store__list");
    const cursorBuilding = storeList.children[0];
    cursorBuilding.classList.remove('unavailable')
    const icon = cursorBuilding.children[0]
    icon.classList.replace(
      "store__icon--cursor-unavailable",
      "store__icon--cursor"
    );
    console.log(cursorBuilding);
    const price = cursorBuilding.children[2];
    price.textContent = 10;
    cursorBuilding.addEventListener('click', () => {
      setInterval(() => {
        cookieCounter++
        console.log('hi')
      }, 1000)
    })
  }
}
/*
Do cursorBuilding dodać eventListener,
który na click odpali setInterval,
który co 1 sekundę zwiększa counter ciasteczek :cookie:
*/
cookie.addEventListener("click", () => {
  cookieCounter++;
  cookieCounterNode.textContent = cookieCounter;
  render();
});