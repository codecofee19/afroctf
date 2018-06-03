const $ = q => [...document.querySelectorAll(q)];

function check(e) {
  e.preventDefault();
  const email = $('#email')[0].value;
  const msg = "Thanks for signing up. We sent an email to " + email;
  const output = $('#output')[0].innerHTML = msg;

  if (msg.indexOf("alert('hi')") >= 0) {
    $('.hidden').forEach(el => el.classList.remove('hidden'));
    alert('hi');
  }
}

$('form')[0].addEventListener('submit', check);