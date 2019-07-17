$('.fa-close, .fa-save, .fa-info-circle, .fa-trash, .fa-edit').tooltip();

// const API_URL = 'https://api.myshkinaradost.ru/'; // todo: change this line
const API_URL = 'http://people.loc/';
const API_URL_WIDGET = 'http://people.loc/';

function getShorty($string, $count_words) {
    var shorty = $string.split(" ", $count_words);
    return shorty.join(' ', shorty).concat('...');
}

function content_length() {
    var content = $('#aboutme-input').val();
    if(content) {
        var length = content.length;
        var remaining = 200 - length;
        $('#chars-sum').html(remaining);
        if(remaining === 0) {
            $('#aboutme-error').removeClass('hidden');
            $('#remaining-txt, #chars-sum').addClass('hidden');
        } else {
            $('#aboutme-error').addClass('hidden');
            $('#remaining-txt, #chars-sum').removeClass('hidden');
        }
    }
}

function getCancelRow(el) {
   if(el == '#fname-input' || el == '#middlename-input' || el == '#lastname-input') {
       return 'f-name-change';
   } else if(el == '#nickname-input') {
       return 'n-name-change';
   } else if(el == '#month' || el == '#year' || el == '#day') {
       return 'b-name-change';
   } else if(el == '#aboutme-input') {
       return 'aboutme-name-change';
   } else if(el == '#relationStatus') {
       return 'relation-name-change';
   }
}

function getErrorDiv(el){
    if(el == '#fname-input') {
        return '.firstname-edit';
    } else if(el == '#middlename-input') {
        return '.middle-edit';
    } else if(el == '#lastname-input') {
        return '.lastname-edit';
    } else if(el == '#nickname-input') {
        return '.nickname-edit';
    } else if(el == '#year') {
        return '.birth-edit';
    } else if(el == '#day') {
        return '.birth-edit';
    } else if(el == '#month') {
        return '.birth-edit';
    } else if(el == '#aboutme-input') {
        return '.aboutme-edit';
    } else if(el == '#relationStatus') {
        return '.relation-edit';
    }
}

var savedData = [];
var currentData = [];

function commitData() {
    savedData = [];
    savedData.push({'#fname-input': $('#fname-input').val()});
    savedData.push({'#middlename-input': $('#middlename-input').val()});
    savedData.push({'#lastname-input': $('#lastname-input').val()});
    savedData.push({'#nickname-input': $('#nickname-input').val()});
    savedData.push({'#month': $('#month').val()});
    savedData.push({'#year': $('#year').val()});
    savedData.push({'#day': $('#day').val()});
    savedData.push({'#aboutme-input': $('#aboutme-input').val()});
    savedData.push({'#relationStatus': $('#relationStatus').val()});
}

function getCurrentData(){
    currentData = [];
    currentData.push({'#fname-input': $('#fname-input').val()});
    currentData.push({'#middlename-input': $('#middlename-input').val()});
    currentData.push({'#lastname-input': $('#lastname-input').val()});
    currentData.push({'#nickname-input': $('#nickname-input').val()});
    currentData.push({'#month': $('#month').val()});
    currentData.push({'#year': $('#year').val()});
    currentData.push({'#day': $('#day').val()});
    currentData.push({'#aboutme-input': $('#aboutme-input').val()});
    currentData.push({'#relationStatus': $('#relationStatus').val()});
}

var widgetStatus = false;
$.ajax({
    url: API_URL_WIDGET + 'widgets/1',
    type: 'GET',
    async: false,
    success: function(res) {
        if(res['status'] == 1) {
            widgetStatus = true;
        } else {
            widgetStatus = false;
            $('.people-info').remove();
        }
        console.log(res);
    },
    false: function(res) {
        console.log('error');
    },

});

