export function mobileFunction () {


let LogoHeader = document.querySelector('.logoHeader');
let NavHeader = document.querySelector('.navHeader');
let NavHeaderP = document.querySelectorAll('.navHeader p');

NavHeaderP.forEach(paragraph => {
    paragraph.addEventListener('mousedown', () => {
        paragraph.style.backgroundColor = 'lightgrey';
    });
    paragraph.addEventListener('mouseup', () => {
        paragraph.style.backgroundColor = 'white'
    })
});

LogoHeader.addEventListener('click', () => {

    LogoHeader.classList.toggle('ativo')

    if (LogoHeader.classList.contains('ativo')) {
        NavHeader.style.height = 'auto';
        NavHeader.style.flexDirection = 'column';
        paragraph.style.paddingLeft = '10px';     
    }

    else {
        NavHeader.style.height = '0';
    }
} )




}
