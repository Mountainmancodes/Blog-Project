// // Select form input elements
// const usernameInput = document.querySelector("#username");
// const titleInput = document.querySelector("#title");
// const contentInput = document.querySelector("#content");

// // Handle form submission to save blog post data
// document
//   .querySelector(".blog-form")
//   .addEventListener("submit", function (event) {
//     // prevent page refresh from occurring
//     event.preventDefault();

//     const formData = {
//       username: usernameInput.value,
//       title: titleInput.value,
//       content: contentInput.value,
//     };

//     // Retrieve existing blog posts from localStorage
//     let storedData = JSON.parse(localStorage.getItem("formData"));
//     if (!storedData) {
//       storedData = [];
//     }

//     // Add new blog post to storedData array
//     storedData.push(formData);

//     // Save updated storedData array back to localStorage
//     localStorage.setItem("formData", JSON.stringify(storedData));
// });