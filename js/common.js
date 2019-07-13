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
    $('#nickname-info, #nickname-edit').addClass('hidden');
    $('.nickname-edit, #nickname-save, #nickname-close').removeClass('hidden');
    $('#nickname-trash, #nickname-close').css('opacity', 1);
});
$('#nickname-close').on('click', function(e){
    $('.nickname-edit, #nickname-close, #nickname-save').addClass('hidden');
    $('#nickname-edit, #nickname-info').removeClass('hidden');
    $('#nickname-trash').css('opacity', 0);
});

// relation status
$('#relation-edit').on('click', function(e){
    $('#relation-info, #relation-edit').addClass('hidden');
    $('.relation-edit, #relation-save, #relation-close').removeClass('hidden');
    $('#relation-trash, #relation-close').css('opacity', 1);
});
$('#relation-close').on('click', function(e){
    $('.relation-edit, #relation-close, #relation-save').addClass('hidden');
    $('#relation-edit, #relation-info').removeClass('hidden');
    $('#relation-trash').css('opacity', 0);
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
