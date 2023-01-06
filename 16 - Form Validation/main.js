let form = document.querySelector('#form');
let username = document.getElementById('username');
let email = document.getElementById('email'); 
let password = document.getElementById('password'); 
let password2 = document.getElementById('password2'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});
function checkInput(){
     const userValue = username.value.trim();
     const emailValue = email.value.trim();
     const  passwordValue = password.value.trim();
     const password2Value = password2.value.trim();
    if(userValue === ''){
        // run the Error
        setErrorFor(username,'Username cannot be blank');
    }else{
        setSuccuss(username);
    }
    if(emailValue === ''){
        setErrorFor(email,'email cannot be blank');
    }else if(!validEmail(emailValue)){
        setErrorFor(email, "Email is not valid")
    }
    else{
        setSuccuss(email);
    }


    if(passwordValue === ''){
        setErrorFor(password,'Password cannot be blank');
    }else{
        setSuccuss(password);
    }
   if(password2Value === ''){
    setErrorFor(password2, "Password cannot be blank");
   } else if(passwordValue != password2Value){
    setErrorFor(password2, "Password doesn't match");
   }else{
    setSuccuss(password2)
   }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccuss(input){
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

function validEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}