export function scriptMainMobile() {

    // window.addEventListener('load', () => {
    //     window.alert('Olá!\nQue bom que você veio!\nAgradecemos a sua visita!\nEsperamos que goste desse tour virtual!');
    // });
    
    
    let FaqLi = document.querySelectorAll('.FAQLi');
    let FaqLiP = document.querySelectorAll('.FAQLiP p');
    let FAQLiP = document.querySelectorAll('.FAQLiP');
    let DownArrow = document.querySelectorAll('.FAQLi img');
    let LiFaqLi = document.querySelectorAll('.FAQLi li')

    FaqLi.forEach((EachFaqLi, index) => {
        EachFaqLi.addEventListener('click', () => {
            EachFaqLi.classList.toggle('ativo');
            if (EachFaqLi.classList.contains('ativo')) {
                FAQLiP[index].style.backgroundColor = 'lightcyan'
                LiFaqLi[index].style.fontWeight = '600';
                FaqLiP[index].style.visibility = 'visible';
                FaqLiP[index].style.height = 'auto';
                FaqLiP[index].style.paddingLeft = '20px'
                FaqLiP[index].style.paddingRight = '20px'
                FaqLiP[index].style.paddingTop = '10px';
                DownArrow[index].style.transform = 'rotate(180deg)';
                DownArrow[index].style.transition = '0.3s all linear';

            }
            else {
                FAQLiP[index].style.backgroundColor = 'white'
                LiFaqLi[index].style.fontWeight = '400';
                FaqLiP[index].style.visibility = 'hidden';
                FaqLiP[index].style.height = '0';
                DownArrow[index].style.transform = 'rotateX(360deg)';

            }
        });
    });

}