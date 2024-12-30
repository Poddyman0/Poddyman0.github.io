const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const phoneNumber = document.getElementById("phoneNumber")
const email = document.getElementById("email")
const username = document.getElementById("username")
const avatarImgURL = document.getElementById("avatarImgURL")

const queries = new URLSearchParams(window.location.search)

const firstNameValue = queries.get('firstName')
firstName.innerText += ` ${firstNameValue}`

const lastNameValue = queries.get('lastName')
lastName.innerText += ` ${lastNameValue}`

const phoneNumberValue = queries.get('phoneNumber')
phoneNumber.innerText += ` ${phoneNumberValue}`

const emailValue = queries.get('email')
email.innerText += ` ${emailValue}`

const usernameValue = queries.get('username')
username.innerText += ` ${usernameValue}`

const avatarImgURLValue = queries.get('avatarImgURL')
avatarImgURL.innerText += ` ${avatarImgURLValue}`