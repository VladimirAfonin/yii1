$('.fa-close, .fa-save, .fa-info-circle, .fa-trash, .fa-edit').tooltip();

function getShorty($string, $count_words) {
    var shorty = $string.split(" ", $count_words);
    return shorty.join(' ', shorty).concat('...');
}

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
            $('#fname-input').val(res['first_name']);

            $('#middlename-1').html(res['middle_name']);
            $('#middlename-input').val(res['middle_name']);

            $('#lastname-1').html(res['last_name']);
            $('#lastname-input').val(res['last_name']);

            $('#nickname-1').html(res['nick_name']);
            $('#nickname-input').val(res['nick_name']);

            // date of birth
            var date_birth_timestamp = res['date_birth'];
            var date_form = new Date(date_birth_timestamp*1000).toLocaleDateString();
            var new_date = date_form.split('/');

            $('#b-date-1').html(new_date[1]);
            $('#b-year-1').html(new_date[2]);

            const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            $('#b-month-1').html(months[new_date[0] - 1]);

            $('#month').val(new_date[0]);
            $('#year').val(new_date[2]);
            $('#day').val(new_date[1]);

            $('#aboutme-1').html(getShorty(res['about_me'], 5));
            $('#aboutme-input').val(res['about_me']);

            $('#relationStatus').val(res['relation_status']);
            var relationLabel = $("#relationStatus option:selected").text();
            $('#relation-1').html(relationLabel);

            $('#keywords').html(res['keywords']);
            $('.userid-view').html(res['user_login']);

        }


    },
    error: function(res) {
        console.log(res);
    },
});

// firstname
$('#firstname-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#firstname-close').addClass('active').css('opacity', 1);
    $('#firstname-info, #firstname-edit, .middle-edit, .lastname-edit').addClass('hidden');
    $('.firstname-edit, #firstname-save, #firstname-close').removeClass('hidden');
});
$('#firstname-close').on('click', function(e){
    $('#firstname-close').removeClass('active');
    $('.firstname-edit, .middle-edit, .lastname-edit, #firstname-close, #firstname-save').addClass('hidden');
    $('#firstname-edit, #middlename-edit, #lastname-edit, #firstname-info').removeClass('hidden');
    $('#firstname-trash').css('opacity', 0);
});

// middlename
$('#middlename-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#firstname-close').addClass('active').css('opacity', 1);
    $('#firstname-info, #middlename-edit, .firstname-edit, .lastname-edit').addClass('hidden');
    $('.middle-edit, #firstname-save, #firstname-close').removeClass('hidden');
});

// lastname
$('#lastname-edit').on('click', function(e){
    $('.active').trigger('click');
    $('#firstname-close').addClass('active').css('opacity', 1);
    $('#firstname-info, #lastname-edit, .firstname-edit, .middle-edit').addClass('hidden');
    $('.lastname-edit, #firstname-save, #firstname-close').removeClass('hidden');
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

// save first row
$('#firstname-save').on('click', function(e){
    var fname = $('#fname-input').val();
    var middleName = $('#middlename-input').val();
    var lastName = $('#lastname-input').val();

   $.ajax({
       url: 'http://people.loc/user/1',
       type: 'PATCH',
       data: {
          first_name: fname,
          middle_name: middleName,
          last_name: lastName,
       },
       success: function(res) {
           $('#firstname-close').trigger('click');
       },
       error: function(res) {
           console.log(res);
       },
   });

});

// save nickname
$('#nickname-save').on('click', function(e){
    var nickName = $('#nickname-input').val();
    $.ajax({
        url: 'http://people.loc/user/1',
        type: 'PATCH',
        data: {
            nick_name: nickName,
        },
        success: function(res) {
            $('#nickname-input').val(nickName);
            $('#nickname-1').html(nickName);
            $('#nickname-close').trigger('click');
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// delete nickname
$('#nickname-trash').on('click', function(e){
    if (!confirm('Are you sure you want to delete Nick Name value?')) {
        return false;
    }
    $.ajax({
        url: 'http://people.loc/user/1',
        type: 'PATCH',
        data: {
            nick_name: '',
        },
        success: function(res) {
            $('#nickname-input').val('');
            $('#nickname-1').html('');
            $('#nickname-close').trigger('click');
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// save date of birth
$('#birth-save').on('click', function(e){
    var month = $('#month').val();
    var day = $('#day').val();
    var year = $('#year').val();

    var newTimeStamp = Date.parse(year + '-' + month + '-' + day)/1000;

    $.ajax({
        url: 'http://people.loc/user/1',
        type: 'PATCH',
        data: {
            date_birth: newTimeStamp,
        },
        success: function(res) {
            var months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

            $('#b-month-1').html(months[month - 1]);
            $('#b-date-1').html(day);
            $('#b-year-1').html(year);
            $('#birth-close').trigger('click');
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// save 'about me'
$('#aboutme-save').on('click', function(e){
    var aboutMe = $('#aboutme-input').val();
    $.ajax({
        url: 'http://people.loc/user/1',
        type: 'PATCH',
        data: {
            about_me: aboutMe,
        },
        success: function(res) {
            $('#aboutme-1').html(getShorty(aboutMe, 5));
            $('#aboutme-close').trigger('click');
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// save 'relationship status'
$('#relation-save').on('click', function(e){
    var relationStatus = $('#relationStatus').val();
    var relationsLabels = [
        "---",
        "Single", "In a relationship", "Engaged",
        "Married", "In a civil union", "In a domestic partnership",
        "In a open relationship", "Its complicated", "Separated",
        "Divorced", "Widowed"
    ];
    var z = 0;
    var relations = [];
    for(var i = 316; i <= 327; i++) {
        relations[i] = ({value: i, label: relationsLabels[z]});
        z++;
    }

    $.ajax({
        url: 'http://people.loc/user/1',
        type: 'PATCH',
        data: {
            relation_status: relationStatus,
        },
        success: function(res) {
            $('#relation-1').html(relations[relationStatus]['label']);
            $('#relation-close').trigger('click');
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// delete 'relationship status'
$('#relation-trash').on('click', function(e){
    if (!confirm('Are you sure you want to delete Relation Status value?')) {
        return false;
    }
    $.ajax({
        url: 'http://people.loc/user/1',
        type: 'PATCH',
        data: {
            relation_status: 316,
        },
        success: function(res) {
            $('#relation-1').html('---');
            $('#relationStatus').val(316);
            $('#relation-close').trigger('click');
        },
        error: function(res) {
            console.log(res);
        },
    });
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
