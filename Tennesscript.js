
var email = document.getElementById('email')
var inValid = document.getElementById('inValid')
var emailv = document.getElementById('emailv')
var Question = document.getElementById('questions')



function validateEmail(){

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)  & email !=("emailv"))  {
        console.log("invalid email address")
        inValid.innerHTML ="invalid email address or email does not match verification";
        return false;
    }
    else {
        console.log("Email accepted")
        inValid.innerHTML ="  ";
        return true;
    }

    

}




function questlog(){

    console.log("question:", Question);
}


