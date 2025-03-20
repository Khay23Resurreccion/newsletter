document.addEventListener("DOMContentLoaded", function() { 
    const form = document.getElementById("signup-form"); // Fixed the incorrect 'form' ID
    const emailErrorMessage = document.getElementById("error-message");
    const successState = document.getElementById("success-state");
    const emailHolder = document.getElementById("email");
    const userEmail = document.querySelector(".user-email");
    const dismissBtn = document.querySelector(".close-btn");
    const subscribeBtn = document.querySelector(".signup-btn");

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    subscribeBtn.addEventListener("click", function(event) {
        event.preventDefault(); 
        const email = emailHolder.value.trim();

        if (validateEmail(email)) {
            userEmail.innerText = email;
            form.classList.add("hidden");
            successState.classList.remove("hidden");
            emailHolder.style.border = "1px solid #ddd"; 
            emailErrorMessage.innerText = "";
        } else {
            emailErrorMessage.innerText = "Valid email required";
            emailHolder.style.border = "1px solid hsl(4, 100%, 67%)"; 
        }
    });

    dismissBtn.addEventListener("click", function() {
        successState.classList.add("hidden");
        form.classList.remove("hidden");
        emailHolder.value = "";
        emailErrorMessage.innerText = "";
        emailHolder.style.border = "1px solid #ddd"; 
    });
});
