const defaultConfig = {
    hero_title: 'Bytant Innovative Group',
    hero_slogan: '"We Innovate to Inspire"',
    hero_description: 'Empowering young Africans to rise, build, and shape the future of our continent through technology and innovation.',
    mission_title: 'Our Mission',
    mission_text: 'To ignite innovation across Africa by nurturing the next generation of tech leaders. We believe in the boundless potential of African youth to create solutions that will transform our communities and inspire the world.',
    cta_button_text: 'Join the Founder\'s Room',
    footer_text: '© 2025 Bytant Innovative Group. Building Africa\'s Future.',
    background_color: '#0D1117',
    surface_color: '#1A1F26',
    text_color: '#9CA3AF',
    primary_action_color: '#FFB347',
    secondary_action_color: '#DC2626',
    font_family: 'Space Grotesk',
    font_size: 16
};

let config = { ...defaultConfig };

async function onConfigChange(cfg) {
    config = { ...defaultConfig, ...cfg };

    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontStack = 'sans-serif';
    const baseSize = config.font_size || defaultConfig.font_size;

    // Update hero title
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        const parts = (config.hero_title || defaultConfig.hero_title).split(' ');
        if (parts.length >= 2) {
            heroTitle.innerHTML = `${parts[0]}<br/><span class="gradient-text">${parts.slice(1).join(' ')}</span>`;
        } else {
            heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
        }
    }

    // Update slogan
    const heroSlogan = document.getElementById('hero-slogan');
    if (heroSlogan) {
        heroSlogan.textContent = config.hero_slogan || defaultConfig.hero_slogan;
        heroSlogan.style.color = config.primary_action_color || defaultConfig.primary_action_color;
    }

    // Update description
    const heroDesc = document.getElementById('hero-description');
    if (heroDesc) {
        heroDesc.textContent = config.hero_description || defaultConfig.hero_description;
        heroDesc.style.color = config.text_color || defaultConfig.text_color;
        heroDesc.style.fontSize = `${baseSize * 1.125}px`;
        heroDesc.style.fontFamily = `${customFont}, ${baseFontStack}`;
    }

    // Update mission title
    const missionTitle = document.getElementById('mission-title');
    if (missionTitle) {
        const title = config.mission_title || defaultConfig.mission_title;
        missionTitle.innerHTML = `${title.split(' ')[0]} <span class="gradient-text">${title.split(' ').slice(1).join(' ') || ''}</span>`;
    }

    // Update mission text
    const missionText = document.getElementById('mission-text');
    if (missionText) {
        missionText.textContent = config.mission_text || defaultConfig.mission_text;
        missionText.style.color = config.text_color || defaultConfig.text_color;
        missionText.style.fontSize = `${baseSize * 1.125}px`;
        missionText.style.fontFamily = `${customFont}, ${baseFontStack}`;
    }

    // Update CTA button text
    const ctaBtn = document.getElementById('cta-button-text');
    if (ctaBtn) {
        ctaBtn.textContent = config.cta_button_text || defaultConfig.cta_button_text;
    }

    // Update footer
    const footerText = document.getElementById('footer-text');
    if (footerText) {
        footerText.textContent = config.footer_text || defaultConfig.footer_text;
    }



    // Update background color
    const appWrapper = document.getElementById('app-wrapper');
    if (appWrapper) {
        appWrapper.style.backgroundColor = config.background_color || defaultConfig.background_color;
    }

    // Update primary action buttons gradient
    const primaryBtn = document.getElementById('cta-primary-btn');
    const navCtaBtn = document.getElementById('nav-cta-btn');
    const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;

    if (primaryBtn) {
        primaryBtn.style.background = `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`;
    }
    if (navCtaBtn) {
        navCtaBtn.style.background = `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`;
    }

    // Update gradient text elements
    const gradientTextStyle = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 50%, ${primaryColor} 100%)`;
    document.querySelectorAll('.gradient-text').forEach(el => {
        el.style.background = gradientTextStyle;
        el.style.webkitBackgroundClip = 'text';
        el.style.webkitTextFillColor = 'transparent';
        el.style.backgroundClip = 'text';
    });

    // Update font family for body text
    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
}

function mapToCapabilities(cfg) {
    return {
        recolorables: [
            {
                get: () => cfg.background_color || defaultConfig.background_color,
                set: (value) => { cfg.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
            },
            {
                get: () => cfg.surface_color || defaultConfig.surface_color,
                set: (value) => { cfg.surface_color = value; window.elementSdk.setConfig({ surface_color: value }); }
            },
            {
                get: () => cfg.text_color || defaultConfig.text_color,
                set: (value) => { cfg.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
            },
            {
                get: () => cfg.primary_action_color || defaultConfig.primary_action_color,
                set: (value) => { cfg.primary_action_color = value; window.elementSdk.setConfig({ primary_action_color: value }); }
            },
            {
                get: () => cfg.secondary_action_color || defaultConfig.secondary_action_color,
                set: (value) => { cfg.secondary_action_color = value; window.elementSdk.setConfig({ secondary_action_color: value }); }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => cfg.font_family || defaultConfig.font_family,
            set: (value) => { cfg.font_family = value; window.elementSdk.setConfig({ font_family: value }); }
        },
        fontSizeable: {
            get: () => cfg.font_size || defaultConfig.font_size,
            set: (value) => { cfg.font_size = value; window.elementSdk.setConfig({ font_size: value }); }
        }
    };
}

function mapToEditPanelValues(cfg) {
    const map = new Map([
        ['hero_title', cfg.hero_title || defaultConfig.hero_title],
        ['hero_slogan', cfg.hero_slogan || defaultConfig.hero_slogan],
        ['hero_description', cfg.hero_description || defaultConfig.hero_description],
        ['mission_title', cfg.mission_title || defaultConfig.mission_title],
        ['mission_text', cfg.mission_text || defaultConfig.mission_text],
        ['team_title', cfg.team_title || defaultConfig.team_title],
        ['team_subtitle', cfg.team_subtitle || defaultConfig.team_subtitle],
        ['cta_button_text', cfg.cta_button_text || defaultConfig.cta_button_text],
        ['footer_text', cfg.footer_text || defaultConfig.footer_text]
    ]);

    // Dynamically add team member fields
    for (const key in cfg) {
        if (key.startsWith('team_member_') && key.endsWith('_name')) {
            const index = key.match(/^team_member_(\d+)_name$/)[1];
            map.set(`team_member_${index}_name`, cfg[`team_member_${index}_name`] || defaultConfig[`team_member_${index}_name`] || '');
            map.set(`team_member_${index}_role`, cfg[`team_member_${index}_role`] || defaultConfig[`team_member_${index}_role`] || '');
            map.set(`team_member_${index}_bio`, cfg[`team_member_${index}_bio`] || defaultConfig[`team_member_${index}_bio`] || '');
            map.set(`team_member_${index}_linkedin`, cfg[`team_member_${index}_linkedin`] || defaultConfig[`team_member_${index}_linkedin`] || '');
            map.set(`team_member_${index}_portfolio`, cfg[`team_member_${index}_portfolio`] || defaultConfig[`team_member_${index}_portfolio`] || '');
        }
    }

    return map;
}

// Initialize SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 right-8 bg-gradient-to-r from-[#FFB347] to-[#DC2626] text-[#0D1117] px-6 py-4 rounded-2xl shadow-2xl font-semibold text-sm z-50 animate-slide-up';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function openWhatsApp(message) {
    const phone = '233504378971';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
}

function toggleModal(modal, shouldOpen) {
    if (!modal) return;
    modal.classList.toggle('hidden', !shouldOpen);
}

function wireModalClose(modal, closeBtn) {
    if (!modal) return;
    if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleModal(modal, false));
    }
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal(modal, false);
        }
    });
}

function setupAnonymousToggle({ checkbox, container, fields, requiredFields }) {
    if (!checkbox) return;
    const update = () => {
        const isAnonymous = checkbox.checked;
        if (container) {
            container.classList.toggle('opacity-50', isAnonymous);
            container.classList.toggle('pointer-events-none', isAnonymous);
        }
        fields.forEach((field) => {
            if (!field) return;
            field.disabled = isAnonymous;
            if (isAnonymous) {
                field.dataset.cachedValue = field.value;
                field.value = '';
            } else if (field.dataset.cachedValue !== undefined) {
                field.value = field.dataset.cachedValue;
                delete field.dataset.cachedValue;
            }
        });
        requiredFields.forEach((field) => {
            if (field) {
                field.required = !isAnonymous;
            }
        });
    };

    checkbox.addEventListener('change', update);
    update();
}

// Help Us Modal Toggle
const helpUsBtn = document.getElementById('help-us-btn');
const helpModal = document.getElementById('help-modal');
const closeHelpModal = document.getElementById('close-help-modal');
const helpMenu = document.getElementById('help-us-menu');
const donateModal = document.getElementById('donate-modal');
const closeDonateModal = document.getElementById('close-donate-modal');

if (helpUsBtn && helpModal) {
    helpUsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleModal(helpModal, true);
    });
}

wireModalClose(helpModal, closeHelpModal);
wireModalClose(donateModal, closeDonateModal);

const ideaModal = document.getElementById('idea-modal');
const suggestionModal = document.getElementById('suggestion-modal');
const closeIdeaModal = document.getElementById('close-idea-modal');
const closeSuggestionModal = document.getElementById('close-suggestion-modal');

wireModalClose(ideaModal, closeIdeaModal);
wireModalClose(suggestionModal, closeSuggestionModal);

const ideaForm = document.getElementById('idea-form');
const ideaAnonToggle = document.getElementById('idea-anon');
const ideaIdentityFields = document.getElementById('idea-identity-fields');
const ideaNameInput = ideaForm ? ideaForm.querySelector('input[name="name"]') : null;
const ideaEmailInput = ideaForm ? ideaForm.querySelector('input[name="email"]') : null;

setupAnonymousToggle({
    checkbox: ideaAnonToggle,
    container: ideaIdentityFields,
    fields: [ideaNameInput, ideaEmailInput],
    requiredFields: [ideaNameInput, ideaEmailInput]
});

if (ideaForm) {
    ideaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(ideaForm);
        const isAnonymous = ideaAnonToggle ? ideaAnonToggle.checked : false;
        const name = isAnonymous ? '' : (formData.get('name') || '').toString().trim();
        const email = isAnonymous ? '' : (formData.get('email') || '').toString().trim();
        const title = (formData.get('idea_title') || '').toString().trim();
        const details = (formData.get('idea_details') || '').toString().trim();

        const message = [
            'New Idea Submission',
            isAnonymous ? 'Submitted anonymously: Yes' : null,
            name ? `Name: ${name}` : null,
            email ? `Email: ${email}` : null,
            title ? `Title: ${title}` : null,
            details ? `Idea: ${details}` : null
        ].filter(Boolean).join('\n');

        openWhatsApp(message);
        showToast('Opening WhatsApp to send your idea.');
        ideaForm.reset();
        if (ideaAnonToggle) {
            ideaAnonToggle.dispatchEvent(new Event('change'));
        }
        toggleModal(ideaModal, false);
    });
}

const suggestionForm = document.getElementById('suggestion-form');
const suggestionAnonToggle = document.getElementById('suggestion-anon');
const suggestionIdentityFields = document.getElementById('suggestion-identity-fields');
const suggestionNameInput = suggestionForm ? suggestionForm.querySelector('input[name="name"]') : null;
const suggestionEmailInput = suggestionForm ? suggestionForm.querySelector('input[name="email"]') : null;

setupAnonymousToggle({
    checkbox: suggestionAnonToggle,
    container: suggestionIdentityFields,
    fields: [suggestionNameInput, suggestionEmailInput],
    requiredFields: []
});

if (suggestionForm) {
    suggestionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(suggestionForm);
        const isAnonymous = suggestionAnonToggle ? suggestionAnonToggle.checked : false;
        const name = isAnonymous ? '' : (formData.get('name') || '').toString().trim();
        const email = isAnonymous ? '' : (formData.get('email') || '').toString().trim();
        const suggestion = (formData.get('suggestion') || '').toString().trim();

        const message = [
            'New Suggestion',
            isAnonymous ? 'Submitted anonymously: Yes' : null,
            name ? `Name: ${name}` : null,
            email ? `Email: ${email}` : null,
            suggestion ? `Suggestion: ${suggestion}` : null
        ].filter(Boolean).join('\n');

        openWhatsApp(message);
        showToast('Opening WhatsApp to send your suggestion.');
        suggestionForm.reset();
        if (suggestionAnonToggle) {
            suggestionAnonToggle.dispatchEvent(new Event('change'));
        }
        toggleModal(suggestionModal, false);
    });
}

const helpActionButtons = document.querySelectorAll('[data-help-action]');
helpActionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.helpAction;
        if (action === 'donate') {
            toggleModal(helpModal, false);
            toggleModal(donateModal, true);
            toggleModal(helpMenu, false);
            return;
        }
        if (action === 'idea') {
            toggleModal(helpModal, false);
            toggleModal(ideaModal, true);
            toggleModal(helpMenu, false);
            return;
        }

        if (action === 'suggestion') {
            toggleModal(helpModal, false);
            toggleModal(suggestionModal, true);
            toggleModal(helpMenu, false);
            return;
        }

        const labels = {};
        if (labels[action]) {
            showToast(`Thank you for choosing to ${labels[action]}! We'll be in touch soon.`);
            toggleModal(helpModal, false);
            toggleModal(helpMenu, false);
        }
    });
});

// Contact Modal Toggle
const navCtaBtn = document.getElementById('nav-cta-btn');
const contactModal = document.getElementById('contact-modal');
const closeContactModal = document.getElementById('close-contact-modal');

if (navCtaBtn && contactModal) {
    // Open modal when clicking Contact Us button
    navCtaBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        contactModal.classList.remove('hidden');
    });

    // Close modal when clicking X button
    if (closeContactModal) {
        closeContactModal.addEventListener('click', () => {
            contactModal.classList.add('hidden');
        });
    }

    // Close modal when clicking outside
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.add('hidden');
        }
    });
}









// Team Carousel Functionality
let currentIndex = 0;
const carousel = document.getElementById('team-carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = 4; // Number of team members

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-[#FFB347]', index === currentIndex);
        dot.classList.toggle('bg-gray-600', index !== currentIndex);
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Initialize carousel
updateCarousel();

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9c0bfcd6d59c933c',t:'MTc2ODg4NTAxMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