if(widgetStatus) {
    $('.people-info').removeClass('hidden');

    $.ajax({
        url: API_URL + 'user/1',
        type: 'GET',
        async: false,
        success: function(res) {
            // console.log(res);
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

                $('#firstname-info-view').html(res['first_name_info']);
                $('#nickname-info-view').html(res['nickname_name_info']);
                $('#mylokal-info-view').html(res['local_user_id_info']);
                $('#birth-info-view').html(res['date_of_birth_info']);
                $('#aboutme-info-view').html(res['aboutme_info']);
                $('#relation-info-view').html(res['relation_info']);
                $('#keywords-info-view').html(res['keywords_info']);

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

                content_length();
                commitData();
            }
        },
        error: function(res) {
            console.log(res);
        },
    });
}


// show info
$('#firstname-info').on('click', function(e){
    if($('#firstname-info-view').hasClass('active-info')){
        $('#firstname-info-view').toggleClass('hidden').toggleClass('active-info');
    } else {
        $('.active-info').addClass('hidden').removeClass('active-info');
        $('#firstname-info-view').toggleClass('hidden').addClass('active-info');
    }
});
$('#nickname-info').on('click', function(e){
    if($('#nickname-info-view').hasClass('active-info')){
        $('#nickname-info-view').toggleClass('hidden').toggleClass('active-info');
    } else {
        $('.active-info').addClass('hidden').removeClass('active-info');
        $('#nickname-info-view').toggleClass('hidden').addClass('active-info');
    }
});
$('#mylocal-info').on('click', function(e){
    if($('#mylokal-info-view').hasClass('active-info')){
        $('#mylokal-info-view').toggleClass('hidden').toggleClass('active-info');
    } else {
        $('.active-info').addClass('hidden').removeClass('active-info');
        $('#mylokal-info-view').toggleClass('hidden').addClass('active-info');
    }
});
$('#birth-info').on('click', function(e){
    if($('#birth-info-view').hasClass('active-info')){
        $('#birth-info-view').toggleClass('hidden').toggleClass('active-info');
    } else {
        $('.active-info').addClass('hidden').removeClass('active-info');
        $('#birth-info-view').toggleClass('hidden').addClass('active-info');
    }
});
$('#aboutme-info').on('click', function(e){
    if($('#aboutme-info-view').hasClass('active-info')){
        $('#aboutme-info-view').toggleClass('hidden').toggleClass('active-info');
    } else {
        $('.active-info').addClass('hidden').removeClass('active-info');
        $('#aboutme-info-view').toggleClass('hidden').addClass('active-info');
    }
});
$('#relation-info').on('click', function(e){
    if($('#relation-info-view').hasClass('active-info')){
        $('#relation-info-view').toggleClass('hidden').toggleClass('active-info');
    } else {
        $('.active-info').addClass('hidden').removeClass('active-info');
        $('#relation-info-view').toggleClass('hidden').addClass('active-info');
    }
});
$('#keywords-info').on('click', function(e){
    if($('#keywords-info-view').hasClass('active-info')){
        $('#keywords-info-view').toggleClass('hidden').toggleClass('active-info');
    } else {
        $('.active-info').addClass('hidden').removeClass('active-info');
        $('#keywords-info-view').toggleClass('hidden').addClass('active-info');
    }
});

// firstname
$('#firstname-edit').on('click', function(e){
    // firstNameFlag = true;
    getCurrentData();

    var flag = false;
    var cancelId;
    if(firstNameFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            return false;
        } else {
            $('#f-name-change').addClass('hidden');
        }
    }

    // $('#f-name-change').addClass('hidden');
    $('.active').trigger('click');
    $('#firstname-close').addClass('active').css('opacity', 1);
    $('#firstname-info, #firstname-edit, .middle-edit, .lastname-edit').addClass('hidden');
    $('.firstname-edit, #firstname-save, #firstname-close').removeClass('hidden');
});
var  firstNameFlag = true;
$('#firstname-close').on('click', function(e){
    $('#f-name-change').addClass('hidden');
    $('#firstname-close').removeClass('active');
    $('.firstname-edit, .middle-edit, .lastname-edit, #firstname-close, #firstname-save').addClass('hidden');
    $('#firstname-edit, #middlename-edit, #lastname-edit, #firstname-info').removeClass('hidden');
    $('#firstname-trash').css('opacity', 0);
});

