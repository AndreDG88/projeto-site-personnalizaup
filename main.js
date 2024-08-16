// FUNÇÃO PRINCIPAL
$(document).ready(function(){
    // FUNÇÃO SLIDESHOW
    $('#carousel-serviços').slick({
        autoplay:true
    });

    // FUNÇÃO MENU
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
    })
})
