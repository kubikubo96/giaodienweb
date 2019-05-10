// xử lý ảnh cho content4

$(document).ready(function () {
   $('#anh1').hover(function () {
       $('.content4 .c4-left img[name="bcxanh3"]').css("display","block");
       $('.content4 .c4-left img[name="tamgiac3"]').css("display","block");
       $('.content4 .c4-left img[name="bcxanh1"]').css("display","none");
       $('.content4 .c4-left img[name="tamgiac1"]').css("display","none");
       $('.content4 .c4-left img[name="bcxanh2"]').css("display","none");
       $('.content4 .c4-left img[name="tamgiac2"]').css("display","none");
   });
    $('#anh3').hover(function () {
        $('.content4 .c4-left img[name="bcxanh3"]').css("display","none");
        $('.content4 .c4-left img[name="tamgiac3"]').css("display","none");
        $('.content4 .c4-left img[name="bcxanh1"]').css("display","block");
        $('.content4 .c4-left img[name="tamgiac1"]').css("display","block");
        $('.content4 .c4-left img[name="bcxanh2"]').css("display","none");
        $('.content4 .c4-left img[name="tamgiac2"]').css("display","none");
    });
    $('#anh4').hover(function () {
        $('.content4 .c4-left img[name="bcxanh3"]').css("display","none");
        $('.content4 .c4-left img[name="tamgiac3"]').css("display","none");
        $('.content4 .c4-left img[name="bcxanh1"]').css("display","none");
        $('.content4 .c4-left img[name="tamgiac1"]').css("display","none");
        $('.content4 .c4-left img[name="bcxanh2"]').css("display","block");
        $('.content4 .c4-left img[name="tamgiac2"]').css("display","block");
    });
});