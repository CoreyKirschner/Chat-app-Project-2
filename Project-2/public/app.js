const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


form.addEventListener('submit' ,(event) => {
    event.preventDefault()
    checkInput()
})

const checkInput = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    if(usernameValue === '') {
        setError(username , 'please enter the username')
    } else {
        setSucces(username)
    }
    if(emailValue === '') {
        setError(email , 'please enter the email')
    } else {
        setSucces(email)
    }
    if(passwordValue === '') {
        setError(password , 'please enter the password')
    } else {
        setSucces(password)
    }
    if(password2Value === '') {
        setError(password2 , 'please re-enter the password')
    } else if(passwordValue !== password2Value) {
        setError(password2 , 'it is the wrong password')
    } else {
        setSucces(password2)
    }
}
const setError = (input , message) => {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
}
const setSucces = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control succes'
}
