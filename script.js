// ============================================================
// script.js  –  DR BONDAN  |  نظام متعدد الصفحات (SPA)
// دعم ثنائي اللغة (العربية / الإنجليزية) – لا يدعم النسخ أبداً
// ============================================================

// ========== قواميس الترجمة ==========
const translations = {
    ar: {
        preloader_text: 'جارٍ تهيئة البيئة الآمنة...',
        tagline: '[ بوابة التحميل الآمنة ]',
        server_status: 'SERVER: ONLINE',
        home_crumb: 'الرئيسية',
        term_line2: 'جاري فهرسة التطبيقات المتاحة...',
        term_line3: '✓ تم العثور على تطبيقات جاهزة للتحميل.',
        search_placeholder: '🔍 ابحث عن تطبيق...',
        sort_default: 'ترتيب افتراضي',
        sort_name: 'الاسم (أ-ي)',
        sort_rating: 'التقييم (تنازلي)',
        sort_size: 'الحجم (تصاعدي)',
        apps_section_title: 'التطبيقات المتاحة',
        no_results: 'لا توجد تطبيقات مطابقة لبحثك.',
        verified_badge: '✓ تم التحقق',
        detail_button: 'عرض التفاصيل',
        back_to_list: '← العودة للقائمة',
        go_download: 'الذهاب للتحميل',
        browse_other: 'تطبيقات أخرى',
        download_summary_text: 'اختر أحد خوادم التحميل الآمنة أدناه',
        server_title: 'خوادم التحميل المتاحة',
        download_btn: 'تحميل الآن',
        file_info_name: 'الاسم',
        file_info_size: 'الحجم',
        file_info_category: 'التصنيف',
        file_info_encryption: 'التشفير',
        file_info_status: 'الحالة',
        file_info_secure: '✓ آمن وجاهز',
        requirements_title: 'متطلبات التشغيل',
        toast_default: 'تم بنجاح',
        footer_rights: 'جميع الحقوق محفوظة.',
        footer_sub: 'لا يُسمح بإعادة التوزيع دون إذن // SECURE LINE // ALL RIGHTS RESERVED',
    },
    en: {
        preloader_text: 'Initializing secure environment...',
        tagline: '[ SECURE DOWNLOAD PORTAL ]',
        server_status: 'SERVER: ONLINE',
        home_crumb: 'Home',
        term_line2: 'Indexing available applications...',
        term_line3: '✓ Applications ready for download.',
        search_placeholder: 'Search apps...',
        sort_default: 'Default order',
        sort_name: 'Name (A-Z)',
        sort_rating: 'Rating (High-Low)',
        sort_size: 'Size (Low-High)',
        apps_section_title: 'Available Applications',
        no_results: 'No apps match your search.',
        verified_badge: '✓ Verified',
        detail_button: 'Details',
        back_to_list: '← Back to list',
        go_download: 'Go to Download',
        browse_other: 'Browse other apps',
        download_summary_text: 'Choose one of the secure download servers below',
        server_title: 'Available Download Servers',
        download_btn: 'Download Now',
        file_info_name: 'Name',
        file_info_size: 'Size',
        file_info_category: 'Category',
        file_info_encryption: 'Encryption',
        file_info_status: 'Status',
        file_info_secure: '✓ Secure & Ready',
        requirements_title: 'System Requirements',
        toast_default: 'Success',
        footer_rights: 'All rights reserved.',
        footer_sub: 'Redistribution prohibited without permission // SECURE LINE',
    }
};

// ========== الإعدادات العامة ==========
let currentLang = 'ar'; // اللغة الافتراضية العربية

