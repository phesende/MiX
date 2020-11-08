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