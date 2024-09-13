
var email = document.getElementById('email')
var inValid = document.getElementById('inValid')



function validateEmail(){

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        console.log("invalid email address")
        inValid.innerHTML ="invalid email address";
        return false;
    }
    else {
        console.log("Email accepted")
        inValid.innerHTML ="  ";
        return true;
    }
    
}


