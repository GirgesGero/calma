/**
 * CALMA - Coworking Space & Digital Menu
 * Brand Identity UI/UX Logic
 * Features:
 * - Device-Aware Light/Dark Mode (Auto Phone/Device Sync + Manual Toggle)
 * - 100% Real, Local, High-Res Drink Images (Zero network delay)
 * - Real-time Menu Search & Category Filters
 * - 1-Click WhatsApp Reservation & Ordering
 * - Image Lightbox Modal
 */

// Official WhatsApp Phone
const WHATSAPP_PHONE = "201279874160";

// Comprehensive Menu Database with 100% Real Local Images
const MENU_DATA = [
  // --- SNACKS ---
  {
    id: 1,
    name: "أندومي",
    nameEn: "Indomie Noodles",
    category: "snacks",
    price: 20,
    badge: "الأكثر طلباً 🔥",
    image: "images/drinks/01_indomie.jpg",
    desc: "نودلز أندومي ساخنة ولذيذة متبلة ومحضرة لسد الجوع أثناء جلسات المذاكرة والعمل."
  },

  // --- HOT DRINKS ---
  {
    id: 2,
    name: "شاي كلاسيك",
    nameEn: "Classic Black Tea",
    category: "hot",
    price: 10,
    badge: "شاي مصري ☕",
    image: "images/drinks/02_tea.jpg",
    desc: "كوب شاي أحمر مصري مضبوط وساخن يروق المزاج ويزيد التركيز."
  },
  {
    id: 3,
    name: "نعناع طازج",
    nameEn: "Fresh Mint Tea",
    category: "hot",
    price: 10,
    badge: "أعشاب طبيعية 🌿",
    image: "images/drinks/03_mint.jpg",
    desc: "مشروب أوراق النعناع الأخضر الطبيعي مهدئ للأعصاب ومنعش."
  },
  {
    id: 4,
    name: "ينسون دافئ",
    nameEn: "Anise Herbal Tea",
    category: "hot",
    price: 15,
    badge: "مشروب صحي",
    image: "images/drinks/04_anise.jpg",
    desc: "ينسون طبيعي ذهبي مهدئ ومريح للحلق والصدر في ساعات العمل الطويلة."
  },
  {
    id: 5,
    name: "نسكافيه بلاك",
    nameEn: "Nescafe Black",
    category: "hot",
    price: 20,
    badge: "طاقة وتركيز ⚡",
    image: "images/drinks/05_nescafe.jpg",
    desc: "قهوة سوداء سريعة التحضير نقية ومركزة لصحوة فورية وطاقة عالية."
  },
  {
    id: 6,
    name: "كوفي ميكس",
    nameEn: "Coffee Mix 3in1",
    category: "hot",
    price: 20,
    badge: "محبوب الطلاب",
    image: "images/drinks/06_coffeemix.jpg",
    desc: "المزيج الكلاسيكي الغني من القهوة والكريمة والسكر برغوة ناعمة."
  },
  {
    id: 7,
    name: "قهوة تركي",
    nameEn: "Turkish Coffee",
    category: "hot",
    price: 25,
    badge: "بوش مظبوط ☕",
    image: "images/drinks/07_turkish_coffee.jpg",
    desc: "فنجان قهوة تركي ببن محوج طازج ورغوة غنية للمزاج العالي."
  },
  {
    id: 8,
    name: "كوفي بريك",
    nameEn: "Coffee Break Blend",
    category: "hot",
    price: 25,
    badge: "تجديد النشاط",
    image: "images/drinks/08_coffeebreak.jpg",
    desc: "مشروب قهوة متوازن وممتع لأخذ استراحة تجدد حماسك بين المهام."
  },
  {
    id: 9,
    name: "هوت شوكليت",
    nameEn: "Rich Hot Chocolate",
    category: "hot",
    price: 25,
    badge: "شوكولاتة دافئة 🍫",
    image: "images/drinks/09_hot_chocolate.jpg",
    desc: "شوكولاتة ساخنة فاخرة بقوام كريمي تمنحك الدفء والسعادة."
  },
  {
    id: 10,
    name: "كافيه لاتيه",
    nameEn: "Café Latte",
    category: "hot",
    price: 25,
    badge: "حليب ناعم",
    image: "images/drinks/10_latte.jpg",
    desc: "إسبريسو غني مع حليب مبخر مخملي ولمسة فوم فاخرة."
  },
  {
    id: 11,
    name: "كابتشينو موكا",
    nameEn: "Cappuccino Mocha",
    category: "hot",
    price: 30,
    badge: "المشروب الفاخر ⭐",
    image: "images/drinks/11_cappuccino_mocha.jpg",
    desc: "مزيج فاخر بين رغوة الكابتشينو الكثيفة وصوص الشوكولاتة الذائب."
  },

  // --- COLD DRINKS ---
  {
    id: 12,
    name: "مياه معدنية",
    nameEn: "Mineral Water",
    category: "cold",
    price: 10,
    badge: "نقاء وانتعاش",
    image: "images/drinks/12_water.jpg",
    desc: "زجاجة مياه نقية وباردة لترطيب دائم أثناء ساعات العمل."
  },
  {
    id: 13,
    name: "عصير فواكه طازج",
    nameEn: "Fresh Fruit Juice",
    category: "cold",
    price: 20,
    badge: "فيتامينات طبيعية 🍊",
    image: "images/drinks/13_juice.jpg",
    desc: "عصير فواكه طبيعي مثلج ومنعش يمدك بالطاقة والنشاط الفوري."
  },
  {
    id: 14,
    name: "لبن طازج",
    nameEn: "Fresh Milk",
    category: "cold",
    price: 25,
    badge: "صحي ومغذي 🥛",
    image: "images/drinks/14_milk.jpg",
    desc: "حليب طازج ونقي بارد ومغذي لصفاء الذهن وصحة الجسم."
  },
  {
    id: 15,
    name: "بيبسي مثلج",
    nameEn: "Pepsi Cold Can",
    category: "cold",
    price: 25,
    badge: "صودا مثلجة 🧊",
    image: "images/drinks/15_pepsi.jpg",
    desc: "كانز بيبسي مثلج مع قطع الثلج والانتعاش الكلاسيكي المحبوب."
  },
  {
    id: 16,
    name: "ميرندا برتقال",
    nameEn: "Mirinda Orange Soda",
    category: "cold",
    price: 25,
    badge: "طعم البرتقال الفوار",
    image: "images/drinks/16_mirinda.jpg",
    desc: "صودا فوارة بنكهة البرتقال الغنية والمنعشة مع الثلج."
  },
  {
    id: 17,
    name: "سبرايت ليمون",
    nameEn: "Sprite Lemon-Lime",
    category: "cold",
    price: 25,
    badge: "ليمون فريش 🍋",
    image: "images/drinks/17_sprite.jpg",
    desc: "مشروب صودا شفاف بالليمون المنعش يروي العطش تماماً."
  },
  {
    id: 18,
    name: "كوكاكولا",
    nameEn: "Coca-Cola Cold",
    category: "cold",
    price: 25,
    badge: "طعم كلاسيك",
    image: "images/drinks/18_coca_cola.jpg",
    desc: "كوكاكولا مثلجة بالصودا القوية ترفع الحماس والتركيز."
  },
  {
    id: 19,
    name: "فيروز أناناس / شعير",
    nameEn: "Fayrouz Malt Drink",
    category: "cold",
    price: 30,
    badge: "شعير فاخر 🍍",
    image: "images/drinks/19_fayrouz.jpg",
    desc: "مشروب شعير فوار منعش بنكهة الأناناس خالي تماماً من الكحول."
  },
  {
    id: 20,
    name: "شويبس جولد / نكهات",
    nameEn: "Schweppes Tonic / Gold",
    category: "cold",
    price: 30,
    badge: "نكهة مميزة",
    image: "images/drinks/20_schweppes.jpg",
    desc: "شويبس بنكهات منعشة فوارة تضفي حيوية وأناقة على يومك."
  },
  {
    id: 21,
    name: "تويست حمضيات",
    nameEn: "Twist Citrus Soda",
    category: "cold",
    price: 30,
    badge: "حمضيات منعشة",
    image: "images/drinks/21_twist.jpg",
    desc: "مشروب فوار خفيف بنكهة حمضيات وفواكه مثلجة ترفع طاقتك."
  },
  {
    id: 22,
    name: "فيوري إنيرجي",
    nameEn: "Fury Energy Drink",
    category: "cold",
    price: 30,
    badge: "طاقة قصوى ⚡",
    image: "images/drinks/22_fury.jpg",
    desc: "مشروب طاقة لليالي السهر وتسليم المشاريع والمذاكرة المكثفة."
  },
  {
    id: 23,
    name: "راني حبيبات",
    nameEn: "Rani Float Juice",
    category: "cold",
    price: 30,
    badge: "قطع فواكه طبيعية 🍑",
    image: "images/drinks/23_rani.jpg",
    desc: "عصير خوخ وبرتقال غني بقطع وحبيبات الفاكهة الطبيعية اللذيذة."
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initNavbar();
  renderMenu('all', '');
  initMenuFilters();
  initMenuSearch();
  initReservationGenerator();
  initLightbox();
  initCinematicHero();
  initScrollAnimations();
});

