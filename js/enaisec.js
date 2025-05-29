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