/* .header__nav-list 를 변수설정해서
.header__nav-list가 
left 0 인 경우 이는 모바일이므로 top값을 0으로 만들고
그 외에 경우에는 태블릿므로 left값을 0으로 만든다.
해당 이벤트는 .header__hbm 를 클릭할때 시작되도록

*/

document.querySelector('.header__hbm').addEventListener('click', function () {

    // 기기의 너비값을 변수로 지정
    let navList = document.querySelector('.header__nav-list');
    let width = window.innerWidth;
    if ( width < 768) {
        navList.style.top = "0";
       
       
    } else {
        navList.style.left = "0";
      
    }
   

    /*
    .header__hbm img 의 src를 변수로 저장
    그 변수가 if ./images/hbm.svg 와 일치하면
    ./images/xbtn.svg으로 변경하고
    */
  
    // 실행
   

    // else 일 경우 src를 ./images/hbm.svg 로 변경후


    
});