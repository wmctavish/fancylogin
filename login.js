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
    } else if (username.value.length >= 6){
        userName.classList.remove("invalid");
        userName.classList.add("valid");
        $("#unlength").hide();
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
        
    } else if (password.value.length >= 8 && capRegex.test(pwvalue) && charRegex.test(pwvalue)) {
        password.classList.remove("invalid");
        password.classList.add("valid");
        $("#pwrequires").hide();
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
    } else if (repwvalue == pwvalue) {
        rePassword.classList.remove("invalid");
        rePassword.classList.add("valid");
    }
};