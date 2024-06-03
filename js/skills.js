// header 영역 관련된 스크립트

// 현재 열린 페이지 확인후 해당 li안 a태그의 색과 크기 변경
let currentPage = document.querySelector('.header__nav__pc ul li:nth-child(3) a');
currentPage.classList.add("header__nav-list__pc-checked");

// document.addEventListener('DOMContentLoaded', function() {
//     /* nav.header__nav__pc의 ul li의 a 태그 마우스가 올라가면 이벤트 실행
//     해당 노드가 header__nav-list__pc-checked 를 가지고 있는지 확인
//     yes => 반응없음
//     no =>
//         형제들 중에 header__nav-list__pc-checked 있는지 확인 후 제거; 
//         this에 header__nav-list__pc-checked 추가
//     마우스 이탈시 원래대로


// 중요
document.querySelectorAll('.header__nav__pc ul li a').forEach(item => {
    item.addEventListener('mouseover', function () {
        // 현재 노드가 header__nav-list__pc-checked 클래스를 가지고 있는지 확인
        if (!this.classList.contains('header__nav-list__pc-checked')) {
            // 형제 요소들 중에 header__nav-list__pc-checked 클래스를 가진 요소가 있는지 확인 후 제거
            document.querySelectorAll('.header__nav__pc ul li a.header__nav-list__pc-checked').forEach(sibling => {
                sibling.classList.remove('header__nav-list__pc-checked');
            });
            // this에 header__nav-list__pc-checked 클래스 추가
            this.classList.add('header__nav-list__pc-checked');
        }
    });
});


// 반응형에서 해당 상위 작업
let currentPageMobile = document.querySelector('.header__nav-list ul li:nth-child(3) a');
currentPageMobile.classList.add("header__nav-list__mobile-checked");

// document.addEventListener('DOMContentLoaded', function() {
//     /* nav.header__nav__pc의 ul li의 a 태그 마우스가 올라가면 이벤트 실행
//     해당 노드가 header__nav-list__pc-checked 를 가지고 있는지 확인
//     yes => 반응없음
//     no =>
//         형제들 중에 header__nav-list__pc-checked 있는지 확인 후 제거; 
//         this에 header__nav-list__pc-checked 추가
//     마우스 이탈시 원래대로

/* 
// 버튼 클릭시 
skills 버튼 클릭시
 
 function buttonClick () {}
  클래스에 skills__button-skills 을 갖고 있는 지 확인 후
  갖고 있으면 
  "skills__item" style. display="block"
  "tools__item" style.display="none"

  그렇지 않으면
    "skills__item" style. display="none"
  "tools__item" style.display="block"

*/
/* 버튼 */
function buttonClick(event) {
    let button = event.target;
    let skillsItems = document.querySelectorAll('.skills__item');
    let toolsItems = document.querySelectorAll('.tools__item');

    if (button.classList.contains('skills__button-skills'))
        {
            skillsItems.forEach(item=> item.style.display="flex");
            toolsItems.forEach(item=> item.style.display="none");
            ;

        }
    else{
        skillsItems.forEach(item=> item.style.display="none");
        toolsItems.forEach(item=> item.style.display="flex");
      

    };
    
};

