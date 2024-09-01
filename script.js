const form = document.getElementById('form')
const fromInputs = document.querySelectorAll('input')

// REGEX
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
const phonePattern = /\b(\+?[1-9]\d{0,2}[\s.-]?)?(\(?\d{1,4}\)?[\s.-]?)?(\d{1,4}[\s.-]?)\d{1,9}\b/g;


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function submitForm(){
    var fname  = document.getElementById('firstname')
    var lname = document.getElementById('lastname')
    var phone =  document.getElementById('phone')
    var email = document.getElementById('email');
    var password = document.getElementById('password')
    
    var fnameVAlue = fname.value;
    var lnameValue = lname.value;
    var phoneValue = phone.value;
    var emailValue = email.value;
    var passwordValue = password.value

    if(!fnameVAlue == ''){
        if(isNaN(fnameVAlue)){
            let msg = 'success'
            successHandler(fname, msg)
        }else{
            let msg  = ' Letters only'
            errorHandler(fname, msg)
        }  
    }else{
      let msg = 'Connot be empty'
      errorHandler(fname, msg)
    }
   
    
    if(!lnameValue == ''){
        
        if(isNaN(lnameValue)){
            let msg = 'success'
            successHandler(lname, msg)
        }else{
            let msg  = 'Letters only'
            errorHandler(lname, msg)
        }
    }else if(isNaN(lnameValue)){

    }else{
      let msg = 'Connot be empty'
      errorHandler(lname, msg)
    }

    if(phoneValue === ''){
        let msg = 'Connot be empty'
        errorHandler(phone, msg)
    }else if(!!isNaN(phoneValue)){
        let msg = 'Invalid input'
        errorHandler(phone, msg)
    }else if(phoneValue.length < 8){
        let msg = 'Must have 8 number'
        errorHandler(phone, msg)
    } else{
        let msg = 'Success'
        successHandler(phone, msg)        
    }

    if(emailValue == ''  ){
        let msg = 'Connot be empty'
        errorHandler(email, msg)
    }else if(!validateEmail(emailValue)){
         let msg = 'Invalid input'
         errorHandler(email, msg)
    }
    else{
        let msg = 'Success'
        successHandler(email, msg)        
    }
    
    if(passwordValue == ''){
        let msg = 'Connot be empty'
        errorHandler(password, msg)
    }else if (passwordValue.length < 8) {
        let msg = "Your password must be at least 8 characters"
        errorHandler(password, msg)
    }else if (passwordValue.search(/[a-z]/i) < 0) {
       let msg = "Your password must contain at least one letter"
       errorHandler(password, msg)
    }else if (passwordValue.search(/[0-9]/) < 0) {
        let msg =  "Your password must contain at least one digit"
        errorHandler(password, msg)
    }else{
        let msg = 'success'
        successHandler(password, msg)
    }
        
   
}

function errorHandler(el, msg){
  var siblingChild = el.nextElementSibling
  el.style.border  = ' 1px solid red'
  siblingChild.classList = ''
  siblingChild.classList = 'error'

  siblingChild.textContent = msg
}

function successHandler(el, msg){
    var siblingChild = el.nextElementSibling
     el.style.border  = ' 1px solid green'
    siblingChild.classList = ''
    siblingChild.classList = 'success'
    siblingChild.textContent = msg
}

form.addEventListener('submit', function(event){
   event.preventDefault();
   submitForm()
})