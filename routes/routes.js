// import express
import express from "express";

// init express router
const router = express.Router();

// route
// basic router
router.get('/', (req, res) => {
    res.send(
        `<h2>Halaman utama</h2>` +
        `<h4>Hitung luas</h4>` +
        `<ul>` +
        `<li><a href="/lingkaran/10">lingkaran</a></li>` +
        `<li><a href="/segitiga/7/4">segitiga</a></li>` +
        `<li><a href="/persegipanjang/6/4">persegipanjang</a></li>` +
        `<li><a href="/persegi/5">persegi</a></li>` +
        `</ul>`
    );
});

router.get('/biodata/:nama/:kelas/:jurusan/:sekolah/:alamatS', (req, res) => {
    res.send(
        `Nama : ${req.params['nama']} <br>` +
        `Kelas : ${req.params['kelas']} <br>` +
        `Jurusan : ${req.params['jurusan']} <br>` +
        `Sekolah : ${req.params['sekolah']} <br>` +
        `Alamat Sekolah : ${req.params['alamatS']} <br>`
    );
});

router.get('/menghitung/:angka1/:angka2', (req, res) => {
    var hasil = parseInt(req.params['angka1']) + parseInt(req.params['angka2']);
    var hasil2 = parseInt(req.params['angka1']) - parseInt(req.params['angka2']);
    var hasil3 = parseInt(req.params['angka1']) * parseInt(req.params['angka2']);
    var hasil4 = parseInt(req.params['angka1']) / parseInt(req.params['angka2']);

    res.send(
        `<h2>Penjumlahan</h2>` +
        `Angka 1 : ${req.params['angka1']} <br>` +
        `Angka 2 : ${req.params['angka2']} <br>` +
        `jumlah : ${hasil} <hr>` +

        `<h2>Pengurangan</h2>` +
        `Angka 1 : ${req.params['angka1']} <br>` +
        `Angka 2 : ${req.params['angka2']} <br>` +
        `jumlah : ${hasil2} <hr>` +

        `<h2>Perkalian</h2>` +
        `Angka 1 : ${req.params['angka1']} <br>` +
        `Angka 2 : ${req.params['angka2']} <br>` +
        `jumlah : ${hasil3} <hr>` +

        `<h2>Pembagian</h2>` +
        `Angka 1 : ${req.params['angka1']} <br>` +
        `Angka 2 : ${req.params['angka2']} <br>` +
        `jumlah : ${hasil4} <hr>`
    );
});


// Hitung luas
router.get('/lingkaran/:jari', (req, res) => {
    var luas = 3.14 * parseInt(req.params.jari) * parseInt(req.params.jari);

    res.send(
        `<h2>Hitung Luas Lingkaran</h2>` +
        `Jari-jari : ${req.params.jari} <br>` +
        `Luas : ${luas}`
    );
});

router.get('/segitiga/:alas/:tinggi', (req, res) => {
    var luas = parseInt(req.params.alas) * parseInt(req.params.tinggi) / 2;

    res.send(
        `<h2>Hitung Luas Segitiga</h2>` +
        `Alas : ${req.params.alas} <br>` +
        `Tinggi : ${req.params.tinggi} <br>` +
        `Luas : ${luas}`
    );
});

router.get('/persegipanjang/:panjang/:lebar', (req, res) => {
    var luas = parseInt(req.params.panjang) * parseInt(req.params.lebar);

    res.send(
        `<h2>Hitung Luas Persegi Panjang</h2>` +
        `Panjang : ${req.params.panjang} <br>` +
        `Lebar : ${req.params.lebar} <br>` +
        `Luas : ${luas}`
    );
});

router.get('/persegi/:sisi', (req, res) => {
    var luas = parseInt(req.params.sisi) * parseInt(req.params.sisi);

    res.send(
        `<h2>Hitung Luas Persegi</h2>` +
        `Sisi : ${req.params.sisi} <br>` +
        `Luas : ${luas}`
    );
});

