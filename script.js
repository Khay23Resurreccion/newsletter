document.addEventListener("DOMContentLoaded", function() { 
    const signUpForm = document.getElementById("signup-form"); 
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-state");
    const emailInput = document.getElementById("email");
    const userEmailDisplay = document.querySelector(".user-email");
    const dismissButton = document.querySelector(".close-btn");
    const subscribeButton = document.querySelector(".signup-btn");

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    subscribeButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            userEmailDisplay.innerText = email;
            signUpForm.classList.add("hidden");
            successMessage.classList.remove("hidden");
            emailInput.style.border = "1px solid #ddd"; 
            errorMessage.innerText = "";
        } else {
            errorMessage.innerText = "Valid email required";
            emailInput.style.border = "1px solid hsl(4, 100%, 67%)"; 
        }
    });

    dismissButton.addEventListener("click", function() {
        successMessage.classList.add("hidden");
        signUpForm.classList.remove("hidden");
        emailInput.value = "";
        errorMessage.innerText = "";
        emailInput.style.border = "1px solid #ddd"; 
    });
});
