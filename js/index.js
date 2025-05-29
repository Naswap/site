<script>
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show");
}
 function toggleLanguageMenu() {
    var menu = document.getElementById("languageMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }

  // إخفاء القائمة عند النقر خارجها
  document.addEventListener("click", function(e) {
    var menu = document.getElementById("languageMenu");
    var button = document.querySelector(".language-selector button");
    if (!button.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });
document.querySelector(".button").addEventListener("click", function(event) {
        event.preventDefault(); // منع السلوك الافتراضي للزر

        setTimeout(function() {
            window.location.href = "https://www.raed.net/download?fileid=1338851";
        }, 1000); // تحديد الفاصل الزمني (1000 مللي ثانية = ثانية واحدة)
    });
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('click', function () {
      const loader = this.querySelector('.loader');
      const link = this.getAttribute('data-link');

      // إظهار مؤشر التحميل
      loader.style.display = 'block';

      // إخفاء الأيقونة والنص أثناء التحميل
      this.querySelector('i').style.opacity = '0';
      this.querySelector('.glass-card-title').style.opacity = '0';

      // إخفاء المؤشر وفتح الرابط بعد 1 ثانية
      setTimeout(() => {
        loader.style.display = 'none';
        this.querySelector('i').style.opacity = '1';
        this.querySelector('.glass-card-title').style.opacity = '1';
        window.open(link, '_blank');
      }, 1000);
    });
  });
</script>