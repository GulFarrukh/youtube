let card = document.querySelector(".card");

card.addEventListener("click", ()=> {
   card.classList.toggle("is-flipped");
   console.log("clard has ben fliped", card);
});