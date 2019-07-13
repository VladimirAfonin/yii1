$('.fa-close, .fa-save, .fa-info-circle, .fa-trash, .fa-edit').tooltip();

$.ajax({
    url: 'http://people.loc/user/1',
//            dataType: 'json',
    type: 'GET',
//            data: {nick_name: 'Vladimir 3'},
    success: function(res) {
        console.log(res);
        if(res) {
            var user = res;
            $('#firstname-1').html(res['first_name']);
            $('#middlename-1').html(res['middle_name']);
            $('#lastname-1').html(res['last_name']);
            $('#nickname-1').html(res['nick_name']);
            $('#aboutme-1').html(res['about_me']);
            $('#relation-1').html(res['relation_status']);
            $('#keywords').html(res['keywords']);
            $('.userid-view').html(res['user_login']);

            var date_birth_timestamp = res['date_birth'];

            var date_form = new Date(date_birth_timestamp*1000).toLocaleDateString();
            var new_date = date_form.split('/');

            $('#b-date-1').html(new_date[1]);
            $('#b-year-1').html(new_date[2]);

            const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            $('#b-month-1').html(months[new_date[0] - 1]);

        }


    },
    error: function(res) {
        console.log(res);
    },
});

// nickname
$('#nickname-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#nickname-close').addClass('active');
    $('#nickname-info, #nickname-edit').addClass('hidden');
    $('.nickname-edit, #nickname-save, #nickname-close').removeClass('hidden');
    $('#nickname-trash, #nickname-close').css('opacity', 1);
});
$('#nickname-close').on('click', function(e){
    $('#nickname-close').removeClass('active');
    $('.nickname-edit, #nickname-close, #nickname-save').addClass('hidden');
    $('#nickname-edit, #nickname-info').removeClass('hidden');
    $('#nickname-trash').css('opacity', 0);
});

// relation status
$('#relation-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#relation-close').addClass('active');
    $('#relation-info, #relation-edit').addClass('hidden');
    $('.relation-edit, #relation-save, #relation-close').removeClass('hidden');
    $('#relation-trash, #relation-close').css('opacity', 1);
});
$('#relation-close').on('click', function(e){
    $('#relation-close').removeClass('active');
    $('.relation-edit, #relation-close, #relation-save').addClass('hidden');
    $('#relation-edit, #relation-info').removeClass('hidden');
    $('#relation-trash').css('opacity', 0);
});

// date of birth
$('#birth-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#birth-close').addClass('active').css('opacity', 1);;
    $('#birth-info, #birth-edit').addClass('hidden');
    $('.birth-edit, #birth-save, #birth-close').removeClass('hidden');
});
$('#birth-close').on('click', function(e){
    $('#birth-close').removeClass('active');
    $('.birth-edit, #birth-close, #birth-save').addClass('hidden');
    $('#birth-edit, #birth-info').removeClass('hidden');
});

// about me
$('#aboutme-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#aboutme-close').addClass('active').css('opacity', 1);;
    $('#aboutme-info, #aboutme-edit').addClass('hidden');
    $('.aboutme-edit, #aboutme-save, #aboutme-close').removeClass('hidden');
});
$('#aboutme-close').on('click', function(e){
    $('#aboutme-close').removeClass('active');
    $('.aboutme-edit, #aboutme-close, #aboutme-save').addClass('hidden');
    $('#aboutme-edit, #aboutme-info').removeClass('hidden');
});

// keywords
$('#keywords-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#keywords-close').addClass('active').css('opacity', 1);
    $('#keywords-info, #keywords-edit').addClass('hidden');
    $('.keywords-edit, #keywords-save, #keywords-close').removeClass('hidden');
});
$('#keywords-close').on('click', function(e){
    $('#keywords-close').removeClass('active');
    $('.keywords-edit, #keywords-close, #keywords-save').addClass('hidden');
    $('#keywords-edit, #keywords-info').removeClass('hidden');
});


/*$(document).on('mouseover', 'tr', function(e) {
    var _this = $(this);
    // var el = _this.find('.icons-view'); // .replaceClass('hidden', 'visible');
    // el.replaceClass('hidden', 'visible')
    // $('.fa-info-circle').removeClass('hidden').addClass('visible');
}).on('mouseout', 'tr', function(e) {
    $('.fa-info-circle').removeClass('visible').addClass('hidden');
});*/
/*

$('tr').mouseover(function(){
    // $(this).find('td:last')
    // $('.fa-info-circle').removeClass('hidden').addClass('visible');
}).mouseout(function(){
    $('.fa-info-circle').removeClass('visible').addClass('hidden');
});
*/
