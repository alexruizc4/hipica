function load(id, file) {
  fetch(file)
  .then(res => res.text())
  .then(data => {
    document.getElementById(id).innerHTML = data;

    if (id === "footer") {
      const yearElement = document.getElementById("year");
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    }
  });
}

load("header", "partials/header.html");
load("footer", "partials/footer.html");
