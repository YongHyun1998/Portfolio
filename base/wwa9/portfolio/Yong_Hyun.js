$(document).ready(function() {
    // 로드
    $("#load").fadeOut(1000);
    $('body').removeClass('on')

    
    // top버튼 
    $('#top-button').hide();
    var iChart = 0;
    $(function () {
        $(window).scroll(function () {
            // top버튼 나타내거나 숨기기
            if ($(this).scrollTop() >= $('#Portfolio-web').offset().top) {
                $('#top-button').fadeIn();
            } else {
                $('#top-button').fadeOut();
            }
            // 차트 1.5s 뒤 실행
            
                if ($(this).scrollTop() >= $('#About').offset().top) {
                    if (iChart === 0) {
                        setTimeout(function() {
                            chart1(); //차트 전체
                            iChart++;
                        }, 1500 );
                    }
                }
            
                
        });

        // 클릭시 최상단으로 이동
        $('#getBackTop_up').click(function () {
            $('html,body').animate({      
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

    new TypeIt("#companionMethods", {
        speed: 60,
        waitUntilVisible: true,
    })
        .type("안녕하세요.", { delay: 200 })
        .break({ delay: 300 })
        .type("웹디자인,웹퍼블리셔", { delay: 200 })
        .move(-5)
        .delete(1)
        .type("&")
        .move(null, { to: "END" })
        .break({ delay: 300 })
        .type('<strong>김용현의 포트폴리오</strong>&nbsp;', {
            speed: 100,
        })
        .type(" 입니다.")
        .go();

    // #main으로 이동
    $('.nav1').click(function () {
        $('html,body').animate({
            scrollTop: $('#main').offset().top
        }, 1000);
    });
    // #About으로 이동
    $('.nav2').click(function () {
        $('html,body').animate({
            scrollTop: $('#About').offset().top
        }, 1000);
    });
    // #portfolio-web으로 이동
    $('.nav3').click(function () {
        $('html,body').animate({
            scrollTop: $('#Portfolio-web').offset().top
        }, 1000);
    });
    // #Portfolio-Etc으로 이동
    $('.nav4').click(function () {
        $('html,body').animate({
            scrollTop: $('#Portfolio-etc').offset().top
        }, 1000);
    });
    // #Contact으로 이동
    $('.nav5').click(function () {
        $('html,body').animate({
            scrollTop: $('#Contact').offset().top
        }, 1000);
    });
    // 스크롤 #About으로 이동
    $('.section6').click(function () {
        $('html,body').animate({
            scrollTop: $('#About').offset().top
        }, 800);
    });

    
    function chart1() {
        new Chart(document.getElementById("myChartOne").getContext('2d'), {
            type: "doughnut", // 차트의 형태
            data: { //차트에 들어갈 데이터
                datasets: [{
                    data: [90, 10],
                    backgroundColor: [
                        "#fc490b",
                        "white",
                    ],
                    borderWidth: 0, //경계선 굵기
                    scaleBeginAtZero: true,
                    hoverOffset: -10,
                }],
            },
            options: {
                responsive: false, //false시 원하는 크기로 수정
                cutout: "80%",
                
            }
        });
    
        new Chart(document.getElementById("myChartTwo").getContext('2d'), {
            type: "doughnut", // 차트의 형태
            data: { //차트에 들어갈 데이터
                datasets: [{
                    data: [90, 10],
                    backgroundColor: [
                        "#2196f3",
                        "white",
                    ],
                    borderWidth: 0, //경계선 굵기
                    scaleBeginAtZero: true,
                    hoverOffset: -10,
                }],
            },
            options: {
                responsive: false, //false시 원하는 크기로 수정
                cutout: "80%",
                
            }
    
        });
        
        new Chart(document.getElementById("myChartThree").getContext('2d'), {
            type: "doughnut", // 차트의 형태
            data: { //차트에 들어갈 데이터
                datasets: [{
                    data: [60, 40],
                    backgroundColor: [
                        "#ffda3e",
                        "white",
                    ],
                    borderWidth: 0, //경계선 굵기
                    scaleBeginAtZero: true,
                    hoverOffset: -10,
                }],
            },
            options: {
                responsive: false, //false시 원하는 크기로 수정
                cutout: "80%",
                
            }
        });
        
        new Chart(document.getElementById("myChartFour").getContext('2d'), {
            type: "doughnut", // 차트의 형태
            data: { //차트에 들어갈 데이터
                datasets: [{
                    data: [60, 40],
                    backgroundColor: [
                        "#193556",
                        "white",
                    ],
                    borderWidth: 0, //경계선 굵기
                    scaleBeginAtZero: true,
                    hoverOffset: -10,
                }],
            },
            options: {
                responsive: false, //false시 원하는 크기로 수정
                cutout: "80%",
                
            }
        });
    
        new Chart(document.getElementById("myChartFive").getContext('2d'), {
            type: "doughnut", // 차트의 형태
            data: { //차트에 들어갈 데이터
                datasets: [{
                    data: [80, 20],
                    backgroundColor: [
                        "#01b4dd",
                        "white",
                    ],
                    borderWidth: 0, //경계선 굵기
                    scaleBeginAtZero: true,
                    hoverOffset: -10,
                }],
            },
            options: {
                responsive: false, //false시 원하는 크기로 수정
                cutout: "80%",
            }
        });
    
        new Chart(document.getElementById("myChartSix").getContext('2d'), {
            type: "doughnut", // 차트의 형태
            data: { //차트에 들어갈 데이터
                datasets: [{
                    data: [85, 15],
                    backgroundColor: [
                        "#ff7f18",
                        "white",
                    ],
                    borderWidth: 0, //경계선 굵기
                    scaleBeginAtZero: true,
                    hoverOffset: -10,
                }],
            },
            options: {
                responsive: false, //false시 원하는 크기로 수정
                cutout: "80%",
            }
        });
    }

    // AOS 
    AOS.init();

    const s1 = new Swiper('.swiper1', { //.swiper1로 이름설정
        // Optional parameters
        // direction: 'vertical', //수직 수평
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper1 .swiper-pagination', //pagination ''값 페이지 표시줄
            clickable: true, //클릭시 그페이지로 이동
        },

        // 슬라이더 자동 이동
        autoplay: {
            // delay: 1000,  //시간이 지나면(delay: '') 이동
            disableOnInteraction: 'ture', //이동버튼을 누르면 자동이동 멈춤
            pauseOnMouseEnter: 'ture', //슬라이더안에 마우스를 올리면 멈춤
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper1 .swiper-button-next',
            prevEl: '.swiper1 .swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper1 .swiper-scrollbar',
        },
    });

});

$(window).on('scroll',function() {
    if ($(window).scrollTop()) {
        $('#header').addClass('active');
    } else {
        $('#header').removeClass('active');
    } 
});
$(window).on('scroll', function(){
    if($(window).scrollTop() >= 500) {
        $('#header').addClass('active'); //클래스 추가
    } else { // 스크롤 올릴 때
        $('#header').removeClass('active'); //클래스 제거
    }
});

