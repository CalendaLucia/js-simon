

const play = document.getElementById('button');


play.addEventListener('click', 
           
           function () {

            const screen = document.getElementById('container-number');
            const text = document.querySelector('.time-out');
            text.style.display = 'none'
    
            for (let i = 0; i < 5; i++) {

                const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                console.log(randomNumber)
                const number = document.createElement('span');
                number.classList.add('number')
                number.innerHTML = randomNumber
                screen.append(number);
                console.log(number);
             
               }

         
               const seconds = document.querySelector('.seconds');
         
             
               let counter = 30;
               const timer = setInterval(function () {
                seconds.innerText = counter ;

                   if ( counter == 0) {

                    clearInterval(timer);
                    screen.style.display = 'none';
                    text.style.display = 'block';
                    text.innerHTML = 'Tempo Scaduto';
    
                 
                   } else {

                    console.log(counter);
                    counter--;

                   }
                
               }, 1000);
    
    
          
            
            
      
           })

        
