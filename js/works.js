window.onload = function () {
    // 데이터 배열
    const popUpInfoArray = [
        // 1
        {
            title: "포트폴리오",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 2
        {
            title: "포트폴리오",
            subttitle: "Web | 퍼블리싱 100%",
            description: "그 동안의 작업물들과 제 자신을 소개하기 위한 포트폴리오 페이지입니다..",
            pageThumb: "./images/portfolio.jpg",
            url: "https://sunghoon1209.github.io/portfolio/",
            codeUrl: "https://github.com/sunghoon1209/portfolio/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "Gucci",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/gucci.jpg",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "데브시스터즈",
            subttitle: "Web | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "삼양식품",
            subttitle: "Web | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "ITSIX",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "Petfriends",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "H.point",
            subttitle: "Web | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "Hanhwa Chemical",
            subttitle: "Web | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
      
        {
            title: "Ground X",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "3D Site",
            subttitle: "Web | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "SK Picglobal",
            subttitle: "Web | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        // 1
        {
            title: "Video",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            img: "./images/portfolio.jpg",
            skills: "HTML SCSS JavaScript",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        },
        {
            title: "배틀넷",
            subttitle: "Figma | 디자인 100% 인터렉션 100%",
            description: "Battlent 어플리케이션을 새롭게 디자인하여 Figma로 인터렉션 구현",
            pageThumb: "./images/portfolioN_pc.png",
            url: "https://www.figma.com/proto/4eJQhVwGF52em5G7bdYIwA/%EC%A3%BC%EC%84%B1%ED%9B%88-%EB%B0%B0%ED%8B%80%EB%84%B7-UIUX%EB%94%94%EC%9E%90%EC%9D%B8%ED%8F%89%EA%B0%80?node-id=1-4&t=nVJKIq1j5pa0Tf3q-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=98%3A403",
            codeUrl: "https://www.figma.com/design/4eJQhVwGF52em5G7bdYIwA/%EC%A3%BC%EC%84%B1%ED%9B%88-%EB%B0%B0%ED%8B%80%EB%84%B7-UIUX%EB%94%94%EC%9E%90%EC%9D%B8%ED%8F%89%EA%B0%80?node-id=98-403&t=zgDQvDO4OXigK6Nv-1",
            developVision: "Figma의 사용법과 UIUX에 대한 이해도를 향상하기 위해 제작하였습니다. ",
            img: "./images/portfolio.jpg",
            skills: "Figma",
            feature1st: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.png",
            feature2nd: "Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature2ndImg: "./images/portfolioN_feature.png",
            feedback: "동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임"

        }
    ];

    // 변수설정
    let popUpTitle = document.querySelector('.popup__title');
    let popUpSubtitle = document.querySelector('.popup__subtitle');
    let popUpDes = document.querySelector('.popup__description');
    let popUpThumb = document.querySelector('.popup__page-thumb img');
    let popUpUrlHref = document.querySelector('.popup__url');
    let popUpCodeHref = document.querySelector('.popup__code');
    let popUpVision = document.querySelector('.popup__develop-vision p');
    let popUpSkills = document.querySelector('.popup__skills p');
    let popUpFeature1st = document.querySelector('.popup__features__1st div');
    let popUpFeature1stImg = document.querySelector('.popup__features__1st img');
    let popUpFeature2nd = document.querySelector('.popup__features__2nd div');
    let popUpFeature2ndImg = document.querySelector('.popup__features__2nd img');
    let popUpFeedback = document.querySelector('.popup__feedback p');




    // 현재 인덱스를 추적하는 변수
    let currentIndex = 0;

    // 팝업창 열기
    let works = document.querySelectorAll('.works');
    works.forEach((work, index) => {
        work.addEventListener("click", function () {
            // 현재 인덱스 설정
            currentIndex = index;
            // 팝업창 열기
            let wrapper = document.querySelector('.portfolio__wrapper');
            wrapper.classList.add('portfolio__wrapper--hide');
            // 팝업창 열기
            let popUp = document.querySelector(".popup");
            popUp.classList.add('popup--show');
            // 데이터 설정
            let data = popUpInfoArray[currentIndex];

            // 제목 변경
            popUpTitle.textContent = data.title;
            // 소제목 변경
            popUpSubtitle.textContent = data.subttitle;
            // 한줄 소개
            popUpDes.textContent = data.description;
            // 썸네일
            popUpThumb.setAttribute("src", data.pageThumb);
            // Url href변경
            popUpUrlHref.setAttribute("href", data.url);
            // 코드 다운 url 변경
            popUpCodeHref.setAttribute("href", data.codeUrl);
            // 개발목표
            popUpVision.textContent = data.developVision;
            // 사용기술
            popUpSkills.textContent = data.skills;
            // 첫번째 특징
            popUpFeature1st.textContent = data.feature1st;
            // 첫번째 특징 사진 변경
            popUpFeature1stImg.setAttribute("src", data.feature1stImg);
            // 두번째 특징
            popUpFeature2nd.textContent = data.feature2nd;
            // 두번째 특징 사진 변경
            popUpFeature2ndImg.setAttribute("src", data.feature2ndImg);
            // 개선사항
            popUpFeedback.textContent = data.feedback;
        });
    });

    // 팝업창 닫기
    let popUpClose = document.querySelector('.pop-up__button__list');
    popUpClose.addEventListener("click", function () {
        let wrapper = document.querySelector('.portfolio__wrapper');
        wrapper.classList.remove('portfolio__wrapper--hide');

        let popUp = document.querySelector(".popup");
        popUp.classList.remove('popup--show');
    });

    // next 버튼 누를 때
    let nextBtn = document.querySelector('.pop-up__button__next');
    nextBtn.addEventListener("click", function () {
        // 인덱스를 증가시키고 배열의 길이를 넘으면 0으로
        currentIndex = (currentIndex + 1) % popUpInfoArray.length;

        // 다음 데이터 설정
        let data = popUpInfoArray[currentIndex];

        popUpTitle.textContent = data.title;
            // 소제목 변경
            popUpSubtitle.textContent = data.subttitle;
            // 한줄 소개
            popUpDes.textContent = data.description;
            // 썸네일
            popUpThumb.setAttribute("src", data.pageThumb);
            // Url href변경
            popUpUrlHref.setAttribute("href", data.url);
            // 코드 다운 url 변경
            popUpCodeHref.setAttribute("href", data.codeUrl);
            // 개발목표
            popUpVision.textContent = data.developVision;
            // 사용기술
            popUpSkills.textContent = data.skills;
            // 첫번째 특징
            popUpFeature1st.textContent = data.feature1st;
            // 첫번째 특징 사진 변경
            popUpFeature1stImg.setAttribute("src", data.feature1stImg);
            // 두번째 특징
            popUpFeature2nd.textContent = data.feature2nd;
            // 두번째 특징 사진 변경
            popUpFeature2ndImg.setAttribute("src", data.feature2ndImg);
            // 개선사항
            popUpFeedback.textContent = data.feedback;
    });
};