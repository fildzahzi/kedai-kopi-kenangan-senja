var kopi = document.getElementById('kopi');
var i = 0;

function kopiku() {
  namakopi = document.getElementById('nama').value;
  hargakopi = document.getElementById('harga').value;
  gambarkopi = document.getElementById('gambar').value;
  i++;
  kopi.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-6 coll-12">
  <img
    src="` + gambarkopi + `"
    alt="Americano" class="img-fluid">
  <h3 class="mt-3" id="menu1">` +
    namakopi +
    `</h3>
  <p> Rp` +
    hargakopi + `
  </p>
  <p>
    <!-- <p> <a href="# class="btn btn-prmary w-100" </p> -->
    <a href="#" class="btn-view-details btn btn-primary w-100">Selengkapnya</a>
  </p>
  <p>
    <!-- a href="#" class="btn btn-primary w-100" -->
    <a href="#" class="btn btn-secondary w-100">Beli</a>
  </p>
</div>`;

  namakopi = document.getElementById('nama').value = ''
  hargakopi = document.getElementById('harga').value = ''
  gambarkopi = document.getElementById('gambar').value = ''

}