// ========== بيانات التطبيقات (مع روابط الصور) ==========
const appConfig = [
    {
        id: 1,
        name: 'DR HACKS 32-bit v4.4',
        imageUrl: 'https://dr-app-an56.onrender.com/image/IMG_20260614_131700_956.jpg',
        version: 'v3.2.1',
        size: '48.5 MB',
        category: { ar: 'بوبجي', en: 'PUBG' },
        shortDesc: { ar: 'أداة اختبار الاختراق المتقدمة – نسخة احترافية.', en: 'Advanced penetration testing tool – professional edition.' },
        fullDesc: {
            ar: 'أداة DR BONDAN Tool Pro هي الحزمة المتكاملة لاختبار الاختراق الأخلاقي. تجمع بين ماسح الثغرات، ومحلل الشبكات، وأداة فحص المنافذ في واجهة موحدة.',
            en: 'DR BONDAN Tool Pro is the integrated suite for ethical hacking. It combines vulnerability scanner, network analyzer, and port scanner in a unified interface.'
        },
        features: {
            ar: ['مسح شامل للمنافذ والخدمات', 'تحليل ثغرات OWASP Top 10', 'توليد تقارير PDF/HTML', 'واجهة أوامر طرفية مدمجة', 'دعم الإضافات الخارجية'],
            en: ['Comprehensive port & service scan', 'OWASP Top 10 vulnerability analysis', 'PDF/HTML report generation', 'Built-in terminal command interface', 'External plugin support']
        },
        requirements: { ar: 'Windows 10/11 | Linux Kernel 5.x+ | RAM 4GB | مساحة 200MB', en: 'Windows 10/11 | Linux Kernel 5.x+ | RAM 4GB | Space 200MB' },
        rating: '4.9',
        downloadLinks: [
            { label:'كورية', url:'https://example.com/dl/dr-bondan-tool-pro-v3.2.1.zip', speed:'⚡ فائقة', location:'🇩🇪 Frankfurt', recommended:true, hash:'MD5: a1b2c3...' },
            { label:'ملف كورية', url:'https://mirror2.example.com/dl/dr-bondan-tool-pro-v3.2.1.zip', speed:'🚀 عالية', location:'🇺🇸 New York', recommended:false, hash:'SHA256: 7f8e...' },
            { label:'تايوانيه', url:'https://mirror2.example.com/dl/dr-bondan-tool-pro-v3.2.1.zip', speed:'🛡️ آمن', location:'🇸🇬 Singapore', recommended:false, hash:'SHA1: 3f4e...' },
            { label:'ملف تايوانيه', url:'https://mirror2.example.com/dl/dr-bondan-tool-pro-v3.2.1.zip', speed:'🛡️ آمن', location:'🇸🇬 Singapore', recommended:false, hash:'SHA1: 3f4e...' }
        ]
    },
    {
        id: 2,
        name: 'Shadow Scanner X',
        imageUrl: 'https://picsum.photos/seed/shadowscan/600/400',
        version: 'v2.0.4',
        size: '32.1 MB',
        category: { ar: 'ماسح ثغرات', en: 'Vulnerability Scanner' },
        shortDesc: { ar: 'ماسح ثغرات ذكي يعمل بالذكاء الاصطناعي.', en: 'AI-powered intelligent vulnerability scanner.' },
        fullDesc: { ar: 'ماسح ثغرات من الجيل التالي يستخدم تقنيات الذكاء الاصطناعي للكشف عن الثغرات الأمنية.', en: 'Next-gen vulnerability scanner using AI techniques for security flaw detection.' },
        features: { ar: ['كشف ثغرات بالذكاء الاصطناعي', 'مسح تطبيقات الويب', 'وضع التخفي', 'جدولة تلقائية'], en: ['AI-based vulnerability detection', 'Web app scanning', 'Stealth mode', 'Auto scheduling'] },
        requirements: { ar: 'Windows 10+ | RAM 8GB | مساحة 500MB', en: 'Windows 10+ | RAM 8GB | Space 500MB' },
        rating: '4.7',
        downloadLinks: [
            { label:'الخادم الرئيسي', url:'https://example.com/dl/shadow-scanner-x.zip', speed:'⚡ فائقة', location:'🇩🇪 Frankfurt', recommended:true, hash:'MD5: f1e2...' },
            { label:'الرابط البديل 2', url:'https://mirror2.example.com/dl/shadow-scanner-x.zip', speed:'🚀 عالية', location:'🇺🇸 New York', recommended:false, hash:'SHA256: 9a8b...' }
        ]
    }
];

// ============================================================
// Preloader
// ============================================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 600);
});