/* ==========================================================
   Device-Aware Theme Manager (System Sync + Manual Toggle)
   ========================================================== */
function initThemeManager() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getEffectiveTheme() {
    const currentStored = localStorage.getItem('calma_theme');
    if (currentStored === 'dark' || currentStored === 'light') {
      return currentStored;
    }
    return systemPrefersDark.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const currentStored = localStorage.getItem('calma_theme');
    if (currentStored) {
      document.documentElement.setAttribute('data-theme', currentStored);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    if (!themeBtn) return;
    const icon = themeBtn.querySelector('i');
    if (!icon) return;

    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      themeBtn.setAttribute('title', 'التحويل للوضع الفاتح');
      themeBtn.setAttribute('aria-label', 'التحويل للوضع الفاتح');
    } else {
      icon.className = 'fas fa-moon';
      themeBtn.setAttribute('title', 'التحويل للوضع المظلم');
      themeBtn.setAttribute('aria-label', 'التحويل للوضع المظلم');
    }
  }

  // Initial application
  applyTheme(getEffectiveTheme());

  // Listen to Phone / Device OS theme changes in real-time
  systemPrefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('calma_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Manual toggle click handler
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = getEffectiveTheme();
      const newTheme = current === 'dark' ? 'light' : 'dark';

      localStorage.setItem('calma_theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

/* ==========================================================
   Navigation Bar & Mobile Drawer Management
   ========================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const desktopNavLinks = document.querySelectorAll('.nav-links a');

  // Navbar scroll background transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Open Drawer Function
  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    if (toggleBtn) toggleBtn.classList.add('active');
    document.body.classList.add('drawer-locked');
  }

  // Close Drawer Function
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    if (toggleBtn) toggleBtn.classList.remove('active');
    document.body.classList.remove('drawer-locked');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Handle drawer link clicks (close drawer and update active state)
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
      drawerLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach(a => {
          if (a.getAttribute('href') === `#${sectionId}`) {
            a.classList.add('active');
          } else {
            a.classList.remove('active');
          }
        });
        drawerLinks.forEach(a => {
          if (a.getAttribute('href') === `#${sectionId}`) {
            a.classList.add('active');
          } else {
            a.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* ==========================================================
   Menu Rendering & Filtering
   ========================================================== */
function renderMenu(category = 'all', searchQuery = '') {
  const menuContainer = document.getElementById('menu-items-grid');
  if (!menuContainer) return;

  const query = searchQuery.trim().toLowerCase();

  const filtered = MENU_DATA.filter(item => {
    const matchCategory = (category === 'all') || (item.category === category);
    const matchSearch = query === '' || 
      item.name.toLowerCase().includes(query) || 
      item.nameEn.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    menuContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--brand-gold); margin-bottom: 14px; display: block;"></i>
        <h3 style="font-size: 1.3rem; color: var(--text-main); margin-bottom: 6px;">لا توجد عناصر مطابقة لبحثك</h3>
        <p>جرّب البحث باسم آخر أو اختر قسماً من الأزرار بالأعلى.</p>
      </div>
    `;
    return;
  }

  menuContainer.innerHTML = filtered.map(item => `
    <div class="menu-card" data-category="${item.category}">
      <div class="menu-img-wrap" data-lightbox="${item.image}">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="menu-price-tag">${item.price} ج.م</span>
        <span class="menu-badge-tag">${item.badge}</span>
      </div>
      <div class="menu-info">
        <div>
          <h3 class="menu-title">${item.name}</h3>
          <div class="menu-sub">${item.nameEn}</div>
        </div>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">${item.desc}</p>
      <div class="menu-action">
        <a href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`مرحباً مساحة CALMA، أود طلب (${item.name} - ${item.price} ج.م) مع الحجز.`)}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn-order-wa">
          <i class="fab fa-whatsapp"></i> اطلب مع الحجز
        </a>
      </div>
    </div>
  `).join('');

  // Re-bind lightboxes for menu images
  initMenuLightboxes();
}

function initMenuFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('menu-search');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      const query = searchInput ? searchInput.value : '';
      renderMenu(cat, query);
    });
  });
}

function initMenuSearch() {
  const searchInput = document.getElementById('menu-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeBtn = document.querySelector('.filter-btn.active');
    const cat = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    renderMenu(cat, e.target.value);
  });
}

/* ==========================================================
   WhatsApp Reservation Generator
   ========================================================== */
function initReservationGenerator() {
  const typeSelect = document.getElementById('res-type');
  const guestsSelect = document.getElementById('res-guests');
  const drinkSelect = document.getElementById('res-drink');
  const notesInput = document.getElementById('res-notes');
  const previewBox = document.getElementById('res-preview-text');
  const submitBtn = document.getElementById('res-submit-btn');

  // Populate drinks select
  if (drinkSelect) {
    drinkSelect.innerHTML = `
      <option value="بدون طلب مسبق">سأختار عند الوصول</option>
      ${MENU_DATA.map(d => `<option value="${d.name} (${d.price} ج.م)">${d.name} - ${d.price} ج.م</option>`).join('')}
    `;
  }

  function updatePreview() {
    const type = typeSelect ? typeSelect.value : 'مقعد فردي بمساحة العمل المشتركة';
    const guests = guestsSelect ? guestsSelect.value : '1 فرد';
    const drink = drinkSelect ? drinkSelect.value : 'سأختار عند الوصول';
    const notes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : 'لا توجد ملاحظات إضافية';

    const message = `مرحباً مساحة CALMA 🌿\nأود تأكيد حجز جديد:\n• نوع المساحة: ${type}\n• عدد الأفراد: ${guests}\n• المشروب المفضل: ${drink}\n• ملاحظات: ${notes}`;

// Security Helper: Escape HTML to prevent DOM XSS vulnerabilities
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

    if (previewBox) {
      previewBox.innerHTML = `
        <strong>معاينة الرسالة:</strong><br>
        مرحباً مساحة CALMA 🌿<br>
        أود حجز: <span>${escapeHtml(type)}</span> (${escapeHtml(guests)})<br>
        المشروب: <span>${escapeHtml(drink)}</span><br>
        ملاحظات: ${escapeHtml(notes)}
      `;
    }

    if (submitBtn) {
      submitBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    }
  }

  [typeSelect, guestsSelect, drinkSelect, notesInput].forEach(elem => {
    if (elem) {
      elem.addEventListener('change', updatePreview);
      elem.addEventListener('input', updatePreview);
    }
  });

  updatePreview();
}

/* ==========================================================
   Image Lightbox Modal
   ========================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  if (!modal || !modalImg) return;

  initMenuLightboxes();

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

function initMenuLightboxes() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  if (!modal || !modalImg) return;

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.style.cursor = 'pointer';
    el.onclick = (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-lightbox') || el.getAttribute('src');
      modalImg.src = src;
      modal.classList.add('active');
    };
  });
}

/* ==========================================================
   Cinematic Hero Engine (Golden Particle Embers & Parallax)
   ========================================================== */
function initCinematicHero() {
  const canvas = document.getElementById('hero-particles');
  const heroSection = document.getElementById('home');
  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let animationFrameId;
  let isVisible = true;

  // Mouse tracking for subtle interactive deflection
  const mouse = { x: null, y: null };

  function resizeCanvas() {
    width = canvas.width = heroSection.offsetWidth;
    height = canvas.height = heroSection.offsetHeight;
  }

  // Particle Class: Golden glowing embers & dust motes
  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + Math.random() * 20;
      this.radius = Math.random() * 2.2 + 0.6; // between 0.6 and 2.8px
      this.speedY = Math.random() * 0.45 + 0.18; // slow upward drift
      this.speedX = (Math.random() - 0.5) * 0.28; // gentle horizontal drift
      this.baseAlpha = Math.random() * 0.5 + 0.25; // 0.25 to 0.75
      this.alpha = this.baseAlpha;
      this.pulseSpeed = Math.random() * 0.02 + 0.008;
      this.pulsePhase = Math.random() * Math.PI * 2;
      
      const hues = [
        'rgba(212, 175, 55,',   // #D4AF37 Royal Champagne Gold
        'rgba(245, 208, 97,',   // #F5D061 Radiant Gold Shimmer
        'rgba(255, 242, 205,',  // Luminous Diamond Sparkle
        'rgba(224, 109, 59,'    // Radiant Amber Warmth
      ];
      this.colorPrefix = hues[Math.floor(Math.random() * hues.length)];
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.pulsePhase) * 0.22;
      this.pulsePhase += this.pulseSpeed;
      this.alpha = this.baseAlpha * (0.6 + 0.4 * Math.sin(this.pulsePhase));

      // Subtle mouse deflection
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const force = (110 - dist) / 110;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }

      // Reset when reaching top or out of bounds
      if (this.y < -15 || this.x < -30 || this.x > width + 30) {
        this.reset(false);
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${this.colorPrefix} ${this.alpha})`;
      ctx.shadowBlur = this.radius * 3;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.35)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    resizeCanvas();
    const particleCount = Math.min(Math.floor(width / 25), 50); // max 50 particles for performance
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    if (!isVisible) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
  }, { passive: true });

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  heroSection.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Pause canvas when out of viewport to preserve 0% battery/CPU waste
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!isVisible) {
          isVisible = true;
          animate();
        }
      } else {
        isVisible = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    });
  }, { threshold: 0.05 });

  heroObserver.observe(heroSection);

  initParticles();
  animate();

  initCard3DTilt();
}

function initCard3DTilt() {
  const cards = document.querySelectorAll('.cinema-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ==========================================================
   Scroll Reveal Animations
   ========================================================== */
function initScrollAnimations() {
  const cards = document.querySelectorAll('.service-card, .social-card, .menu-card, .pillar-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}