router.get('/penilaian/:nama/:nilai', (req, res) => {
    // let status = req.params.nilai >= 80? "Lulus" : "Tidak Lulus";

    if (req.params.nilai >= 80) {
        var status = "Lulus";
    }
    else {
        var status = "Tidak Lulus";
    }

    res.send(
        'Nama : ' + req.params.nama + '<br>' +
        'Nilai : ' + req.params.nilai + '<br>' +
        'Status : ' + status
    );
});

router.get('/sekolah/:jurusan/:kelas', (req, res) => {
    if (req.params.jurusan.toUpperCase() == "TKRO") {
        if (req.params.kelas.toUpperCase() == "X TKRO") {
            var a = "Selamat datang di kelas X TKRO";
        }
        else if (req.params.kelas.toUpperCase() == "XI TKRO") {
            var a = "Selamat datang di kelas XI TKRO";
        }
        else if (req.params.kelas.toUpperCase() == "XII TKRO") {
            var a = "Selamat datang di kelas XII TKRO";
        }
        else {
            var a = "Kelas tidak ditemukan.";
        }
    }
    else if (req.params.jurusan.toUpperCase() == "RPL") {
        if (req.params.kelas.toUpperCase() == "X RPL") {
            var a = "Selamat datang di kelas X RPL";
        }
        else if (req.params.kelas.toUpperCase() == "XI RPL") {
            var a = "Selamat datang di kelas XI RPL";
        }
        else if (req.params.kelas.toUpperCase() == "XII RPL") {
            var a = "Selamat datang di kelas XII RPL";
        }
        else {
            var a = "Kelas tidak ditemukan.";
        }
    }
    else if (req.params.jurusan.toUpperCase() == "TBSM") {
        if (req.params.kelas.toUpperCase() == "X TBSM") {
            var a = "Selamat datang di kelas X TBSM";
        }
        else if (req.params.kelas.toUpperCase() == "XI TBSM") {
            var a = "Selamat datang di kelas XI TBSM";
        }
        else if (req.params.kelas.toUpperCase() == "XII TBSM") {
            var a = "Selamat datang di kelas XII TBSM";
        }
        else {
            var a = "Kelas tidak ditemukan.";
        }
    }
    else {
        var a = "Jurusan tidak ditemukan";
    }

    res.send(
        'Jurusan : ' + req.params.jurusan.toUpperCase() + '<br>' +
        'Kelas : ' + req.params.kelas.toUpperCase() + '<br>' +
        'Pesan : ' + a + '<br>'
    );
});

router.get('/soal1/:namaPemesan/:jenisPesanan/:menu/:jumlah', (req, res) => {
    // deklarasi variabel
    let namaPemesan = req.params.namaPemesan;
    let jenisPesanan = req.params.jenisPesanan;
    let menu = req.params.menu;
    let jumlah = req.params.jumlah;

    let harga, total, potongan, totalBayar;

    let htmlTxt = '';

    // membuat logika
    if (jenisPesanan == 'makanan') {
        if (menu == 'Nasi Goreng') {
            harga = 10000
        }
        else if (menu == 'Mie Goreng') {
            harga = 20000
        }
        else if (menu == 'Ayam Goreng') {
            harga = 30000
        }
        else {
            menu += ' !! <b>Menu tidak ditemukan</b>';
        }
    }
    else if (jenisPesanan == 'minuman') {
        if (menu == 'Air Mineral') {
            harga = 5000
        }
        else if (menu == 'Fresh Tea') {
            harga = 10000
        }
        else if (menu == 'Jus') {
            harga = 15000
        }
        else {
            menu += ' !! <b>Menu tidak ditemukan</b>';
        }
    }
    else {
        jenisPesanan += " !! <b>Jenis Pesanan tidak ditemukan</b>";
    }
    total = harga * jumlah;
    potongan = (total > 100000) ? 10000 : 0;

    totalBayar = total - potongan;

    // membuat tampilan html
    htmlTxt += (
        `<table>` +
        `<tr><td>Nama Pemesan</td><td>: ${namaPemesan}</td></tr>` +
        `<tr><td>Jenis Pesanan</td><td>: ${jenisPesanan}</td></tr>` +
        `<tr><td>Menu</td><td>: ${menu}</td></tr>` +
        `</table>`
    );

    htmlTxt += '<hr>';

    htmlTxt += (
        `<table>` +
        `<tr><td>Harga</td><td>: Rp. ${harga}</td></tr>` +
        `<tr><td>Jumlah</td><td>: ${jumlah}</td></tr>` +
        `</table>`
    );

    htmlTxt += '<hr>';

    htmlTxt += (
        `<table>` +
        `<tr><td>Total</td><td>: Rp. ${total}</td><td></td></tr>` +
        `<tr><td>Potongan</td><td>: Rp. ${potongan}</td><td>` +
        `(dapat potongan jika total belanja > Rp. 100.000)` +
        `</td></tr>` +
        `</table>`
    );

    htmlTxt += '<hr>';

    htmlTxt += `<h3>Total Bayar : Rp. ${totalBayar}</h3><br>`;

    htmlTxt += `<i><b>* Terimakasih Telah Datang Di SuperWarung Kami *</b></i><br>`;

    res.send(
        `<h2>SELAMAT DATANG DI SUPERWARUNG</h2>` +
        `<b><u>Struk Pembayaran</u></b> <br><br>` +
        htmlTxt
    );
});