// ============================================================
// Particles Canvas
// ============================================================
(function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    const particles = [];
    const maxParticles = 65;

    function resizeCanvas() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() { this.reset(true); }
        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 10;
            this.size = Math.random() * 2 + 0.4;
            this.speedY = -(Math.random() * 0.55 + 0.15);
            this.speedX = (Math.random() - 0.5) * 0.25;
            this.opacity = Math.random() * 0.55 + 0.15;
            this.life = 1;
            this.decay = Math.random() * 0.0025 + 0.0008;
        }
        update() {
            this.y += this.speedY; this.x += this.speedX; this.life -= this.decay;
            if (this.y < -10 || this.life <= 0) this.reset();
        }
        draw(ctx) {
            const alpha = this.opacity * this.life;
            ctx.fillStyle = `rgba(200,0,0,${alpha})`;
            ctx.shadowBlur = 5; ctx.shadowColor = `rgba(255,0,0,${alpha})`;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
    for (let i=0; i<maxParticles; i++) particles.push(new Particle());
    function animate() { ctx.clearRect(0,0,width,height); particles.forEach(p=>{ p.update(); p.draw(ctx); }); requestAnimationFrame(animate); }
    animate();
})();

// ============================================================
// الوقت والسنة
// ============================================================
function updateTime() {
    const now = new Date();
    const el = document.getElementById('currentTime');
    if(el) el.textContent = '⏱ ' + now.toLocaleTimeString('en-US', {hour12: false});
}
updateTime(); setInterval(updateTime, 1000);
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// إدارة اللغة
// ============================================================
function applyLanguage(lang) {
    currentLang = lang;
    // تحديث اتجاه الصفحة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // تحديث زر اللغة
    document.getElementById('langToggle').textContent = lang === 'ar' ? '🌐 EN' : '🌐 AR';
    // تحديث النصوص الثابتة
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // تحديث النص المؤقت (placeholder)
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    // تحديث صفحة التطبيقات والتفاصيل والتحميل إذا كانت معروضة
    if (document.getElementById('page-home').classList.contains('active')) {
        renderAppCards();
    } else if (document.getElementById('page-detail').classList.contains('active') && currentAppId) {
        const app = appConfig.find(a => a.id === currentAppId);
        if (app) renderDetailPage(app);
    } else if (document.getElementById('page-download').classList.contains('active') && currentAppId) {
        const app = appConfig.find(a => a.id === currentAppId);
        if (app) renderDownloadPage(app);
    }
    // تحديث breadcrumb
    updateBreadcrumbByHash();
}

document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(newLang);
});

// ============================================================
// التوجيه بين الصفحات
// ============================================================
let currentAppId = null;

function showPage(pageId) {
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if(target) {
        target.classList.add('active');
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = 'fadeSlideIn 0.5s ease forwards';
    }
}

function updateBreadcrumbByHash() {
    const hash = window.location.hash;
    if (!hash || hash === '#home') {
        document.getElementById('breadcrumbNav').innerHTML = `<a href="#home" class="crumb-link">🏠 ${translations[currentLang].home_crumb}</a>`;
    }
}

function navigateToHome() {
    showPage('page-home');
    window.location.hash = 'home';
    currentAppId = null;
    initTerminalTyping();
    renderAppCards();
    updateBreadcrumbByHash();
}

