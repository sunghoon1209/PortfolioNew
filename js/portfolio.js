/* 함수를 만들어야함
function popUpOpen (){
    let popUp = document
};
*/

function popUpOpen(){
    let popUp = document.querySelector(".pop-up__wrapper");
    
  
    popUp.classList.add('pop-up__wrapper__show');
};
function popUpClose(){
    let popUp = document.querySelector(".pop-up__wrapper");
    popUp.classList.remove('pop-up__wrapper__show');
};