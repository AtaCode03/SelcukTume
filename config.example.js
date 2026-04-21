// config.example.js — SAFE TO COMMIT. Contains no real secrets.
// CI/CD: GitHub Actions bu dosyayı kopyalayıp placeholder'ları GitHub Secrets ile değiştirir.
// Lokal kullanım: Bu dosyayı config.js olarak kopyala ve değerleri kendin doldur.
window.TUME_CONFIG = {
    EMAILJS_PUBLIC_KEY:  "REPLACE_WITH_PUBLIC_KEY",   // GitHub Secret: EMAILJS_PUBLIC_KEY
    EMAILJS_SERVICE_ID:  "REPLACE_WITH_SERVICE_ID",   // GitHub Secret: EMAILJS_SERVICE_ID
    EMAILJS_TEMPLATE_ID: "REPLACE_WITH_TEMPLATE_ID",  // GitHub Secret: EMAILJS_TEMPLATE_ID
};
