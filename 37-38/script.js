$(document).ready(function () {
    // let flag = true;
    // $('.icon img').click(function () {
    //     if (flag) {
    //         $('.links').css(
    //             {
    //                 left: '35px',
    //                 transition: '5s ease',
    //             }
    //         );
    //     }
    //     else {
    //         $('.links').css(
    //             {
    //                 left: '-550px',
    //                 transition: '5s ease',
                    
    //             }
    //         )
    //     }
    //     flag = !flag;
    // });
    let menu = true;
    $('.menu img').click(function () {
        if (menu) {
            $('.navBar_moby .hidden').show();
        }
        else{
            $('.navBar_moby .hidden').hide();
        }

        menu = !menu;
    });

});