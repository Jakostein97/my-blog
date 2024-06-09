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

// Function to check if the form is incomplete
function checkFormCompletion() {
    let emailInput = document.getElementById('emailInput');
    
    // Check if the email input is empty
    if (emailInput.value === '') {
        alert('Please fill in the username field before submitting the form.');
        return false; // Prevent form submission
    }
    
    // Add more checks for other form fields if needed
    
    return true; // Allow form submission if all fields are filled
}

// Add event listener to the form submit event
document.getElementById('submitBtn').addEventListener('submit', function(event) {
    if (!checkFormCompletion()) {
        event.preventDefault(); // Prevent form submission if form is incomplete
    }
});
