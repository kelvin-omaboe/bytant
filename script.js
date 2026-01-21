const defaultConfig = {
    hero_title: 'Bytant Innovative Group',
    hero_slogan: '"We Innovate to Inspire"',
    hero_description: 'Empowering young Africans to rise, build, and shape the future of our continent through technology and innovation.',
    mission_title: 'Our Mission',
    mission_text: 'To ignite innovation across Africa by nurturing the next generation of tech leaders. We believe in the boundless potential of African youth to create solutions that will transform our communities and inspire the world.',
    team_title: 'Meet The Core Team',
    team_subtitle: 'Passionate innovators dedicated to building Africa\'s tech future',
    team_member_1_name: 'Kelvin Omaboe',
    team_member_1_role: 'Innovations Lead',
    team_member_1_bio: 'Visionary leader passionate about empowering African youth through technology',
    team_member_1_linkedin: 'https://linkedin.com/in/kelvin-omaboe',
    team_member_1_portfolio: 'https://kelvin-omaboe.vercel.app',
    team_member_2_name: 'Henrietta Kumi',
    team_member_2_role: 'Loading',
    team_member_2_bio: 'Loading',
    team_member_2_linkedin: 'https://linkedin.com/in/henrietta-kumi',
    team_member_2_portfolio: '#',
    team_member_3_name: 'Godwin Datsomor',
    team_member_3_role: 'Loading',
    team_member_3_bio: 'Driving creative solutions and fostering innovation across the continent',
    team_member_3_linkedin: 'https://linkedin.com/in/godwin-datsomor',
    team_member_3_portfolio: '#',
    team_member_4_name: 'Abigail Arthur',
    team_member_4_role: 'Loading',
    team_member_4_bio: 'Building bridges and nurturing the next generation of African innovators',
    team_member_4_linkedin: 'https://linkedin.com/in/abigail-arthur',
    team_member_4_portfolio: '#',
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

    // Update team section
    const teamTitle = document.getElementById('team-title');
    if (teamTitle) {
        const title = config.team_title || defaultConfig.team_title;
        const words = title.split(' ');
        if (words.length >= 3) {
            teamTitle.innerHTML = `${words.slice(0, -2).join(' ')} <span class="gradient-text">${words.slice(-2).join(' ')}</span>`;
        } else {
            teamTitle.textContent = title;
        }
    }

    const teamSubtitle = document.getElementById('team-subtitle');
    if (teamSubtitle) {
        teamSubtitle.textContent = config.team_subtitle || defaultConfig.team_subtitle;
        teamSubtitle.style.color = config.text_color || defaultConfig.text_color;
    }

    // Update team members
    for (let i = 1; i <= 4; i++) {
        const nameEl = document.getElementById(`team-member-${i}-name`);
        const roleEl = document.getElementById(`team-member-${i}-role`);
        const bioEl = document.getElementById(`team-member-${i}-bio`);
        const linkedinEl = document.getElementById(`team-member-${i}-linkedin`);
        const portfolioEl = document.getElementById(`team-member-${i}-portfolio`);

        if (nameEl) nameEl.textContent = config[`team_member_${i}_name`] || defaultConfig[`team_member_${i}_name`];
        if (roleEl) roleEl.textContent = config[`team_member_${i}_role`] || defaultConfig[`team_member_${i}_role`];
        if (bioEl) {
            bioEl.textContent = config[`team_member_${i}_bio`] || defaultConfig[`team_member_${i}_bio`];
            bioEl.style.fontSize = `${baseSize * 0.875}px`;
        }
        if (linkedinEl) {
            linkedinEl.href = config[`team_member_${i}_linkedin`] || defaultConfig[`team_member_${i}_linkedin`];
        }
        if (portfolioEl) {
            portfolioEl.href = config[`team_member_${i}_portfolio`] || defaultConfig[`team_member_${i}_portfolio`];
        }
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
    return new Map([
        ['hero_title', cfg.hero_title || defaultConfig.hero_title],
        ['hero_slogan', cfg.hero_slogan || defaultConfig.hero_slogan],
        ['hero_description', cfg.hero_description || defaultConfig.hero_description],
        ['mission_title', cfg.mission_title || defaultConfig.mission_title],
        ['mission_text', cfg.mission_text || defaultConfig.mission_text],
        ['team_title', cfg.team_title || defaultConfig.team_title],
        ['team_subtitle', cfg.team_subtitle || defaultConfig.team_subtitle],
        ['team_member_1_name', cfg.team_member_1_name || defaultConfig.team_member_1_name],
        ['team_member_1_role', cfg.team_member_1_role || defaultConfig.team_member_1_role],
        ['team_member_1_bio', cfg.team_member_1_bio || defaultConfig.team_member_1_bio],
        ['team_member_1_linkedin', cfg.team_member_1_linkedin || defaultConfig.team_member_1_linkedin],
        ['team_member_1_portfolio', cfg.team_member_1_portfolio || defaultConfig.team_member_1_portfolio],
        ['team_member_2_name', cfg.team_member_2_name || defaultConfig.team_member_2_name],
        ['team_member_2_role', cfg.team_member_2_role || defaultConfig.team_member_2_role],
        ['team_member_2_bio', cfg.team_member_2_bio || defaultConfig.team_member_2_bio],
        ['team_member_2_linkedin', cfg.team_member_2_linkedin || defaultConfig.team_member_2_linkedin],
        ['team_member_2_portfolio', cfg.team_member_2_portfolio || defaultConfig.team_member_2_portfolio],
        ['team_member_3_name', cfg.team_member_3_name || defaultConfig.team_member_3_name],
        ['team_member_3_role', cfg.team_member_3_role || defaultConfig.team_member_3_role],
        ['team_member_3_bio', cfg.team_member_3_bio || defaultConfig.team_member_3_bio],
        ['team_member_3_linkedin', cfg.team_member_3_linkedin || defaultConfig.team_member_3_linkedin],
        ['team_member_3_portfolio', cfg.team_member_3_portfolio || defaultConfig.team_member_3_portfolio],
        ['team_member_4_name', cfg.team_member_4_name || defaultConfig.team_member_4_name],
        ['team_member_4_role', cfg.team_member_4_role || defaultConfig.team_member_4_role],
        ['team_member_4_bio', cfg.team_member_4_bio || defaultConfig.team_member_4_bio],
        ['team_member_4_linkedin', cfg.team_member_4_linkedin || defaultConfig.team_member_4_linkedin],
        ['team_member_4_portfolio', cfg.team_member_4_portfolio || defaultConfig.team_member_4_portfolio],
        ['cta_button_text', cfg.cta_button_text || defaultConfig.cta_button_text],
        ['footer_text', cfg.footer_text || defaultConfig.footer_text]
    ]);
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

// Help Us Modal Toggle
const helpUsBtn = document.getElementById('help-us-btn');
const helpModal = document.getElementById('help-modal');
const closeHelpModal = document.getElementById('close-help-modal');

if (helpUsBtn && helpModal) {
    // Open modal when clicking Help Us button
    helpUsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        helpModal.classList.remove('hidden');
    });

    // Close modal when clicking X button
    if (closeHelpModal) {
        closeHelpModal.addEventListener('click', () => {
            helpModal.classList.add('hidden');
        });
    }

    // Close modal when clicking outside
    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            helpModal.classList.add('hidden');
        }
    });

    // Handle help option clicks
    const helpOptions = document.querySelectorAll('.help-option-btn');
    helpOptions.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const actions = ['Donate', 'Mentor a Founder', 'Share an Idea', 'Leave a Suggestion'];

            // Create toast notification
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-8 right-8 bg-gradient-to-r from-[#FFB347] to-[#DC2626] text-[#0D1117] px-6 py-4 rounded-2xl shadow-2xl font-semibold text-sm z-50 animate-slide-up';
            toast.textContent = `Thank you for choosing to ${actions[index]}! We'll be in touch soon.`;
            document.body.appendChild(toast);

            // Remove toast after 3 seconds
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(20px)';
                toast.style.transition = 'all 0.3s ease-out';
                setTimeout(() => toast.remove(), 300);
            }, 3000);

            // Close modal
            helpModal.classList.add('hidden');
        });
    });
}

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
let currentSlide = 0;
const carousel = document.getElementById('team-carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = 4;

function updateCarousel() {
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.remove('bg-gray-600');
            dot.classList.add('bg-[#FFB347]');
        } else {
            dot.classList.remove('bg-[#FFB347]');
            dot.classList.add('bg-gray-600');
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Auto-advance carousel every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 5000);

// See All Members Modal Toggle
const seeAllMembersLink = document.getElementById('see-all-members-link');
const membersModal = document.getElementById('members-modal');
const closeMembersModal = document.getElementById('close-members-modal');

if (seeAllMembersLink && membersModal) {
    // Open modal when clicking See All Members link
    seeAllMembersLink.addEventListener('click', (e) => {
        e.preventDefault();
        membersModal.classList.remove('hidden');
    });

    // Close modal when clicking X button
    if (closeMembersModal) {
        closeMembersModal.addEventListener('click', () => {
            membersModal.classList.add('hidden');
        });
    }

    // Close modal when clicking outside
    membersModal.addEventListener('click', (e) => {
        if (e.target === membersModal) {
            membersModal.classList.add('hidden');
        }
    });
}







(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9c0bfcd6d59c933c',t:'MTc2ODg4NTAxMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