function navigateToDetail(appId) {
    currentAppId = appId;
    const app = appConfig.find(a => a.id === appId);
    if (!app) return;
    showPage('page-detail');
    window.location.hash = `app-${appId}`;
    updateBreadcrumbByHash();
    renderDetailPage(app);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToDownload(appId) {
    currentAppId = appId;
    const app = appConfig.find(a => a.id === appId);
    if (!app) return;
    showPage('page-download');
    window.location.hash = `download-${appId}`;
    updateBreadcrumbByHash();
    renderDownloadPage(app);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// الطرفية (Typing Effect)
// ============================================================
function initTerminalTyping() {
    const line1 = document.getElementById('typedLine1');
    if (!line1) return;
    line1.textContent = '';
    const text = currentLang === 'ar' ? 'تهيئة الاتصال الآمن... التحقق من الهوية...' : 'Establishing secure connection... verifying identity...';
    let i = 0;
    function type() {
        if (i < text.length) {
            line1.textContent += text.charAt(i);
            i++;
            setTimeout(type, 35 + Math.random() * 28);
        } else {
            setTimeout(() => {
                const l2 = document.getElementById('line2');
                if (l2) l2.style.opacity = '1';
            }, 250);
            setTimeout(() => {
                const l3 = document.getElementById('line3');
                if (l3) l3.style.opacity = '1';
                const cursor = document.querySelector('.cursor');
                if (cursor) cursor.style.display = 'none';
            }, 650);
        }
    }
    setTimeout(type, 500);
}

// ============================================================
// البحث والتصفية
// ============================================================
let filteredApps = [...appConfig];

function applyFilters() {
    const searchTerm = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
    const sortBy = document.getElementById('sortSelect')?.value || 'default';

    filteredApps = appConfig.filter(app => {
        const nameMatch = app.name.toLowerCase().includes(searchTerm);
        const descMatch = (app.shortDesc[currentLang] || '').toLowerCase().includes(searchTerm);
        const catMatch = (app.category[currentLang] || '').toLowerCase().includes(searchTerm);
        return nameMatch || descMatch || catMatch;
    });

    if (sortBy === 'name') filteredApps.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'rating') filteredApps.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    else if (sortBy === 'size') filteredApps.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));

    renderAppCards();
}

function renderAppCards() {
    const grid = document.getElementById('appsGrid');
    const noRes = document.getElementById('noResults');
    if (!grid) return;
    grid.innerHTML = '';

    if (filteredApps.length === 0) {
        noRes.style.display = 'block';
        return;
    }
    noRes.style.display = 'none';

    filteredApps.forEach(app => {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.innerHTML = `
            <img src="${app.imageUrl}" alt="${app.name}" class="app-card-image" loading="lazy" onerror="this.style.background='#111';">
            <div class="app-card-body">
                <span class="status-badge verified">${translations[currentLang].verified_badge}</span>
                <h3 class="app-card-name">${app.name}</h3>
                <div class="app-card-meta">
                    <span>${app.version}</span>
                    <span>${app.size}</span>
                    <span>⭐ ${app.rating}</span>
                </div>
                <p class="app-card-desc">${app.shortDesc[currentLang]}</p>
                <button class="app-card-btn" data-id="${app.id}">${translations[currentLang].detail_button}</button>
            </div>
        `;
        card.addEventListener('click', function(e) {
            if (e.target.closest('.app-card-btn')) return;
            navigateToDetail(app.id);
        });
        card.querySelector('.app-card-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            navigateToDetail(app.id);
        });
        grid.appendChild(card);
    });
}

// ============================================================
// صفحة التفاصيل
// ============================================================
function renderDetailPage(app) {
    const container = document.getElementById('detailContainer');
    if (!container) return;
    const features = app.features[currentLang].map(f => `<li>${f}</li>`).join('');
    container.innerHTML = `
        <button class="btn-back" onclick="navigateToHome()">${translations[currentLang].back_to_list}</button>
        <div class="detail-hero">
            <div class="detail-image-wrapper"><img src="${app.imageUrl}" alt="${app.name}" class="detail-image" onerror="this.style.background='#111';"></div>
            <div class="detail-info">
                <span class="status-badge verified">${translations[currentLang].verified_badge}</span>
                <h2 class="detail-app-name">${app.name}</h2>
                <div class="detail-meta-row">
                    <span class="detail-meta-item">📦 ${app.version}</span>
                    <span class="detail-meta-item">💾 ${app.size}</span>
                    <span class="detail-meta-item">📂 ${app.category[currentLang]}</span>
                    <span class="detail-meta-item">⭐ ${app.rating}</span>
                </div>
                <p class="detail-full-desc">${app.fullDesc[currentLang]}</p>
                <ul class="detail-features">${features}</ul>
                <div class="detail-btn-row">
                    <button class="btn-primary" onclick="navigateToDownload(${app.id})">${translations[currentLang].go_download}</button>
                    <button class="btn-outline" onclick="navigateToHome()">${translations[currentLang].browse_other}</button>
                </div>
            </div>
        </div>
        <div class="detail-requirements">
            <h4>${translations[currentLang].requirements_title}</h4>
            <p>${app.requirements[currentLang]}</p>
        </div>
    `;
}

