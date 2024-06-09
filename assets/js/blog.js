// Handling displaying the posts from localStorage
// Refer to activity 7 and 8 (document.createElement() + textContent + append())
const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

// Get the container where you want to display the posts
const postsContainer = document.querySelector('#postsContainer');

// Loop through each saved post and create HTML elements to display them
savedPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;
    
    const emailElement = document.createElement('h6');
    emailElement.textContent = `Written by ${post.email}`;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(emailElement);
    postElement.appendChild(contentElement);

    postsContainer.appendChild(postElement);
});

