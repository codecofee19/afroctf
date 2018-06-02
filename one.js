const $ = q => [...document.querySelectorAll(q)];

function login(e) {
  e.preventDefault();
  if ($('#input')[0].value === $('#enter')[0].dataset.password) {
    alert('You got it!');
    $('.hidden')[0].classList.remove('hidden');
  } else {
    alert('Try again');
  }
}

$('form')[0].addEventListener('submit', login);
$('#next')[0].addEventListener('click', () => {
    document.location = "two.html"
});