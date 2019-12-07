var lengthEl = document.getElementById("passLength");
var lowerEl = document.getElementById("lowerCheck");
var upperEl = document.getElementById("upperCheck");
var numbersEl = document.getElementById("numbersCheck");
var specialEl = document.getElementById("specialCheck");
var passwordEl = document.getElementById("password");


var passEl = document.getElementById("password");

var generatePass = document.getElementById("generateButton");
var copyPass = document.getElementById("copyButton");

generatePass.addEventListener("click", function() {
    var choicesTotal = [""];

    var length = parseInt(lengthEl.value);
    var lowerSet = ["abcdefghijklmnopqrstuvwxyz"];
    var upperSet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var numbersSet = [0123456789];
    var specialSet = ["!@#$%^&*()_+<>,./?'"];

    var lowerChecked = lowerEl.checked;
    var upperChecked = upperEl.checked;
    var numbersChecked = numbersEl.checked;
    var specialChecked = specialEl.checked;

    if (lowerChecked){
        choicesTotal += lowerSet;
    };
    if (upperChecked){
        choicesTotal += upperSet;
    };
    if (numbersChecked){
        choicesTotal += numbersSet;
    };
    if (specialChecked){
        choicesTotal += specialSet;
    };

    if(length < 8 || length > 128 || !length) {
        alert("Make sure you input a number between 8 and 128!")
        return
    };

    if(!lowerChecked && !upperChecked && !numbersChecked && !specialChecked) {
        alert("You must check at least one option!")
        return
    };

    passwordEl.value = passwordGen(length, choicesTotal);

})

function passwordGen (length, choicesTotal) {
    var thePassword = '';

    for (var i = 0; i<length; i++){
        thePassword += choicesTotal.charAt(Math.floor(Math.random()* choicesTotal.length))
    };

    return thePassword;
};

function copyFunction() {
    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);
};
