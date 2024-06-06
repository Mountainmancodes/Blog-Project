const switchToggle = document.getElementById('switch-toggle');

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


// Added to prevent when hitting sumbit on the form it does not trigger a switch from light mode to dark mode
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
 
    if (switchToggle.checked) {
      document.body.classList.add('dark-mode');
    }
  });

});