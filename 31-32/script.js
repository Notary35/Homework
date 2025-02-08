$ (document).ready(function() {
    
    $('.small a').click(function (e) {
        e.preventDefault(); 
    
    if ($('.big img').attr('src') != $(this).attr('href')) {

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }   
    });

    $('.button').click(function () {
        $('.gallery').slideToggle();
        if ($('.button').text() == '+') {
            $('.button').text('-')
        } else {
            $('.button').text('+')
        }
    });

    $('.small a img').mouseover(function () {
        $(this).fadeTo(600, 0.6).css(
            {
                border: '1px dotted red',
            }
        )
    });

    $('.small a img').mouseout(function () {
        $('.small a img').fadeTo(0, 1).css(
            {
                border: 'none',
            });
    });
});