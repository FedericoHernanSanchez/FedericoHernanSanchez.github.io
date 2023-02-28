
const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');



buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});



function cambiarTexto(){
    hideText.classList.toggle('showText');

    if(hideText.classList.contains('showText')){
        hideText.innerHTML = 'Ocultar';
    } else{
        hideText.innerHTML = 'Info';
    }
}