// middlename
$('#middlename-edit').on('click', function(e){
    // firstNameFlag = true;
    getCurrentData();

    var flag = false;
    var cancelId;
    if(firstNameFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            return false;
        } else {
            $('#f-name-change').addClass('hidden');
        }
    }

    // $('#f-name-change').addClass('hidden');
    $('.active').trigger('click');
    $('#firstname-close').addClass('active').css('opacity', 1);
    $('#firstname-info, #middlename-edit, .firstname-edit, .lastname-edit').addClass('hidden');
    $('.middle-edit, #firstname-save, #firstname-close').removeClass('hidden');
});

// lastname
$('#lastname-edit').on('click', function(e){
    // firstNameFlag = true;
    getCurrentData();

    var flag = false;
    var cancelId;
    if(firstNameFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            return false;
        } else {
            $('#f-name-change').addClass('hidden');
        }
    }

    // $('#f-name-change').addClass('hidden');
    $('.active').trigger('click');
    $('#firstname-close').addClass('active').css('opacity', 1);
    $('#firstname-info, #lastname-edit, .firstname-edit, .middle-edit').addClass('hidden');
    $('.lastname-edit, #firstname-save, #firstname-close').removeClass('hidden');
});

// nickname
$('#nickname-edit').on('click', function(e){
    // nickNameFlag = true;
    getCurrentData();

    var flag = false;
    var cancelId;
    var errorInput;
    var errorDiv;
    if(nickNameFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                errorInput = (Object.keys(currentData[index])[0]);
                errorDiv = getErrorDiv(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            $(errorDiv).removeClass('hidden');
            $(errorInput).removeClass('hidden');
            return false;
        } else {
            $('#n-name-change').addClass('hidden');
            $(errorDiv).addClass('hidden');
            $(errorInput).addClass('hidden');
        }
    }

    $('.active').trigger('click');
    $('#nickname-close').addClass('active');
    $('#nickname-info, #nickname-edit').addClass('hidden');
    $('.nickname-edit, #nickname-save, #nickname-close').removeClass('hidden');
    $('#nickname-trash, #nickname-close').css('opacity', 1);
});

var nickNameFlag = true;
$('#nickname-close').on('click', function(e){
    $('#n-name-change').addClass('hidden');

    $('#nickname-close').removeClass('active');
    $('.nickname-edit, #nickname-close, #nickname-save').addClass('hidden');
    $('#nickname-edit, #nickname-info').removeClass('hidden');
    $('#nickname-trash').css('opacity', 0);
});

// relation status
$('#relation-edit').on('click', function(e){
    // relationFlag = true;
    getCurrentData();

    var flag = false;
    var cancelId;
    var errorInput;
    var errorDiv;
    if(relationFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                errorInput = (Object.keys(currentData[index])[0]);
                errorDiv = getErrorDiv(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            $(errorDiv).removeClass('hidden');
            $(errorInput).removeClass('hidden');
            return false;
        } else {
            $('#relation-name-change').addClass('hidden');
            $(errorDiv).addClass('hidden');
            $(errorInput).addClass('hidden');
        }
    }

    $('.active').trigger('click');
    $('#relation-close').addClass('active');
    $('#relation-info, #relation-edit').addClass('hidden');
    $('.relation-edit, #relation-save, #relation-close').removeClass('hidden');
    $('#relation-trash, #relation-close').css('opacity', 1);
});
var relationFlag = true;
$('#relation-close').on('click', function(e){
    // relationFlag = false;
    $('#relation-name-change').addClass('hidden');
    $('#relation-close').removeClass('active');
    $('.relation-edit, #relation-close, #relation-save').addClass('hidden');
    $('#relation-edit, #relation-info').removeClass('hidden');
    $('#relation-trash').css('opacity', 0);
});

