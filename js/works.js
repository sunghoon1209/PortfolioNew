window.onload = function() {
        let currentIndex = 0;
        // 팝업창 열기
        let works = document.querySelectorAll('.works');
        works.forEach((work, index) => {
                work.addEventListener("click", function() {
                        // 현재 인덱스 설정
                        currentIndex = index;
                        // 팝업창 열기
                        let wrapper = document.querySelector('.portfolio__wrapper');
                        $('.popup_bg').css("display", "block");
                        wrapper.classList.add('portfolio__wrapper--hide');
                        // 팝업창 열기
                        let popUp = document.querySelector(".popup");
                        popUp.classList.add('popup--show');
                        // 데이터 바인딩          
                        databinding(index);
                });
        });
        //다음버튼
        let nextBtn = document.querySelectorAll('.pop-up__button__next');
        nextBtn.forEach(function(button) {
                button.addEventListener("click", function() {
                        
                        if (currentIndex == 12) {
                                currentIndex = 0;
                        } else {
                                currentIndex = currentIndex + 1;
                        }
                        // 다음 데이터 설정
                        databinding(currentIndex);
                })
        });



};
//팝업창 닫기
$('.pop-up__button__list').on('click', function() {
        $('.popup_bg').css("display", "none");
        let wrapper = document.querySelector('.portfolio__wrapper');
        wrapper.classList.remove('portfolio__wrapper--hide');
        let popUp = document.querySelector(".popup");
        popUp.classList.remove('popup--show');
});
// 배경클릭시 팝업창닫기
$('.popup_bg').on('click', function(e) {
        
        if (e.target == document.querySelector('.popup')) {
                $('.popup_bg').css("display", "none");
                let wrapper = document.querySelector('.portfolio__wrapper');
                wrapper.classList.remove('portfolio__wrapper--hide');
                let popUp = document.querySelector(".popup");
                popUp.classList.remove('popup--show');
        }

});

// json 데이터 바인딩
function databinding(index) {
        $.ajax({
                url: 'js/portfoliodata.json',
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                        let popUpTitle = $('.popup__title');
                        let popUpSubtitle = $('.popup__subtitle');
                        let popUpDes = $('.popup__description');
                        let popUpThumb = $('.popup__page-thumb img');
                        let popUpUrlHref = $('.popup__url');
                        let popUpCodeHref = $('.popup__code');
                        let popUpVision = $('.popup__develop-vision p');
                        let popUpSkills = $('.popup__skills p');
                        let popUpFeature1st = $('.popup__features__1st .popup__features__desc');
                        let popUpFeature1stImg = $('.popup__features__1st img');
                        let popUpFeature2nd = $('.popup__features__2nd .popup__features__desc');
                        let popUpFeature2ndImg = $('.popup__features__2nd img');
                        let popUpFeedback = $('.popup__feedback__1st');
                        let popUpFeedback2nd = $('.popup__feedback__2nd');


                        let item = data[index];

                        popUpTitle.text(item.title);
                        popUpSubtitle.text(item.subttitle);
                        popUpDes.text(item.description);
                        popUpThumb.attr({
                                "src": item.pageThumb,
                                "alt": item.pageTumbAlt
                        });
                        popUpUrlHref.attr("href", item.url);
                        popUpCodeHref.attr("href", item.codeUrl);
                        popUpVision.text(item.develpVision);
                        popUpSkills.text(item.skills);
                        popUpFeature1st.text(item.feature1st);
                        popUpFeature1stImg.attr("src", item.feature1stImg);
                        popUpFeature2nd.text(item.feature2nd);
                        popUpFeature2ndImg.attr("src", item.feature2ndImg);
                        popUpFeedback.text(item.feedback);
                        popUpFeedback2nd.text(item.feedback2nd);



                }

        });
};
