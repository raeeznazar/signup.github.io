$(document).ready(function(){
    $("#sign-up-form").validate({

        rules:{
            firstName:{
                required:true, 
                minlength:4,
                maxlength:8,
            },
            lastName:{
                required:true, 
                minlength:4,
                maxlength:8
            },

            email:{
                required:true,
                email:true

            },

            phoneNumber:{
                required:true,
                minlength:10,
                maxlength:12,
            },

            password:{
                required:true,
                minlength:8,
                pwcheck: true,

            },

            password2:{
                required:true,
                minlength:8,
                equalTo: "#password-field"
            },

            dob:{
                required:true
            },

            checkbox1:{
                required:true
            },

            checkboxsmall:{
                required:true
            },

            gender:{
                required:true
            },
        },

        errorPlacement: function (error, element) {
            if (element.attr("name") == "gender") $(".error-msg").html(error);
            else{
                element.after(error);//default error placement
                 } 
                },
            })

        $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
         input.attr("type", "text");
        } else {
         input.attr("type", "password");
         }
        });

    $(".toggle-password2").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password2") {
     input.attr("type", "text");
    } else {
     input.attr("type", "password2");
     }
});

$.validator.addMethod("pwcheck", function(value) {
    return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
        && /[a-z]/.test(value) // has a lowercase letter
        && /\d/.test(value) // has a digit
 });

})