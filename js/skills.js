/* 버튼 */
function buttonClick(event) {
    let button = event.target;
    let skillsItems = document.querySelectorAll('.skills__item');
    let toolsItems = document.querySelectorAll('.tools__item');

    if (button.classList.contains('skills__button-skills')) {
        skillsItems.forEach(item => item.style.display = "flex");
        toolsItems.forEach(item => item.style.display = "none");;

    } else {
        skillsItems.forEach(item => item.style.display = "none");
        toolsItems.forEach(item => item.style.display = "flex");


    };

};

