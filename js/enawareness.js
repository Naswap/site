    window.onload = function () {
      setTimeout(() => {
        const welcome = document.getElementById('welcome');
        if (welcome) {
          welcome.classList.add('fade-out');
          setTimeout(() => {
            welcome.style.display = 'none';
          }, 1000);
        }
      }, 2000);
    };

    function filterPosts(category, element) {
      const posts = document.querySelectorAll('.post');
      posts.forEach(post => {
        post.style.display = (category === 'all' || post.classList.contains(category)) ? 'block' : 'none';
      });

      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      element.classList.add('active');
    }

    function openModal(title, content) {
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalBody').innerHTML = content;
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
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