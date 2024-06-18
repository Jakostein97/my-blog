// Store info to localStorage
function saveFormData () {
    // Get the data from the form
    // grabbing the inputs using the IDs
    const emailInput = document.querySelector('#emailInput'); // Grabs the ID emailInput from our HTML
    //var emailInput = document.getElementById('emailInput') // This is another way to grab an ID from the Html
    const titleInput = document.querySelector('#titleInput');
    // var titleValue = document.querySelector('#titleInput).value();
    const contentInput = document.querySelector('#contentInput');
    // We need to grab the actual value/text from the inputs .value()
    const emailValue = emailInput.value; // The value() method allows us to grab the text that the user entered into an input or textarea
    const titleValue = titleInput.value;
    const contentValue = contentInput.value;

    if (emailValue === "" || titleValue === "" || contentValue === "") {
        alert("Please fill in all fields.");
        return;
    }
    // object vs array || Use an array when you are working with the same exact values || use an object when we want 2 different data with different uses
   const postObject = {
        email: emailValue,
        title: titleValue,
        content: contentValue
    };

    const savedPosts = JSON.parse(localStorage.getItem('posts')) || []; // This variable is going to be an array regardless because we want to multiple posts
    // Save this information to localStorage
    savedPosts.push(postObject) // push() allows us to add the information into the array
    localStorage.setItem('posts', JSON.stringify(savedPosts));
    window.location.href = 'blog.html'; // Change 'posts.html' to the actual URL of your posts page
}

// Open the blog page when submited

document.querySelector('#submitBtn').addEventListener('click', function(event) {
    // By default, a type submit button will refresh the page. We do not want that because then it will not run our function. So we need to add event.preventDefault()
    event.preventDefault(); // Prevents the form from refreshing the page
    saveFormData();
    // Redirect to the posts page
})

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
    const requiredFields = document.querySelectorAll('.required');
    let isValid = true;

    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            isValid = false;
            // Display a prompt to complete the form
            alert('Please fill out all required fields.');
        }
    });

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    } else {
        saveFormData(); // Call saveFormData function if all required fields are filled
    }
});