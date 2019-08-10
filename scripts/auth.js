$(document).ready(function() {

// Form submit

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passInput = document.getElementById('password');
$('form.signup-form').submit(function (event) {
    event.preventDefault();
 
    
    
   
    // console.log(nameInput.value,emailInput.value,passInput.value);
    
     auth.createUserWithEmailAndPassword(emailInput.value,passInput.value).then(cred => {
     console.log(cred.user);
       
     });

});

})