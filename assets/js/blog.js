// Toggle between light and dark mode
const switchToggle = document.getElementById('switch-toggle');
const sunEmoji = document.getElementById('sun');
const moonEmoji = document.getElementById('moon');
const form = document.getElementById('blog-form');
const postContainer = document.getElementById('post-container');


// Function to toggle between light and dark mode
function toggleTheme() {
  if (switchToggle.checked) {
    document.body.classList.add('dark-mode');
    sunEmoji.style.display = 'none';
    moonEmoji.style.display = 'inline-block';
  } else {
    document.body.classList.remove('dark-mode');
    sunEmoji.style.display = 'inline-block';
    moonEmoji.style.display = 'none';
  }
}

// Dark mode switch event listener
switchToggle.addEventListener('change', toggleTheme);

// Function to load blog posts
function loadBlogPosts() {
  postContainer.innerHTML = '';

  const blogPosts = JSON.parse(localStorage.getItem('formData'));
  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post'); // Add class for styling
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>By ${post.username}</p>
      <p>${post.content}</p>
    `;
    postContainer.appendChild(postElement);
  });
}
loadBlogPosts()

