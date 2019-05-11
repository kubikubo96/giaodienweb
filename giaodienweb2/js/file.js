// Xử lý background-images của header
$(document).ready(function () {
        $(".dota").click(function () {
            // $(".header").css("background-image","url(\"file:///C:/xampp/htdocs/giaodienweb/giaodienweb2/images/anhbia1_01.jpg\")");
            $(".header").css("background-image","url(\"https://github.com/kubikubo96/giaodienweb/blob/master/giaodienweb2/images/anhbia1_01.jpg?raw=true\")");
            // $(".header").css("background-image","url(\"../images/anhbia1_1.jpg\")");
            $(".dota").css("background-color","#fff");
            $(".dotb").css("background-color","#bbb");
            $(".dotc").css("background-color","#bbb");
        });
        $(".dotb").click(function () {
            // $(".header").css("background-image","url(\"file:///C:/xampp/htdocs/giaodienweb/giaodienweb2/images/anhbia2_01.jpg\")");
            $(".header").css("background-image","url(\"https://github.com/kubikubo96/giaodienweb/blob/master/giaodienweb2/images/anhbia2_01.jpg?raw=true\")");

            $(".dota").css("background-color","#bbb");
            $(".dotb").css("background-color","#fff");
            $(".dotc").css("background-color","#bbb");
        });
        $(".dotc").click(function () {
            // $(".header").css("background-image","url(\"file:///C:/xampp/htdocs/giaodienweb/giaodienweb2/images/anhbia3_03.jpg\")");
            // $(".header").css("background-image","url(\"http://localhost:63342/giaodienweb/giaodienweb2/images/anhbia3_03.jpg\")")
            $(".dota").css("background-color","#bbb");
            $(".dotb").css("background-color","#bbb");
            $(".dotc").css("background-color","#fff");
        });
         // alert($(".header").css("background-image"));
        // alert($(".wapper").css("font-family"));
});