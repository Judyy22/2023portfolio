//디자인 overlay
function updateOverlayHeight() {
    const overlay = $(".overlay");
    const overlay2 = $(".overlay2");
    const overlay3 = $(".overlay3");
    const bannerImages = $(".bannerimg");

    if (overlay && overlay2) {
        const overlayWidth = overlay.width();
        overlay2.css("height", overlayWidth);
    }

    // "bannerimg" 클래스를 가진 이미지의 높이 출력

    if (bannerImages) {
        bannerImages.each(function () {
            const imgHeight = $(this).height();
            console.log("Image Height: " + imgHeight + "px");
            overlay3.css("height", imgHeight);
        });
    }
}

(function ($) {
    ("use strict");

    document
        .getElementsByTagName("body")[0]
        .addEventListener("mousemove", function (n) {
            (t.style.left = n.clientX + "px"),
                (t.style.top = n.clientY + "px"),
                (e.style.left = n.clientX + "px"),
                (e.style.top = n.clientY + "px"),
                (i.style.left = n.clientX + "px"),
                (i.style.top = n.clientY + "px");
        });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover");
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover");
    }
    s();
    for (
        var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
        a >= 0;
        a--
    ) {
        o(r[a]);
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
    }

    // 페이지 로딩 시 세션 스토리지에서 클래스를 가져와서 적용
    var currentPageClass = sessionStorage.getItem("currentPageClass");
    if (currentPageClass) {
        $("body").addClass(currentPageClass);
    }
    sessionStorage.removeItem("currentPageClass");

    //About page

    $(".about-text").on("click", function () {
        $("body").addClass("about-on");
    });
    $(".about-close").on("click", function () {
        $("body").removeClass("about-on");
    });

    //Contact page

    $(".contact-text").on("click", function () {
        $("body").addClass("contact-on");
    });
    $(".contact-close").on("click", function () {
        $("body").removeClass("contact-on");
    });

    //travel portfolio page

    $(".html").on("click", function () {
        $("body").addClass("html-on");
    });
    $(".html-close").on("click", function () {
        $("body").removeClass("html-on");
    });

    //Wildlife portfolio page

    $(".wildlife").on("click", function () {
        $("body").addClass("wildlife-on");
    });
    $(".wildlife-close").on("click", function () {
        $("body").removeClass("wildlife-on");
    });

    //Nature portfolio page

    $(".design").on("click", function () {
        $("body").addClass("design-on");
    });
    $(".design-close").on("click", function () {
        $("body").removeClass("design-on");
    });

    //html css js page
    $("#yhtour, #portfolio").on("click", function () {
        console.log("click");
        // "yhtour, portfolio" 페이지의 아이디를 갖는 요소를 클릭한 경우에만 "html-on" 클래스 저장
        if (
            $(this).attr("id") === "yhtour" ||
            $(this).attr("id") === "portfolio"
        ) {
            sessionStorage.setItem("currentPageClass", "html-on");
        }

        // 페이지 이동
        window.location.href = "/index.html";
    });

    //react page
    $("#netflix, #woodus").on("click", function () {
        console.log("click");
        // "netflix, woodus" 페이지의 아이디를 갖는 요소를 클릭한 경우에만 "html-on" 클래스 저장
        if (
            $(this).attr("id") === "netflix" ||
            $(this).attr("id") === "woodus"
        ) {
            sessionStorage.setItem("currentPageClass", "wildlife-on");
        }

        // 페이지 이동
        window.location.href = "/index.html";
    });

    // 페이지 로딩 시 세션 스토리지에서 클래스를 가져와서 적용
    var currentPageClass = sessionStorage.getItem("currentPageClass");
    if (currentPageClass) {
        $("body").addClass(currentPageClass);
    }

    sessionStorage.removeItem("currentPageClass");

    //초기 업데이트
    updateOverlayHeight();

    //크기 변경시 업데이트
    $(window).on("resize", function () {
        updateOverlayHeight();
    });

    $(".design-section img").mouseenter(function () {
        // 이미지에 마우스 올렸을 때 나타남
        $(this).siblings(".overlay").show();
    });
    $(".overlay").mouseleave(function () {
        // overlay에서 마우스가 나갔을 때 숨김
        $(this).hide();
    });
})(jQuery);
