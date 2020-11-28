init();
$(document).ready(function(){

    $('.header__burger').click(function(){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
    function init() {

        if(!isMobile()) {
            document.write('<script  src="source/js/flip.js"></script>');
            
        }
    }
    
    
    function isMobile() {
    
        if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/IEMobile/i))
                return true;
            return false;
    }


$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top - 40 +"px"});
            return false;
    });
});

$(function(){
    $("projects.htmla[href^='#']").click(function(){
            window.location.href = "projects.html";
            var _href = $(this).attr("href");
            console.log(_href);
            $("html, body").animate({scrollTop: $(_href).offset().top - 40 +"px"});
            return false;
    });
});

$(document).ready(function() {
    $('.header__link').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock')
    });
});