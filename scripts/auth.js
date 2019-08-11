// auth status
auth.onAuthStateChanged(user =>{
    if(user){
        console.log('user logged in', user);
        setupUI(user);
        
    }else{
        console.log('user logged out');
        setupUI();
    }
});





// Form submit
$(document).ready(function() {



var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passInput = document.getElementById('password');
$('form.signup-form').submit(function (event) {
    event.preventDefault();
 
    
     auth.createUserWithEmailAndPassword(emailInput.value,passInput.value).then(cred => {
     console.log(cred.user);
       
     });

});

});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e)=> {
    e.preventDefault();
    auth.signOut();
    alert('logged out')
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('click', (e)=> {
    e.preventDefault();

    // get user info

    const email = loginForm['login-email'].value;
    const password = loginForm['login-Password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        alert("logged in Successfully!")
        loginForm.reset();
    });
});