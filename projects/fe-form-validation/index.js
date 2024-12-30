const userFormDocument = document.getElementById("userForm")

const firstNameDocument = document.getElementById("firstName")
const firstNameError = document.getElementById("firstNameError")

const lastNameDocument = document.getElementById("lastName")
const lastNameError = document.getElementById("lastNameError")

const phoneNumberDocument = document.getElementById("phoneNumber")
const phoneNumberError = document.getElementById("phoneNumberError")

const emailDocument = document.getElementById("email")
const emailError = document.getElementById("emailError")

const usernameDocument = document.getElementById("username")
const usernameError = document.getElementById("usernameError")

const passwordDocument = document.getElementById("password")
const passwordError = document.getElementById("passwordError")

const avatarImgURLDocument = document.getElementById("avatarImgURL")
const avatarImgURLError = document.getElementById("avatarImgURLError")

userFormDocument.addEventListener('submit', checkIfFormIsAllValid)

firstNameDocument.addEventListener('blur', checkedFirstName)
lastNameDocument.addEventListener('blur', checkedLastName)
usernameDocument.addEventListener('blur', checkedUsername)
avatarImgURLDocument.addEventListener('blur', checkedAvatarImgURL)
passwordDocument.addEventListener('blur', checkedPassword)
phoneNumberDocument.addEventListener('blur', checkedPhoneNumber)
emailDocument.addEventListener('blur', checkedEmail)


function checkIfFormIsAllValid(event){
    const formDocuments = [firstNameDocument,lastNameDocument, usernameDocument, avatarImgURLDocument, passwordDocument, phoneNumberDocument, emailDocument]
    const allFormDataValid = formDocuments.every((document)=>{
        document.classList.contains('valid')
    })
    if(!allFormDataValid) {
        event.preventDefault()
    }
}


function checkedFirstName (event) {
    const isValid = event.target.value !== "";
    if (isValid) {
        firstNameDocument.classList.remove('invalid');
        firstNameDocument.classList.add('valid');
        firstNameError.innerText = '';
    } else {
        firstNameDocument.classList.remove('valid');
        firstNameDocument.classList.add('invalid');
        firstNameError.innerText = 'Required info:'
    }
}

function checkedLastName (event) {
    const isValid = event.target.value !== "";
    if (isValid) {
        lastNameDocument.classList.remove('invalid');
        lastNameDocument.classList.add('valid');
        lastNameError.innerText = '';
    } else {
        lastNameDocument.classList.remove('valid');
        lastNameDocument.classList.add('invalid');
        lastNameError.innerText = 'Required info:'
    }
}

const phoneNumberPattern = /^\d{11}$/

function checkedPhoneNumber (event) {
    const isValid = phoneNumberPattern.test(event.target.value)
    if (isValid) {
        phoneNumberDocument.classList.remove('invalid');
        phoneNumberDocument.classList.add('valid');
        phoneNumberError.innerText = '';
    } else {
        phoneNumberDocument.classList.remove('valid');
        phoneNumberDocument.classList.add('invalid');
        phoneNumberError.innerText = 'Telephone number should only contain numbers and be 11 digits long'
    }
}

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

function checkedEmail (event) {
    const isValid = emailPattern.test(event.target.value)
    if (isValid) {
        emailDocument.classList.remove('invalid');
        emailDocument.classList.add('valid');
        emailError.innerText = '';
    } else {
        emailDocument.classList.remove('valid');
        emailDocument.classList.add('invalid');
        emailError.innerText = 'email criteria: one or more symbols, letters or numbers. Email contains @ symbol, a . symbol and TLD which is 2 characters long.'
    }
}

const usernamePattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/

function checkedUsername (event) {
    const isValid = usernamePattern.test(event.target.value);
    console.log(event.target.value)
    if (isValid) {
        usernameDocument.classList.remove('invalid');
        usernameDocument.classList.add('valid');
        usernameError.innerText = '';
    } else {
        usernameDocument.classList.remove('valid');
        usernameDocument.classList.add('invalid');
        usernameError.innerText = 'Username failure. Username must contain a mix of letters and number with no other characters or spaces.'
    }
}

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/

function checkedPassword (event) {
    const isValid = passwordPattern.test(event.target.value);
    if (isValid) {
        passwordDocument.classList.remove('invalid');
        passwordDocument.classList.add('valid');
        passwordError.innerText = '';
    } else {
        passwordDocument.classList.remove('valid');
        passwordDocument.classList.add('invalid');
        passwordError.innerText = 'Password failure. password has 8 characters long, password has at least 1 number, password has at least 1 lower case characters, password had at least 1 upper case character and one symbol'
    }
}

const urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
'((\\d{1,3}\\.){3}\\d{1,3}))'+ 
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
'(\\?[;&a-z\\d%_.~+=-]*)?'+
'(\\#[-a-z\\d_]*)?$','i');

function checkedAvatarImgURL (event) {
    const isValid = urlPattern.test(event.target.value);
    if (isValid) {
        avatarImgURLDocument.classList.remove('invalid');
        avatarImgURLDocument.classList.add('valid');
        avatarImgURLError.innerText = '';
    } else {
        avatarImgURLDocument.classList.remove('valid');
        avatarImgURLDocument.classList.add('invalid');
        avatarImgURLError.innerText = 'Avatar immage url failure: must contain http, a valid domain name or IP address or port number, a queery and anchor'
    }
}