// date of birth
$('#birth-edit').on('click', function(e){
    // birthFlag = true;
    getCurrentData();

    var flag = false;
    var cancelId;
    var errorInput;
    var errorDiv;
    if(birthFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                errorInput = (Object.keys(currentData[index])[0]);
                errorDiv = getErrorDiv(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            $(errorDiv).removeClass('hidden');
            $(errorInput).removeClass('hidden');
            return false;
        } else {
            $('#b-name-change').addClass('hidden');
            $(errorDiv).addClass('hidden');
            $(errorInput).addClass('hidden');
        }
    }

    $('.active').trigger('click');
    $('#birth-close').addClass('active').css('opacity', 1);;
    $('#birth-info, #birth-edit').addClass('hidden');
    $('.birth-edit, #birth-save, #birth-close').removeClass('hidden');
});

var birthFlag = true;
$('#birth-close').on('click', function(e){
    $('#b-name-change').addClass('hidden');

    $('#birth-close').removeClass('active');
    $('.birth-edit, #birth-close, #birth-save').addClass('hidden');
    $('#birth-edit, #birth-info').removeClass('hidden');
});

// about me
$('#aboutme-edit').on('click', function(e){
    // aboutmeFlag = true;
    getCurrentData();

    var flag = false;
    var cancelId;
    var errorInput;
    var errorDiv;
    if(aboutmeFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                errorInput = (Object.keys(currentData[index])[0]);
                errorDiv = getErrorDiv(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            $(errorDiv).removeClass('hidden');
            $(errorInput).removeClass('hidden');
            return false;
        } else {
            $('#aboutme-name-change').addClass('hidden');
            $(errorDiv).addClass('hidden');
            $(errorInput).addClass('hidden');
        }
    }


    $('.active').trigger('click');
    $('#aboutme-close').addClass('active').css('opacity', 1);;
    $('#aboutme-info, #aboutme-edit').addClass('hidden');
    $('.aboutme-edit, #aboutme-save, #aboutme-close').removeClass('hidden');
});
var aboutmeFlag = true;
$('#aboutme-close').on('click', function(e){
    $('#aboutme-name-change').addClass('hidden');

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

    if(fname.length === 0) {
        $('.firstname-edit').removeClass('hidden');
        $('#f-name-error').removeClass('hidden');
        return false;
    }  else {
        $('.firstname-edit').addClass('hidden');
        $('#f-name-error').addClass('hidden');
    }

    if(middleName.length === 0) {
        $('.middlename-edit').removeClass('hidden');
        $('#m-name-error').removeClass('hidden');
        return false;
    } else {
        $('.middlename-edit').addClass('hidden');
        $('#m-name-error').addClass('hidden');
    }
     if(lastName.length === 0) {
        $('.lastname-edit').removeClass('hidden');
        $('#l-name-error').removeClass('hidden');
        return false;
    } else {
         $('.lastname-edit').addClass('hidden');
         $('#l-name-error').addClass('hidden');
     }

   $.ajax({
       url: API_URL + 'user/1',
       type: 'PATCH',
       async: false,
       data: {
          first_name: fname,
          middle_name: middleName,
          last_name: lastName,
       },
       success: function(res) {
           firstNameFlag = true;
           $('#firstname-1').html(fname);
           $('#middlename-1').html(middleName);
           $('#lastname-1').html(lastName);
           $('#firstname-close').trigger('click');
           commitData();
           $('#f-name-change').addClass('hidden');
           $('#firstname-info-view').toggleClass('hidden').toggleClass('active-info');
           $('#firstname-info-save').removeClass('hidden').fadeOut(3000);
       },
       error: function(res) {
           console.log(res);
       },
   });

});

