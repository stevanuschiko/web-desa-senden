// Mengecek apakah halaman saat ini adalah beranda (index.html atau halaman utama)
const currentPath = window.location.pathname;
if (currentPath.endsWith("index.html") || currentPath.endsWith("/")) {
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
