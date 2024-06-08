const form = document.getElementById('blog-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usernameInput = document.querySelector("#username");
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");

   // Validate form inputs
   if (!usernameInput.value || !titleInput.value || !contentInput.value) {
    alert("Please complete all fields before submitting the form.");
    return; // Prevent form submission if any fields are empty
}


    const formData = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };


  // Safely retrieve or initialize storedData as an array
let storedData = [];
if (localStorage.getItem("formData")) {
    const retrievedData = localStorage.getItem("formData");
    // Check if retrievedData is valid JSON and an array before parsing
    if (retrievedData && retrievedData.startsWith('[') && retrievedData.endsWith(']')) {
        storedData = JSON.parse(retrievedData);
    }
}


    storedData.push(formData);
    localStorage.setItem("formData", JSON.stringify(storedData));
    console.log("Stored Data:", storedData);

    // Clear form fields after submission
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';

    window.location.href = "blog.html"; 
});