// ============================================================
// صفحة التحميل (بدون زر نسخ نهائياً)
// ============================================================
function renderDownloadPage(app) {
    const container = document.getElementById('downloadPageContainer');
    if (!container) return;

    container.innerHTML = `
        <button class="btn-back" onclick="navigateToDetail(${app.id})">${translations[currentLang].back_to_list}</button>
        <div class="download-summary">
            <img src="${app.imageUrl}" alt="${app.name}" class="download-summary-img" onerror="this.style.background='#111';">
            <div class="download-summary-info">
                <h3>${app.name}</h3>
                <p>📦 ${app.version} | 💾 ${app.size} | ⭐ ${app.rating}</p>
                <p style="margin-top:4px;color:#888;">${translations[currentLang].download_summary_text}</p>
            </div>
        </div>
        <h3 class="server-options-title"><span class="bracket">[</span> ${translations[currentLang].server_title} <span class="bracket">]</span></h3>
        <div class="server-cards" id="serverCardsContainer"></div>
        <div class="file-info-box">
            <h4>📋 ${translations[currentLang].file_info_name}</h4>
            <div class="file-info-row"><span>${translations[currentLang].file_info_name}</span><span>${app.name} – ${app.version}</span></div>
            <div class="file-info-row"><span>${translations[currentLang].file_info_size}</span><span>${app.size}</span></div>
            <div class="file-info-row"><span>${translations[currentLang].file_info_category}</span><span>${app.category[currentLang]}</span></div>
            <div class="file-info-row"><span>${translations[currentLang].file_info_encryption}</span><span>AES-256 / SSL</span></div>
            <div class="file-info-row"><span>${translations[currentLang].file_info_status}</span><span style="color:#00ff88;">${translations[currentLang].file_info_secure}</span></div>
        </div>
    `;

    const serverCards = document.getElementById('serverCardsContainer');
    app.downloadLinks.forEach((link, idx) => {
        const card = document.createElement('div');
        card.className = `server-card ${link.recommended ? 'recommended' : ''}`;
        card.innerHTML = `
            <span class="server-icon">${idx === 0 ? '🖥️' : idx === 1 ? '🌐' : '☁️'}</span>
            <h4 class="server-name">${link.label}</h4>
            <p class="server-speed">${link.speed}</p>
            <p class="server-location">${link.location}</p>
            <p class="server-hash" title="File Hash">${link.hash}</p>
            <a href="${link.url}" class="download-btn-large" target="_blank" rel="noopener noreferrer">${translations[currentLang].download_btn}</a>
        `;
        serverCards.appendChild(card);
    });
}

// ============================================================
// التهيئة عند تحميل الصفحة
// ============================================================
function handleHashChange() {
    const hash = window.location.hash;
    if (!hash || hash === '#home') {
        navigateToHome();
        return;
    }
    const appMatch = hash.match(/^#app-(\d+)$/);
    if (appMatch) {
        const id = parseInt(appMatch[1]);
        const app = appConfig.find(a => a.id === id);
        if (app) {
            navigateToDetail(id);
            return;
        }
    }
    const dlMatch = hash.match(/^#download-(\d+)$/);
    if (dlMatch) {
        const id = parseInt(dlMatch[1]);
        const app = appConfig.find(a => a.id === id);
        if (app) {
            navigateToDownload(id);
            return;
        }
    }
    navigateToHome();
}

window.addEventListener('hashchange', handleHashChange);

document.addEventListener('DOMContentLoaded', () => {
    // مستمعي البحث والتصفية
    document.getElementById('searchInput')?.addEventListener('input', applyFilters);
    document.getElementById('sortSelect')?.addEventListener('change', applyFilters);
    // تطبيق اللغة الافتراضية
    applyLanguage('ar');
    // عرض التطبيقات
    filteredApps = [...appConfig];
    renderAppCards();
    initTerminalTyping();
    handleHashChange();
});
