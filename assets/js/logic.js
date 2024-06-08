const switchToggle = document.getElementById('switch-toggle');
const sunEmoji = document.getElementById('sun');
const moonEmoji = document.getElementById('moon');

switchToggle.addEventListener('change', function () {
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