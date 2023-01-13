const play = document.getElementById('button');
let randomNumbers = [];

play.addEventListener('click', function () {

    const text = document.querySelector('.time-out');
    const screen = document.getElementById('container-number');
    text.style.display = 'none';


    // Generate 5 random numbers
    for (let i = 0; i < 5; i++) {

        const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        randomNumbers.push(randomNumber);
        const number = document.createElement('span');
        number.classList.add('number');
        number.innerHTML = randomNumber;
        screen.append(number);
    }

    const seconds = document.querySelector('.seconds');
    let counter = 30;
    const timer = setInterval(function () {
        seconds.innerText = counter;


        if ( counter == 0) {

                
          clearInterval(timer);
          screen.style.display = 'none';
          text.style.display = 'block';
          text.innerHTML = 'Tempo Scaduto';
          seconds.innerText = '00' ;
          setTimeout(response, 3000);
         
         } 

         if (counter <= 9) {

           seconds.innerText = '0' + counter-- ; 

         } else {

          console.log(counter);
          counter--;

         }
      
     }, 1000);

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
   
      
      
    }


});

restart();

// function restart() {

//     randomNumbers = [];
//     text.innerHTML = 'Hai 30 secondi';
//     text.style.display = 'block';
//     screen.innerHTML = '';
//     screen.style.display = 'block';
//     seconds.innerText = '30';

//     } da rivedere
    