router.get('/soal2/:nama/:jurusan/:kelas/:nilaiIndo/:nilaiInggris/:nilaiMTK/:nilaiProduktif/:nilaiPAI', (req, res) => {
    // Deklarasi variabel
    let nama = req.params.nama;
    let jurusan = req.params.jurusan;
    let kelas = req.params.kelas;
    let nilaiIndo = parseInt(req.params.nilaiIndo);
    let nilaiInggris = parseInt(req.params.nilaiInggris);
    let nilaiMTK = parseInt(req.params.nilaiMTK);
    let nilaiProduktif = parseInt(req.params.nilaiProduktif);
    let nilaiPAI = parseInt(req.params.nilaiPAI);
    let rataRata, grade, keterangan, status;

    let htmlTxt = '';

    // Membuat logika
    rataRata = (nilaiIndo + nilaiInggris + nilaiMTK + nilaiProduktif + nilaiPAI) / 5;
    if (rataRata >= 90) {
        grade = 'A';
    }
    else if (rataRata >= 80) {
        grade = 'B';
    }
    else if (rataRata >= 70) {
        grade = 'C';
    }
    else if (rataRata >= 60) {
        grade = 'D';
    }
    else if (rataRata >= 0) {
        grade = 'E';
    }
    else {
        grade = '<b>Error . .</b>';
    }

    switch (grade) {
        case 'A':
            keterangan = 'Sangat Baik';
            break;
        case 'B':
            keterangan = 'Baik';
            break;
        case 'C':
            keterangan = 'Cukup';
            break;
        case 'D':
            keterangan = 'Kurang Baik';
            break;
        case 'E':
            keterangan = 'Sangat Kurang';
            break;

        default:
            keterangan = '<b>Error . .</b>';
            break;
    }

    status = (rataRata > 80) ? 'Lulus' : 'Tidak lulus';

    // Membuat tampilan HTML
    htmlTxt += (
        `<table>` +
        `<tr><td>Nama</td><td>: ${nama}</td></tr>` +
        `<tr><td>Jurusan</td><td>: ${jurusan}</td></tr>` +
        `<tr><td>Kelas</td><td>: ${kelas}</td></tr>` +
        `<tr><td>nilai bahasa indonesia</td><td>: ${nilaiIndo}</td></tr>` +
        `<tr><td>nilai bahasa inggris</td><td>: ${nilaiInggris}</td></tr>` +
        `<tr><td>nilai matematika</td><td>: ${nilaiMTK}</td></tr>` +
        `<tr><td>nilai produktif</td><td>: ${nilaiProduktif}</td></tr>` +
        `<tr><td>nilai PAI</td><td>: ${nilaiPAI}</td></tr>` +
        `<tr><td>rata-rata</td><td>: ${rataRata}</td></tr>` +
        `<tr><td>Grade</td><td>: ${grade}</td></tr>` +
        `<tr><td>Keterangan</td><td>: ${keterangan}</td></tr>` +
        `<tr><td>Status</td><td>: ${status}</td></tr>` +
        `</table>`
    );

    // Mengirim respon
    res.send(
        `<h2>Latihan Soal 2</h2><br>` +
        htmlTxt
    );
});

