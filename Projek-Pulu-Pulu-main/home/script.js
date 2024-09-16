// JavaScript code for handling form submission (if needed)
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Here you can add your logic to handle form data
    // For example:
    // - Validate form inputs
    // - Send form data to a server using AJAX
    // - Perform other actions based on the submitted data

    // Log the form data to the console (for demonstration)
    console.log('Form submitted!');
    console.log(new FormData(form));
});