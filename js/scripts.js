const play = document.getElementById('button');
let level = 0;

function nextRound() {
    level += 1;
  
    // copy all the elements in the `sequence` array to `nextSequence`
    const nextSequence = [];
    nextSequence.push(nextStep());

  }

play.addEventListener('click', 
           
           function () {

            const screen = document.getElementById('container-number');
            const text = document.querySelector('.time-out');
            text.style.display = 'none'
    
            for (let i = 0; i < 5; i++) {

                const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                console.log(randomNumber);
                const number = document.createElement('span');
                number.classList.add('number');
                number.innerHTML = randomNumber;
                screen.append(number);
                console.log(number);
             
               }

         
                 const seconds = document.querySelector('.seconds');
                 let counter = 10;
                 const timer = setInterval(function () {
                 seconds.innerText = counter ;

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
                const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                for (let i = 1; i <= 5; i++) {

                   
                    const remember = parseInt(prompt('Scrivi in sequenza i numeri che hai visto'));
           
                    if (remember[i] == randomNumber[i]) {

                        alert('hai vinto')
                        
                    } else {
                        alert('hai perso')
                    }
    
       
                }

            
                
              }

              
    

      
           })

        
