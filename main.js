// !check the e-mail
// get variables
let errorMsg = document.querySelector("#p");
let errorIcon = document.querySelector(".error");
let submitButton = document.querySelector("button");
let emailArea = document.querySelector("#email");
//make the function
submitButton.addEventListener("click", checkEmailCredit);
function checkEmailCredit() {
    let testEmail = /.+@.+\.com/ig;
    if (!testEmail.test(emailArea.value)) {
        errorMsg.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
    }else{
        emailArea.value = "";
        errorMsg.style.visibility = "hidden";
        errorIcon.style.visibility = "hidden";
    }
}
