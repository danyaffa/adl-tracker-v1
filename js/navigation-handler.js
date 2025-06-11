
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", function (e) {
    if (e.target.matches("[data-page]")) {
      const page = e.target.getAttribute("data-page");
      fetch(`pages/${page}.html`)
        .then(res => res.text())
        .then(html => {
          document.getElementById("main-content").innerHTML = html;
        });
    }
  });
});
