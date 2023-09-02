

// var div = document.querySelector('div');

// var start = 100;

// function step(timestamp) {
//     // var progress = timestamp - start;
//     setTimeout(() => {
//         document.getElementById("timer").innerHTML = minute + ":" + sec;
//         console.log('sec: '+ sec);
//         document.getElementById("timer").innerHTML = minute + ":" + sec;
//          sec--;
//         if (sec == 0) {
//               if (minute == 0 && sec == 0) {
//                    clearInterval(interval);
    
//                    const inputNAme = document.querySelector('#nameInp'),
//                    inputTime = document.querySelector('#timeInp');
//                    inputTime.removeAttribute('disabled');
//                    inputNAme.removeAttribute('disabled');
//                    btn.innerHTML = 'Старт'
//                    btn.classList.remove('active');
    
//                    fetch("https://api.telegram.org/bot6447470353:AAEgx88L_vRqPhi6y_edY0Te1S7aSL6k9yQ/sendMessage?chat_id=6377248808&text="+text);
//                    return document.getElementById("timer").innerHTML = "стоп";
//                 }
//              sec = 60;
//              minute--;
//         }
//     }, 1000);
//     // a = Math.min(progress/10, 20000) + "px";

    
//     if (progress < 20000) {
//       requestAnimationFrame(step);
//     }
// }

// requestAnimationFrame(step)


window.addEventListener('DOMContentLoaded',()=>{

    const btn = document.querySelector('#buttonTimer'),
          textStatus = document.getElementById("timer");;

    let fetchrequest = false;
    let interval;

    const start = (minu = 300000, text= 'долбаеб а текст кто будет писать ?') => {
        console.log(typeof minu)
        console.log(text)
        textStatus.innerHTML = "бегает!";
        textStatus.style.background = 'burlywood'
        // var minute = minu,
        //     sec = 120;
        const inputNAme = document.querySelector('#nameInp'),
              inputTime = document.querySelector('#timeInp');
            interval =  setInterval(function () {
                clearInterval(interval);
                const url = `https://api.telegram.org/bot6447470353:AAEgx88L_vRqPhi6y_edY0Te1S7aSL6k9yQ/sendMessage?chat_id=6377248808&text=${text}`
                fetch(url);
                textStatus.innerHTML = "провален!";
                textStatus.style.background = '#d36a6a'
                inputTime.removeAttribute('disabled');
                inputNAme.removeAttribute('disabled');
            },minu)

        }

        const stop = () => {
            clearInterval(interval);
            textStatus.innerHTML = "успешно!";
            textStatus.style.background = '#2aa568'
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e);
            const inputNAme = document.querySelector('#nameInp'),
                  inputTime = document.querySelector('#timeInp');
            if(!btn.classList.contains('active')){

                btn.innerHTML = 'Стоп'
                btn.classList.add('active');
                console.log(inputTime.value,inputNAme.value)
                start(inputTime.value == ''?undefined:inputTime.value,inputNAme.value == ''?undefined:inputNAme.value);

                inputTime.value = '';
                inputNAme.value = '';
                inputTime.setAttribute('disabled',true);
                inputNAme.setAttribute('disabled',true);

                
            } else {
                inputTime.value = '';
                inputNAme.value = '';
                inputTime.removeAttribute('disabled');
                inputNAme.removeAttribute('disabled');
                btn.innerHTML = 'Старт'
                btn.classList.remove('active');
                stop();
            }
        
            })
})




// btn.addEventListener('click', () => {
    // fetch("https://api.telegram.org/bot6447470353:AAEgx88L_vRqPhi6y_edY0Te1S7aSL6k9yQ/sendMessage?chat_id=6377248808&text=привет");
// })

                // console.log('sec: '+ sec);
                    // document.getElementById("timer").innerHTML = minute + ":" + sec;
                    //  sec--;
                    // if (sec == 0) {
                    //       if (minute == 0 && sec == 0) {
                    //            clearInterval(interval);
                
                    //            const inputNAme = document.querySelector('#nameInp'),
                    //            inputTime = document.querySelector('#timeInp');
                    //            inputTime.removeAttribute('disabled');
                    //            inputNAme.removeAttribute('disabled');
                    //            btn.innerHTML = 'Старт'
                    //            btn.classList.remove('active');
                
                    //            return document.getElementById("timer").innerHTML = "стоп";
                    //         }
                    //     //  sec = 60;
                    //     //  minute--;
                    // }