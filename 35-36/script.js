$(document).ready(function () {
    $('.button').click(function () {
        $('.overlay').fadeIn();
    });

    $('.close-popup img').click(function () {
        $('.overlay').fadeOut();
    });

    $(document).mouseup(function () {
        $('.overlay').fadeOut();
    });

    $(window).on('load', function () {
        setTimeout(function () {
            if ($('.overlay').hasClass('disabled')) {
                return false;
            }
            else {
                $(".overlay").fadeIn();
            }
        }, 5000);
    });

    $('.img_auto').click(function (){
        $('.overlay_new').show();
    });

    $('.close-popup_new').click(function () {
        $('.overlay_new').hide();
    });

    $('.but').click(function (e) {
        e.preventDefault();
        if ($('.log input').val() == 'test' && $('.pas input').val()== 'test'){
            alert('Авторизацияя пройдена успешно!');
            if ($('.log input').val() != '') {
                $('.log input').val('')}
            if ($('.pas input').val() != '') {
                $('.pas input').val('')}
            $('.overley_new').fadeOut();
        }
        else {
            alert('Вы указали неверные данные!');
            if ($('.log input').val() != '') {
                $('.log input').val('')}
            if ($('.pas input').val() != '') {
                $('.pas input').val('')}
        }
    })

    $('.btn').click(function (e) {
        e.preventDefault();
        $('.auto').show();
    });

    $('.close-auto').click(function () {
        $('.auto').hide();
        $('.overlay_new').hide();
    });
});