// Togle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});


function myFunction() {
  // cek apakah pengguna sudah login
  if (localStorage.getItem('username') !== null) {
    document.getElementById("pesansekarang").disabled = true; // men-disable tombol
    document.getElementById("pesansekarang").onclick = null; // mematikan link
  } else {
    // jika belum login, tampilkan peringatan
    alert("Anda harus login terlebih dahulu");
    // mengambil konfirmasi dari user melalui alert
    var confirmation = confirm("Anda perlu masuk untuk melanjutkan. Apakah Anda ingin masuk sekarang?");

    // jika pengguna mengklik OK pada alert, alihkan ke halaman login
    if (confirmation) {
      window.location.href = "../login/login.html";
    }
  }
}

function pesansekarangfunc() {
  // cek apakah pengguna sudah login
  if (localStorage.getItem('username') !== null) {
    document.getElementById("navpesansekarang").onclick = null; // mematikan link
  } else {
    // jika belum login, tampilkan peringatan
    alert("Anda harus login terlebih dahulu");
    window.location.href = "../login/login.html";
  }
}

function bookingfunc() {
  // cek apakah pengguna sudah login
  if (localStorage.getItem('username') !== null) {
    document.getElementById("navbooking").onclick = null; // mematikan link
  } else {
    // jika belum login, tampilkan peringatan
    alert("Anda harus login terlebih dahulu");
    window.location.href = "../login/login.html";
  }
}




// mengecek apakah username sudah tersimpan di storage, 
// dan menyembunyikan elemen di bawah link login
// apabila di local storage blm ada element
if (localStorage.getItem('username') !== null) {
  document.getElementById("show-login").style.display = "none";
} else {
  document.getElementById("usermasuk").style.display = "none";
  document.getElementById("logoutBtn").style.display = "none";
}

//menginputkan nama
const usernameElem = document.querySelector("#username");
const storedUsername = localStorage.getItem("username");
if (storedUsername) {
  usernameElem.textContent = storedUsername;
  document.getElementById("show-login").style.display = "none";
}


// button log out
const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click", function () {
  // Hapus data login dari Local Storage
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  document.getElementById("usermasuk").style.display = "none";
  document.getElementById("logoutBtn").style.display = "none";
  document.getElementById("show-login").style.display = "inline-block";
  // Alihkan ke halaman login
  // window.location.href = "../login/login.html";
});

var progressBar = document.querySelector('progress');
progressBar.value = 75;

