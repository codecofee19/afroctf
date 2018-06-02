const $ = q => [...document.querySelectorAll(q)];

function check(e) {
  e.preventDefault();
  if ($('#ipaddr')[0].value === '162.89.4.49') {
    alert('You got it!');
    $('.hidden')[0].classList.remove('hidden');
  } else {
    alert('Try again');
  }
}

$('form')[0].addEventListener('submit', check);
$('#next')[0].addEventListener('click', () => {
    document.location = "three.html"
});