// save nickname
$('#nickname-save').on('click', function(e){
    var nickName = $('#nickname-input').val();

    if(nickName.length === 0) {
        $('.nickname-edit').removeClass('hidden');
        $('#n-name-error').removeClass('hidden');
        return false;
    } else {
        $('.nickname-edit').addClass('hidden');
        $('#n-name-error').addClass('hidden');
    }

    $.ajax({
        url: API_URL + 'user/1',
        type: 'PATCH',
        async: false,
        data: {
            nick_name: nickName,
        },
        success: function(res) {
            nickNameFlag = true;
            $('#nickname-input').val(nickName);
            $('#nickname-1').html(nickName);
            commitData();
            $('#nickname-close').trigger('click');
            $('#nickname-info-view').toggleClass('hidden').toggleClass('active-info');
            $('#nickname-info-save').removeClass('hidden').fadeOut(3000);
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// cancel nickname
$('#nickname-yes').on('click', function(e){
    $('#n-name-change').addClass('hidden');
    $('#nickname-input').val(savedData[3]['#nickname-input']);

    $('#nickname-close').removeClass('active');
    $('.nickname-edit, #nickname-close, #nickname-save').addClass('hidden');
    $('#nickname-edit, #nickname-info').removeClass('hidden');
    $('#nickname-trash').css('opacity', 0);
});
$('#nickname-cancel-no').on('click', function(e){
    $('#n-name-change').addClass('hidden');
    nickNameFlag = false;
    $('#nickname-close').trigger('click');
});

// delete nickname
$('#nickname-trash').on('click', function(e){
    getCurrentData();

    var flag = false;
    var cancelId;
    if(nickNameFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            return false;
        } else {
            $('#n-name-change').addClass('hidden');
        }
    }

    if (!confirm('Are you sure you want to delete Nick Name value?')) {
        return false;
    }
    $.ajax({
        url: API_URL + 'user/1',
        type: 'PATCH',
        async: false,
        data: {
            nick_name: '',
        },
        success: function(res) {
            nickNameFlag = true;
            $('#nickname-input').val('');
            $('#nickname-1').html('');
            $('#n-name-change').addClass('hidden');
            $('#nickname-close').removeClass('active');
            $('.nickname-edit, #nickname-close, #nickname-save').addClass('hidden');
            $('#nickname-edit, #nickname-info').removeClass('hidden');
            $('#nickname-trash').css('opacity', 0);
            commitData();
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// cancel first name
$('#firstname-yes').on('click', function(e){
    $('#f-name-change').addClass('hidden');
    $('#fname-input').val(savedData[0]['#fname-input']);
    $('#middlename-input').val(savedData[1]['#middlename-input']);
    $('#lastname-input').val(savedData[2]['#lastname-input']);

    $('#firstname-close').removeClass('active');
    $('.firstname-edit, .middle-edit, .lastname-edit, #firstname-close, #firstname-save').addClass('hidden');
    $('#firstname-edit, #middlename-edit, #lastname-edit, #firstname-info').removeClass('hidden');
    $('#firstname-trash').css('opacity', 0);
});
$('#firstname-cancel-no').on('click', function(e){
    $('#f-name-change').addClass('hidden');
    firstNameFlag = false;
    $('#firstname-close').trigger('click');
});

// save date of birth
$('#birth-save').on('click', function(e){
    var month = $('#month').val();
    var day = $('#day').val();
    var year = $('#year').val();

    // validate for empty field
    if(!month || !day || !year) {
        $('#dob-error').removeClass('hidden');
        return false;
    } else {
        $('#dob-error').addClass('hidden');
    }

    // validate for very young man
    if(year > 2004) {
        $('#dob-young').removeClass('hidden');
        return false;
    } else {
        $('#dob-young').addClass('hidden');
    }

    var newTimeStamp = Date.parse(year + '-' + month + '-' + day)/1000;

    $.ajax({
        url: API_URL + 'user/1',
        type: 'PATCH',
        async: false,
        data: {
            date_birth: newTimeStamp,
        },
        success: function(res) {
            birthFlag = true;
            var months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

            $('#b-month-1').html(months[month - 1]);
            $('#b-date-1').html(day);
            $('#b-year-1').html(year);
            commitData();
            $('#birth-close').trigger('click');
            $('#birth-info-view').toggleClass('hidden').toggleClass('active-info');
            $('#birth-info-save').removeClass('hidden').fadeOut(3000);
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// cancel birth
$('#birthday-yes').on('click', function(e) {
    $('#b-name-change').addClass('hidden');
    $('#month').val(savedData[4]['#month']);
    $('#day').val(savedData[6]['#day']);
    $('#year').val(savedData[5]['#year']);

    $('#birth-close').removeClass('active');
    $('.birth-edit, #birth-close, #birth-save').addClass('hidden');
    $('#birth-edit, #birth-info').removeClass('hidden');
});
$('#birthday-cancel-no').on('click', function(e){
    $('#b-name-change').addClass('hidden');
    birthFlag = false;
    $('#birth-close').trigger('click');
});

// save 'about me'
$('#aboutme-save').on('click', function(e){
    var aboutMe = $('#aboutme-input').val();

    if(aboutMe.length === 0) {
        $('#aboutme-empty-error').removeClass('hidden');
        return false;
    } else {
        $('#aboutme-empty-error').addClass('hidden');
    }

    $.ajax({
        url: API_URL + 'user/1',
        type: 'PATCH',
        async: false,
        data: {
            about_me: aboutMe,
        },
        success: function(res) {
            aboutmeFlag = true;
            $('#aboutme-1').html(getShorty(aboutMe, 5));
            commitData();
            $('#aboutme-close').trigger('click');
            $('#aboutme-name-change').addClass('hidden');
            $('#aboutme-info-view').toggleClass('hidden').toggleClass('active-info');
            $('#aboutme-info-save').removeClass('hidden').fadeOut(3000);
        },
        error: function(res) {
            console.log(res);
        },
    });
});

// cancel aboutme
$('#aboutme-yes').on('click', function(e){
    $('#aboutme-name-change').addClass('hidden');
    $('#aboutme-input').val(savedData[7]['#aboutme-input']);

    $('#aboutme-close').removeClass('active');
    $('.aboutme-edit, #aboutme-close, #aboutme-save').addClass('hidden');
    $('#aboutme-edit, #aboutme-info').removeClass('hidden');
});
$('#aboutme-cancel-no').on('click', function(e){
    $('#aboutme-name-change').addClass('hidden');
    aboutmeFlag = false;
    $('#aboutme-close').trigger('click');
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
        url: API_URL + 'user/1',
        type: 'PATCH',
        async: false,
        data: {
            relation_status: relationStatus,
        },
        success: function(res) {
            relationFlag = true;
            $('#relation-1').html(relations[relationStatus]['label']);
            commitData();
            $('#relation-close').trigger('click');
            $('#relation-info-view').toggleClass('hidden').toggleClass('active-info');
            $('#relation-info-save').removeClass('hidden').fadeOut(3000);
        },
        error: function(res) {
            console.log(res);
        },
    });
});
// cancel relation
$('#relation-yes').on('click', function(e){
    $('#relation-name-change').addClass('hidden');
    $('#relationStatus').val(savedData[8]['#relationStatus']);

    $('#relation-close').removeClass('active');
    $('.relation-edit, #relation-close, #relation-save').addClass('hidden');
    $('#relation-edit, #relation-info').removeClass('hidden');
    $('#relation-trash').css('opacity', 0);
});
$('#relation-cancel-no').on('click', function(e){
    $('#relation-name-change').addClass('hidden');
    relationFlag = false;
    $('#relation-close').trigger('click');
});

// delete 'relationship status'
$('#relation-trash').on('click', function(e){
    getCurrentData();

    var flag = false;
    var cancelId;
    if(relationFlag) {
        $.each(savedData, function(index, value) {
            if(JSON.stringify(value) !== JSON.stringify(currentData[index])) {
                cancelId = getCancelRow(Object.keys(currentData[index])[0]);
                flag = true;
                return false;
            }
        });

        if(flag) {
            $('#' + cancelId).removeClass('hidden');
            return false;
        } else {
            $('#relation-name-change').addClass('hidden');
        }
    }

    if (!confirm('Are you sure you want to delete Relation Status value?')) {
        return false;
    }
    $.ajax({
        url: API_URL + 'user/1',
        type: 'PATCH',
        async: false,
        data: {
            relation_status: 316,
        },
        success: function(res) {
            relationFlag = true;
            $('#relation-1').html('---');
            $('#relationStatus').val(316);
            commitData();
            $('#relation-close').trigger('click');
        },
        error: function(res) {
            console.log(res);
        },
    });
});