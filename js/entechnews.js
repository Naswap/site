  function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
  }

  const sources = [
    'https://api.rss2json.com/v1/api.json?rss_url=https://aitnews.com/feed',
    'https://api.rss2json.com/v1/api.json?rss_url=https://www.tech-wd.com/wd/feed',
    'https://api.rss2json.com/v1/api.json?rss_url=https://www.aljazeera.net/xml/rss/science.xml'
  ];

  const allItems = [];

  Promise.all(sources.map(src => fetch(src).then(res => res.json())))
    .then(results => {
      results.forEach(data => {
        if (data.items) {
          allItems.push(...data.items.slice(0, 10));
        }
      });

      allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

      const newsContainer = document.getElementById('news');

document.getElementById('loading-message').style.display = 'none';

      allItems.slice(0, 15).forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
          <a href="${item.link}" target="_blank" style="text-decoration:none; color:inherit">
            <img src="${item.thumbnail || 'https://via.placeholder.com/300x200'}" alt="صورة الخبر" />
            <div class="news-content">
              <h3>${item.title}</h3>
              <p>${item.description.slice(0, 80)}...</p>
            </div>
          </a>
        `;
        newsContainer.appendChild(card);
      });
    });

  window.addEventListener('click', function(e) {
    const menu = document.getElementById('dropdownMenu');
    const btn = document.getElementById('dropdownBtn');
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('show');
    }
  });