
//Basic slide toggling of registration form
$("#login-button").click( function() {
    $("#bg-modal").slideToggle(800);
    $("#modal-content").slideToggle(800);
});

$(".close").click(function() {
    $("#bg-modal").slideToggle(800);
    $("#modal-content").slideToggle(800);
});

//From input validation

//Username validation
const userName = document.getElementById('username');
let counter = 0;
userName.onkeyup = () => {
    $("#unrequires").show();
    counter = userName.value.length;
    if (counter < 6){
        userName.classList.add("invalid");
        userName.classList.remove("valid");
        $("#unlength").show();
        unPassed = false;
    } else if (username.value.length >= 6){
        userName.classList.remove("invalid");
        userName.classList.add("valid");
        $("#unlength").hide();
        unPassed = true;
    };
};

//Password validation
const password = document.getElementById('password');
const capRegex = new RegExp('^(?=.*[A-Z])');
const charRegex = new RegExp('^(?=.*[!@#\$%\^&])');
let pwcounter = 0;
let pwvalue;
password.onkeyup = () => {
    pwcounter = password.value.length;
    pwvalue = password.value;
    if (pwcounter < 8) {
        password.classList.add("invalid");
        password.classList.remove("valid");
        $("#pwrequires").show();
        pwPassed = false;
        
    } else if (password.value.length >= 8 && capRegex.test(pwvalue) && charRegex.test(pwvalue)) {
        password.classList.remove("invalid");
        password.classList.add("valid");
        $("#pwrequires").hide();
        pwPassed = true;
    };

    if (pwcounter >= 8) {
        $("#pwlength").hide();
    } else if (pwcounter < 8) {
        $("#pwlength").show();
    };

    if (capRegex.test(pwvalue)) {
        $("#capital").hide();
    } else {
        $("#capital").show();
    };

    if (charRegex.test(pwvalue)) {
        $("#symbol").hide();
    } else {
        $("#symbol").show();
    };
};

//Ensure password re-entry matches initial password
const rePassword = document.getElementById('re-password');
let repwvalue;
rePassword.onkeyup = () => {
    repwvalue = rePassword.value;
    if (repwvalue != pwvalue) {
        rePassword.classList.add("invalid");
        rePassword.classList.remove("valid");
        repwPassed = false;
    } else if (repwvalue == pwvalue) {
        rePassword.classList.remove("invalid");
        rePassword.classList.add("valid");
        repwPassed = true;
    }
};

//Enable registration button
/*
let unPassed = false;
let pwPassed = false;
let repwPassed = false;
if (unPassed && pwPassed && repwPassed) {
    $("#submit-button").prop('disabled', false);
}
*/


//Re-size main element, fade-out/in input fields, welcome message
function regComplete() {
    //Check media size before creating welcome element
    if (window.matchMedia("(min-width: 932px").matches) {
        $("#login-form").animate({opacity: 'toggle'}, 800);
        $(".close").animate({opacity: 'toggle'}, 100);
        $("#modal-content").animate({width: '40%'}, 800);
        $("#modal-content").animate({height: "160px"}, 800);
        $("#welcome").delay(1000).animate({opacity: '1'}, 800);
    } else {
        $("#login-form").animate({opacity: 'toggle'}, 800);
        $(".close").animate({opacity: 'toggle'}, 100);
        $("#modal-content").animate({width: '95%'}, 800);
        $("#modal-content").animate({height: "160px"}, 800);
        $("#welcome").delay(1000).animate({opacity: '1'}, 800);
    }
}; 