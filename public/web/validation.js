
// long press key





var col_cnt = [0, 0, 0, 0, 0, 0];
var msg = 'Fill All Required Fields';
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).on('click', '.btn-col', function () {
    var cur_class = $(this).find('i').attr('class');
    var ele = $(this);

    if (cur_class) {
        cur_class = parseInt(cur_class.replace('col', '')) - 1;
        col_cnt[cur_class] = 1;

        console.log(col_cnt,cur_class,key_cnt);
        // console.log($(this).find('i').length);


        ele.removeClass('btn-col');
    }
    else {
        location.reload();
    }
});

$(document).on('click', '#register-from-btn', function () {
    var has_error = 0;
    $('#channels-list-container1').val(col_cnt);
    $('#key_cnt').val(key_cnt);
    $('#register-form').find('input').each(function (index) {
        if ($(this).attr('id') != 'channels-list-container') {
            console.log($(this).attr('id'));
            if($(this).val() == ''){

                has_error += 1;
                console.log("here1");
                return;
            }
            if ($(this).attr('type') == 'email') {
                if (!isEmail($(this).val())) {
                    has_error += 1;
                    msg = 'InValid Email!';
                    return;
                }
            }
            if ($(this).attr('type') == 'password' && has_error == 0) {

                var mulpass = $(this).val().length < 9;
                if(mulpass){
                    has_error += 1;
                    msg = 'Min Password Required 9 character!';
                    return;
                }
                var pass_mul = parseInt($(this).val().length);
                var check_pass_mul = pass_mul%3;
                console.log("pass" + check_pass_mul);
                if(check_pass_mul != 0){
                    console.log($(this).val().length);
    
                    has_error += 1;
                    msg = 'Password Not multipul of 3!';
                    return;
                }
                
            }
        }
        // console.log("here");
    });

    if (has_error == 0) {
        if (key_cnt == 0) {

            msg = 'Long Press key validation!';
            has_error += 1;
        }
        else if (key_cnt < 5) {
            msg = 'Min Key Press required 5s';
            has_error += 1;
        }
        if (has_error == 0) {
            var i;
            var lo_col_cnt = 0;
            for (i = 0; i < col_cnt.length; ++i) {
                if (col_cnt[i] == '') {
                    lo_col_cnt += 1;
                }
            }

            if (lo_col_cnt > 4) {
                msg = 'Color Validation Failed!';
                has_error += 1;

            }
        }
    }

    if (has_error) {
        $('#key_cnt').val('');
        Swal.fire({
            icon: 'error',
            title: msg,
        })
        $('#channels-list-container1').val('');
    }
    else {
        
        $('#register-form').submit();
        // toastr.success("Success");
    }
});




