const pesanbooking = document.querySelector("#pesan");
pesanbooking.addEventListener("click", function (e) {
  e.preventDefault();

  var nama = document.getElementById("nama").value;
  localStorage.setItem("nama", nama);

  var nomor = document.getElementById("nomor").value;
  localStorage.setItem("nomor", nomor);

  var tanggal = document.getElementById("tanggal").value;
  localStorage.setItem("tanggal", tanggal);

  var waktu = document.getElementById("waktu").value;
  localStorage.setItem("waktu", waktu);

  var tamu = document.getElementById("tamu").value;
  localStorage.setItem("tamu", tamu);

  var dropdown = document.getElementById("myDropdown");
  var selectedValue = dropdown.options[dropdown.selectedIndex].value;
  localStorage.setItem("selectedValue", selectedValue);

  var text = document.getElementById("text").value;
  localStorage.setItem("text", text);

  // Alihkan ke halaman dashboard
  window.location.href = "../formbooking/formbooking.html";
});









