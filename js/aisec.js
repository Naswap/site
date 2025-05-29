function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show");
}

function toggleCategories() {
  const dropdown = document.getElementById("categoryDropdown");
  dropdown.classList.toggle("open");
}

// بيانات الأدوات
const toolsData = {
  writing: [
    { name: "ChatGPT", desc: "مساعد ذكي يكتب مقالات ويجيب على الأسئلة.", link: "https://chat.openai.com ", img: "https://nassrmualla.wap.sh/images/aitool.png " },
    { name: "Copy.ai", desc: "كتابة نصوص تسويقية ومنشورات جذابة بسهولة.", link: "https://www.copy.ai ", img: "https://nassrmualla.wap.sh/images/aitool.png " }
  ],
  design: [
    { name: "Canva AI", desc: "تصميم سريع باستخدام الذكاء الاصطناعي.", link: "https://www.canva.com ", img: "https://nassrmualla.wap.sh/images/aitool.png " },
    { name: "Remove.bg", desc: "إزالة الخلفية من الصور بنقرة واحدة.", link: "https://www.remove.bg ", img: "https://nassrmualla.wap.sh/images/aitool.png " }
  ],
  video: [
    { name: "Pictory", desc: "إنشاء فيديوهات تلقائيًا من النصوص.", link: "https://pictory.ai ", img: "https://nassrmualla.wap.sh/images/aitool.png " },
    { name: "Runway ML", desc: "تحرير فيديو احترافي باستخدام أدوات الذكاء الاصطناعي.", link: "https://runwayml.com ", img: "https://nassrmualla.wap.sh/images/aitool.png " }
  ],
  audio: [
    { name: "Play.ht", desc: "أصوات واقعية متعددة اللغات وتحكم في النبرة.", link: "https://play.ht ", img: "https://nassrmualla.wap.sh/images/aitool.png " },
    { name: "Eleven Labs", desc: "تحويل النص إلى صوت واقعي جدًا مع دعم العربية.", link: "https://elevenlabs.io ", img: "https://nassrmualla.wap.sh/images/aitool.png " }
  ],
  education: [
    { name: "Khanmigo", desc: "مساعد تعليمي من خان أكاديمي.", link: "https://www.khanacademy.org/khan-labs ", img: "https://nassrmualla.wap.sh/images/aitool.png " },
    { name: "Socratic", desc: "حل المسائل الرياضية والعلمية بالذكاء الاصطناعي.", link: "https://socratic.org ", img: "https://nassrmualla.wap.sh/images/aitool.png " }
  ],
  deepfake: [
    { name: "WeVerify", desc: "كشف التزييف في الصور والفيديوهات.", link: "https://weverify.eu ", img: "https://nassrmualla.wap.sh/images/aitool.png " },
    { name: "Deepware Scanner", desc: "تحليل المقاطع الصوتية وتحديد ما إذا كانت مزيفة.", link: "https://deepware.ai ", img: "https://nassrmualla.wap.sh/images/aitool.png " }
  ]
};

function showTools(category) {
  const display = document.getElementById("toolsDisplay");
  const data = toolsData[category] || [];
  if (data.length === 0) {
    display.innerHTML = "<p>لا توجد أدوات في هذا التصنيف.</p>";
    return;
  }

  let html = '<div class="tools-grid">';
  data.forEach(tool => {
    html += `
      <div class="tool-card">
        <img src="${tool.img}" alt="${tool.name}">
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <div class="tool-button-wrapper">
          <a href="${tool.link}" target="_blank" class="tool-link">زيارة الأداة</a>
        </div>
      </div>`;
  });
  html += '</div>';
  display.innerHTML = html;

  // إغلاق القائمة بعد الاختيار
  document.getElementById("categoryDropdown").classList.remove("open");
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