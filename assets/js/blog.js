const switchToggle = document.getElementById('switch-toggle');
const form = document.getElementById('blog-form');
const postContainer = document.getElementById('post-container');

// Dark mode switch event listener
switchToggle.addEventListener('change', function () {
  const sunEmoji = document.getElementById('sun');
  const moonEmoji = document.getElementById('moon');
  if (switchToggle.checked) {
    document.body.classList.add('dark-mode');
    sunEmoji.style.display = 'none';
    moonEmoji.style.display = 'inline-block';
  } else {
    document.body.classList.remove('dark-mode');
    sunEmoji.style.display = 'inline-block';
    moonEmoji.style.display = 'none';
  }
});

// Form submission event listener
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Create a new blog post element
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  postElement.innerHTML = `
    <h3>Posted by: ${username}</h3>
    <h2>${title}</h2>
    <p>${content}</p>
  `;

  postContainer.prepend(postElement);

  // Clear form inputs after submission
  document.getElementById('username').value = '';
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  // Additional logic for storing post data (if needed)
  const postData = {
    username,
    title,
    content
  };

  // Retrieve existing data from localStorage
  let storedData = JSON.parse(localStorage.getItem("formData"));
  if (!storedData) {
    storedData = [];
  }

  // Add new data to the storedData array
  storedData.push(postData);

  // Update localStorage with the new data
  localStorage.setItem("formData", JSON.stringify(storedData));

  // Redirect to blog.html after processing
  window.location.href = "blog.html";
});

// Display stored data from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
  // Loop through each stored data and display it in the browser
  let storedData = JSON.parse(localStorage.getItem("formData"));
  if (storedData) {
    for (let i = 0; i < storedData.length; i++) {
      const post = storedData[i];
      const postDiv = document.createElement("div");

      postDiv.classList.add("post");

      const postContent = `<h2>${post.title}</h2>
      <h3>${post.username}</h3>
      <p>${post.content}</p>`;

      postDiv.innerHTML = postContent;
      postContainer.appendChild(postDiv);
    }
  }
});