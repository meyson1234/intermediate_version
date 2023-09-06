
window.addEventListener('DOMContentLoaded',()=>{
    function isJsonString(str) {
        try {
            const p = JSON.parse(str).package_version
            
            return p;
        } catch (e) {
            return '';
        }
    }
  
    
    
    const btn = document.querySelector('#buttonTimer'),
          textStatus = document.getElementById("timer");;

    let fetchrequest = false;
    let interval;
    
    const inputNAme = document.querySelector('#nameInp'),
          inputUrl = document.querySelector('#urlInp'),
          NodeVersion = document.querySelector('#NodeVersionInp'),
          inputTime = document.querySelector('#timeInp');
          
    const start = (minu = 300000, text= 'а текст кто будет писать ?',urlinputLoc = 'Нет ссылки! я без ссылки как кот без миски!', vers = '') => {
        console.log(typeof minu)
        console.log(text)
        textStatus.innerHTML = "бегает!";
        textStatus.style.background = 'burlywood'
   
        const now = new Date(),
              version = isJsonString(vers);

        var milliseconds = Math.floor((minu % 1000) / 100),
        seconds = Math.floor((minu / 1000) % 60),
        minutes = Math.floor((minu / (1000 * 60)) % 60);

            interval =  setInterval(function () {
                clearInterval(interval);
                
              
                const url = `https://api.telegram.org/bot6447470353:AAEgx88L_vRqPhi6y_edY0Te1S7aSL6k9yQ/sendMessage?chat_id=-982106318&text=Упал Тест: ${text} %0A %0Aдата и время: ${now} %0A %0AУрл на тест: ${urlinputLoc} %0AВремя ожидания прогона: ${minu} млс ${minutes !== 0?'≈ ' + minutes + ' мин':''} %0A %0AВерсия ноды: ${version}`
                fetch(url);

                textStatus.innerHTML = "провален!";
                textStatus.style.background = '#d36a6a';
                
                inputTime.removeAttribute('disabled');
                inputNAme.removeAttribute('disabled');
                NodeVersion.removeAttribute('disabled');
                inputUrl.removeAttribute('disabled');

                btn.classList.remove('active');
                btn.innerHTML = 'Старт';
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
                  inputTime = document.querySelector('#timeInp'),
                  nodeVersion = document.querySelector('#NodeVersionInp'),
                  inputUrl = document.querySelector('#urlInp');

            if(!btn.classList.contains('active')){

                btn.innerHTML = 'Стоп'
                btn.classList.add('active');
                console.log(inputTime.value,inputNAme.value);

                start(inputTime.value == ''?undefined:inputTime.value,
                      inputNAme.value == ''?undefined:inputNAme.value, 
                      inputUrl.value ==''?undefined:inputUrl.value, 
                      nodeVersion.value == ''?undefined:nodeVersion.value
                );
                
                inputTime.setAttribute('disabled',true);
                inputNAme.setAttribute('disabled',true);
                inputUrl.setAttribute('disabled',true);
                NodeVersion.setAttribute('disabled',true);

                inputTime.value = '';
                inputNAme.value = '';
                inputUrl.value = '';
                NodeVersion.value = '';

                
            } else {
                inputTime.value = '';
                inputNAme.value = '';
                inputUrl.value = '';
                NodeVersion.value = '';

                inputTime.removeAttribute('disabled');
                inputNAme.removeAttribute('disabled');
                inputUrl.removeAttribute('disabled');
                NodeVersion.removeAttribute('disabled');
                btn.innerHTML = 'Старт'
                btn.classList.remove('active');
                stop();
            }
        
            })
})
