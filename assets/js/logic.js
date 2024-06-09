// Get the body tag and use the .style to change the color
// 3 and 4 show you how to change styles using javascript
// Retrieve saved posts from localStorage
const themeToggle = document.getElementById('toggleBtn');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

const backPage = document.getElementById('backBtn');

backPage.addEventListener('click', () => {
    window.location.href = 'index.html';
});