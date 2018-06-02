const $ = q => [...document.querySelectorAll(q)];

function login(e) {
  e.preventDefault();
  if ($('#input')[0].value === $('#enter')[0].dataset.password) {
    $('.hidden').forEach(el => el.classList.remove('hidden'));
  } else {
    alert('Try again');
  }
}

$('form')[0].addEventListener('submit', login);