router.get('/soal2mod/:nama/:jurusan/:kelas/:nilaiIndo/:nilaiInggris/:nilaiMTK/:nilaiProduktif/:nilaiPAI', (req, res) => {
    // Deklarasi variabel
    let nama = req.params.nama;
    let jurusan = req.params.jurusan;
    let kelas = req.params.kelas;
    let nilaiIndo = parseInt(req.params.nilaiIndo);
    let nilaiInggris = parseInt(req.params.nilaiInggris);
    let nilaiMTK = parseInt(req.params.nilaiMTK);
    let nilaiProduktif = parseInt(req.params.nilaiProduktif);
    let nilaiPAI = parseInt(req.params.nilaiPAI);
    let rataRata, grade, keterangan, status,
        gradeIndo, gradeinggris, gradeMTK, gradeProduktif, gradePAI;

    let htmlTxt = '';

    // Membuat logika
    rataRata = (nilaiIndo + nilaiInggris + nilaiMTK + nilaiProduktif + nilaiPAI) / 5;
    if (rataRata >= 90) {
        grade = 'A';
    }
    else if (rataRata >= 80) {
        grade = 'B';
    }
    else if (rataRata >= 70) {
        grade = 'C';
    }
    else if (rataRata >= 60) {
        grade = 'D';
    }
    else if (rataRata >= 0) {
        grade = 'E';
    }
    else {
        grade = '<b>Error . .</b>';
    }

    switch (grade) {
        case 'A':
            keterangan = 'Sangat Baik';
            break;
        case 'B':
            keterangan = 'Baik';
            break;
        case 'C':
            keterangan = 'Cukup';
            break;
        case 'D':
            keterangan = 'Kurang Baik';
            break;
        case 'E':
            keterangan = 'Sangat Kurang';
            break;

        default:
            keterangan = '<b>Error . .</b>';
            break;
    }

    status = (rataRata > 80) ? 'Lulus' : 'Tidak lulus';

    // Membuat tampilan HTML
    let bodyHtmlTxt = (
        `<div class="container">`+
        `<table>` +
        `<tr><td>Nama</td><td>: ${nama}</td></tr>` +
        `<tr><td>Jurusan</td><td>: ${jurusan}</td></tr>` +
        `<tr><td>Kelas</td><td>: ${kelas}</td></tr>` +
        `<tr><td>nilai bahasa indonesia</td><td>: ${nilaiIndo}</td></tr>` +
        `<tr><td>nilai bahasa inggris</td><td>: ${nilaiInggris}</td></tr>` +
        `<tr><td>nilai matematika</td><td>: ${nilaiMTK}</td></tr>` +
        `<tr><td>nilai produktif</td><td>: ${nilaiProduktif}</td></tr>` +
        `<tr><td>nilai PAI</td><td>: ${nilaiPAI}</td></tr>` +
        `<tr><td>rata-rata</td><td>: ${rataRata}</td></tr>` +
        `<tr><td>Grade</td><td>: ${grade}</td></tr>` +
        `<tr><td>Keterangan</td><td>: ${keterangan}</td></tr>` +
        `<tr><td>Status</td><td>: ${status}</td></tr>` +
        `</table>`+
        `</div>`
    );

    htmlTxt += (
        `<!DOCTYPE html>`+
        `<html>`+
        `<head>`+
        `<title>Soal Latihan 2</title>`+
        `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">`+
        `</head>`+
        `<body>`+
        `${bodyHtmlTxt}`+
        `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>`+
        `</body>`+
        `</html>`
    );

    // Mengirim respon
    res.send(
        htmlTxt
    );
});

// export default router
export default router;