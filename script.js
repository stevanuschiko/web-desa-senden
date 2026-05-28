// Mengambil alamat link yang sedang dibuka saat ini
const path = window.location.pathname.toLowerCase();

// Jika di dalam link TIDAK ADA kata "profil", "gambar", dan "map", maka tampilkan alert.
// Ini memastikan alert hanya muncul di beranda (index.html)
if (!path.includes("profil") && !path.includes("gambar") && !path.includes("map")) {
    alert("Selamat datang di website Desa Senden");
}

// Logika untuk menampilkan dan menyembunyikan Menu Dropdown di HP
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Menambahkan/menghilangkan class 'active' pada menu
        navLinks.classList.toggle('active');
        // Menambahkan/menghilangkan class 'is-active' untuk animasi tombol "X"
        mobileMenu.classList.toggle('is-active');
    });
}
