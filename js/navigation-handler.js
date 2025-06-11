
function navigateTo(page) {
  fetch('pages/' + page)
    .then(res => res.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    });
}
