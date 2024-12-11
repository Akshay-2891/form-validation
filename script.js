document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        let isValid = true;

        const firstName = document.getElementById('first_name').value;
        const middleName = document.getElementById('middle_name').value; 
        const lastName = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirm-email').value;
        const mobileNumber = document.getElementById('mobile-number').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const address = document.getElementById('address').value;

        clearErrors();

        if (firstName.trim() === '') {
            showError('first_name', 'First Name is required.');
            isValid = false;
        }
        if (middleName.trim() !== '' && middleName.trim().length < 2) {
            showError('middle_name', 'Middle Name should be at least 2 characters long.');
            isValid = false;
        }
        if (lastName.trim() === '') {
            showError('last_name', 'Last Name is required.');
            isValid = false;
        }
        if (email.trim() === '') {
            showError('email', 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }
        if (confirmEmail.trim() === '') {
            showError('confirm-email', 'Please confirm your email.');
            isValid = false;
        } else if (email !== confirmEmail) {
            showError('confirm-email', 'Emails do not match.');
            isValid = false;
        }
        if (mobileNumber.trim() === '') {
            showError('mobile-number', 'Mobile number is required.');
            isValid = false;
        } else if (!/^\d{10}$/.test(mobileNumber)) {
            showError('mobile-number', 'Please enter a valid 10-digit mobile number.');
            isValid = false;
        }
        if (password.trim() === '') {
            showError('password', 'Password is required.');
            isValid = false;
        }
        if (confirmPassword.trim() === '') {
            showError('confirm-password', 'Please confirm your password.');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirm-password', 'Passwords do not match.');
            isValid = false;
        }
        if (!gender) {
            showError('gender', 'Please select your gender.');
            isValid = false;
        }
        if (address.trim() === '') {
            showError('address', 'Address is required.');
            isValid = false;
        }
        if (isValid) {
            form.submit(); 
            alert("Form submitted successfully!"); 
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        errorSpan.textContent = message;
        field.parentNode.appendChild(errorSpan);
    }
    function clearErrors() {
        const errorSpans = document.querySelectorAll('.error');
        errorSpans.forEach(function (span) {
            span.remove();
        });
    }
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
});