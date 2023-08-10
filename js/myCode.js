const FORMU = document.getElementById('form');
const RATING_SECTION = document.querySelector('.rating-section');
const SUBMIT_BTN = document.getElementById('Btn');
const RATING = document.getElementById('rating');
let NUMBERS = document.querySelectorAll('.numbers');

//--------------------------------------------------------------

SUBMIT_BTN.addEventListener("click", function(e) {
    event.preventDefault();
    RATING_SECTION.classList.remove("to-hidde");
    FORMU.style.display = "none";
});

NUMBERS.forEach((num) => {
    num.addEventListener("click", () => {
        RATING.innerHTML = num.value;
    })
});