const play = document.getElementById('button');
let randomNumbers = [];
const text = document.querySelector('.time-out');
const screen = document.getElementById('container-number');
const seconds = document.querySelector('.seconds');

function startGame() {

    // Reinizializza l'array prima di generare nuovi numeri casuali
    randomNumbers = [];
    // Clear the screen before creating new elements
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    // Generate 5 random numbers
    for (let i = 0; i < 5; i++) {

        const randomNumber = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        randomNumbers.push(randomNumber);
        const number = document.createElement('span');
        number.classList.add('number');
        number.innerHTML = randomNumber;
        number.style.display = 'block';
        screen.append(number);
    }

    const numbers = document.querySelectorAll('.number');
    setTimeout(function() {
      for (let i = 0; i < numbers.length; i++) {
        numbers[i].style.display = 'none';
      }
    }, 30000);

    text.style.display = 'none';
    let counter = 30;
    const timer = setInterval(function () {

        seconds.innerText = counter;

        if ( counter == 0) {

            clearInterval(timer);
            text.style.display = 'block';
            text.innerHTML = 'Tempo Scaduto';
            seconds.innerText = '00' ;
            hideNumber() 
            setTimeout(response, 3000);
   
        } 

        if (counter <= 9) {

            seconds.innerText = '0' + counter-- ; 

        } else {

           counter--;
        }
    }, 1000);

}

function response() {
    
    let correctNumbers = 0;
    let correctNumbersList = [];
 

    for (let i = 0; i < 5; i++) {

        const remember = parseInt(prompt('Scrivi in sequenza i numeri che hai visto'));

        if (remember === randomNumbers[i]) {
            correctNumbers++;
            correctNumbersList.push(remember);
        }
    }
    
    text.innerHTML = 'Hai indovinato ' + correctNumbers + ' numeri: ' + correctNumbersList;
    play.innerHTML = 'Rigioca';
    play.removeEventListener('click', startGame);
    play.addEventListener('click', restartGame);
}


    function restartGame() {
        play.innerHTML = 'Gioca';
        play.removeEventListener('click', restartGame);
        play.addEventListener('click', startGame);
        startGame();
    }

    function hideNumber() {
        const numbers = document.querySelectorAll('.number');
        for (let i = 0; i < numbers.length; i++) {
            
            numbers[i].style.display = 'none';
        }
    }

    play.addEventListener('click', startGame);

   