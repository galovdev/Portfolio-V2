const modalInput = document.getElementById("modal-input")
const submitBtn = document.getElementById("submit-name-btn")
const consentForm = document.getElementById("consent-form")


setTimeout(function(){
    modalInput.style.display= "flex"
},7400)

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get("userName")
    modal.style.display = "none"
    document.getElementById("main-info").innerHTML = 
    ` 
    <h1>Hi ${name}!<br> <span>My name is Galo</span> </h1>
    `
}) 