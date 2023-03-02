const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Simpan data ke Local Storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Alihkan ke halaman dashboard
  window.location.href = "../home/index.html";


});
