document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector('.slider-container');
    const images = sliderContainer.getElementsByTagName('img');
    let currentImageIndex = 0;

    // Fungsi untuk menampilkan gambar berikutnya
    function showNextImage() {
        // Sembunyikan gambar saat ini
        images[currentImageIndex].style.display = 'none';
        // Menghitung indeks gambar berikutnya dengan mengambil sisa pembagian dari jumlah total gambar
        currentImageIndex = (currentImageIndex + 1) % images.length;
        // Tampilkan gambar berikutnya
        images[currentImageIndex].style.display = 'block';
    }

    // Mengatur interval untuk memanggil fungsi showNextImage setiap 2000 milidetik (2 detik)
    setInterval(showNextImage, 2000);
});
