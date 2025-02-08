$(document).ready(function () {

    // $(function () {
    //     $('.forms :checkbox').fadeOut(3000);
    //     $('.forms :checkbox').fadeIn(3000);
    //     // $('forms span').fadeOut(3000);
    // })

    // $('.forms :selected').remove();

    // $('.forms :submit').click(function (e) {
    //     e.preventDefault();

    //     // alert($('textarea').val());

    //     // let b = $('.forms :selected').val();
    //     // alert(b);

    //     let k = '';

    //     $(':checkbox:checked').each(function () {
    //         k += $(this).val() + '  ';
    //         console.log(k);
    //     })
    // });

    // $(function () {
    //     $('form').submit(function (e) {
    //         e.preventDefault();
    //         if ($('.text1').val() == "" || $('.text2').val() == "" ) {
    //             alert('Вы не заполнили поля');
    //         }
    //         else {
    //             alert('Форма отправлена');
    //         }
    //     });
    // })

        // $('.text1').focusin(function () {
        //     $(this).css({
        //         'background': 'DodgerBlue',
        //     })
        // })
        // $('.text1').focusOut(function () {
        //     $(this).css({
        //         'border': '1px solid black',
        //         'background': 'white',
        //     })
        // })

    // $(function () {
    //     $(':submit').click(function (e) {
    //         $('.text2').attr('disabled', 'disabled');
    //         e.preventDefault();
    //     })

    //     $(':submit').click(function (e) {
    //         $('.text2').removeAttr('disabled');
    //         e.preventDefault();
    //     })
    // })

    // $(function () {
    //     $(':submit').click(function (e) {
    //         e.preventDefault();
    //         if ($('.text1').val() != "") {
    //             $('.text1').attr('disabled', 'disabled');
    //             alert('Вы заполнили это поле!');
    //         }
    //         else {
    //             alert('Вы НЕ заполнили это поле!');
    //         }
    //     })
    // })

//     $(function () {
//         $('.but').click(function (e) {
//         e.preventDefault();

//         if ($('.text_newl')).val() != "" && $('.text_new2').val() != "" && $('.text_new3').val() != "")


//         {
//         $('.text_newl').attr('disabled', 'disabled');
//         $('.text_new2').attr('disabled', 'disabled');
//         $('.text_new3').attr('disabled', 'disabled');
//         alert('Вы заполнили ВСЕ поля!');

//         console.log( $('.text_newl').val(), $('.text_new2').val(), $('.text_new3').val() );
//         }


//         else {
//             alert('Вы заполнили не все поля!');
//         }


//     })
// })

    // $(function () {
    //     $('.but').click(function (e) {
    //         e.preventDefault();

    //         if ($('.text_new1').val() != "" && $('.text_new2').val() != "" && $('.text_new3').val() != "")
            
    //         {
    //             $('.text_newl').attr('disabled', 'disabled');
    //             $('.text_new2').attr('disabled', 'disabled');
    //             $('.text_new3').attr('disabled', 'disabled');
    //             alert('Вы заполнили все поля!')

    //             console.log( $('.text_newl').val(), $('.text_new2').val(), $('.text_new3').val() );
    //         }
    //         else {
    //             alert('Вы заполнили не все поля!');
    //         }
    //     })
    // })

    $('.inp_four').mask(" +7 (999) 999-99-99");

})