/* ============================================
   AK Collection - JavaScript
   Vanilla JS | No Dependencies
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTheme();
    initializeScrollReveals();
    initializeInteractivity();
    initializeScrollEffects();
    registerServiceWorker();
    hideLoadingScreen();
});

// ============================================
// LOADING SCREEN
// ============================================

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }, 2500);
    }
}

// ============================================
// NAVIGATION
// ============================================

function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ============================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ============================================

function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateThemeIcon(isDarkMode);
    });
}

function updateThemeIcon(isDarkMode) {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
}

// ============================================
// COPY DISCOUNT CODE
// ============================================

function initializeInteractivity() {
    const copyBtn = document.getElementById('copyBtn');
    const discountCode = document.getElementById('discountCode');
    const discountFeedback = document.getElementById('discountFeedback');

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const code = discountCode.textContent;
            
            // Use modern Clipboard API
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code).then(() => {
                    showCopyFeedback(discountFeedback);
                }).catch(() => {
                    fallbackCopy(code, discountFeedback);
                });
            } else {
                fallbackCopy(code, discountFeedback);
            }
        });
    }
}

function showCopyFeedback(element) {
    element.textContent = '✓ Code copied successfully! Use it during checkout on Astore.pk';
    element.style.color = '#27AE60';
    
    setTimeout(() => {
        element.textContent = '';
    }, 3000);
}

function fallbackCopy(text, feedbackElement) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback(feedbackElement);
    } catch (err) {
        feedbackElement.textContent = 'Failed to copy. Please try again.';
        feedbackElement.style.color = '#E74C3C';
    }
    
    document.body.removeChild(textarea);
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initializeScrollReveals() {
    const reveals = document.querySelectorAll('.section-title, .section-subtitle, .glass-card, .why-card, .product-card, .link-card');
    
    reveals.forEach((element, index) => {
        element.classList.add('reveal');
        element.style.transitionDelay = `${index * 50}ms`;
    });

    observeElements();
}

function observeElements() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// SCROLL EFFECTS
// ============================================

function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ============================================
// SHARE BUTTON
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('shareButton');
    
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            shareWebsite();
        });
    }
});

function shareWebsite() {
    const title = 'AK Collection - Premium Handbags';
    const text = 'Discover premium quality handbags with amazing discounts! Quality | Style | Trust';
    const url = window.location.href;

    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        }).catch(err => {
            console.log('Error sharing:', err);
            showShareDialog(title, text, url);
        });
    } else {
        showShareDialog(title, text, url);
    }
}

function showShareDialog(title, text, url) {
    const shareText = `
Check out AK Collection:
${title}
${text}
${url}
    `;

    // Create a simple modal or use prompt as fallback
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        text-align: center;
    `;

    dialog.innerHTML = `
        <h3 style="margin-bottom: 20px; color: #000;">Share AK Collection</h3>
        <p style="margin-bottom: 20px; color: #666;">Share via your favorite platform</p>
        <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
            <button onclick="shareVia('whatsapp', '${encodeURIComponent(text + ' ' + url)}')" style="padding: 10px 20px; background: #25D366; color: white; border: none; border-radius: 8px; cursor: pointer;">WhatsApp</button>
            <button onclick="shareVia('email', '${encodeURIComponent(title)}', '${encodeURIComponent(text + '\n' + url)}')" style="padding: 10px 20px; background: #D4AF37; color: black; border: none; border-radius: 8px; cursor: pointer;">Email</button>
            <button onclick="copyShareLink('${url}')" style="padding: 10px 20px; background: #666; color: white; border: none; border-radius: 8px; cursor: pointer;">Copy Link</button>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="padding: 10px 30px; background: #ddd; border: none; border-radius: 8px; cursor: pointer;">Close</button>
    `;

    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
    `;
    backdrop.onclick = function() {
        document.body.removeChild(backdrop);
        document.body.removeChild(dialog);
    };

    document.body.appendChild(backdrop);
    document.body.appendChild(dialog);
}

function shareVia(platform, ...args) {
    if (platform === 'whatsapp') {
        const text = args[0];
        window.open(`https://wa.me/?text=${text}`, '_blank');
    } else if (platform === 'email') {
        const subject = args[0];
        const body = args[1];
        window.open(`mailto:?subject=${subject}&body=${body}`);
    }
}

function copyShareLink(url) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Link copied to clipboard!');
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SERVICE WORKER REGISTRATION (PWA)
// ============================================

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        // Service worker is optional and will be created if needed
        // For now, just log that PWA is ready
        console.log('PWA Ready');
    }
}

// ============================================
// PERFORMANCE & PAGE VISIBILITY
// ============================================

// Stop animations when page is hidden
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.body.style.animation = 'none';
    } else {
        document.body.style.animation = '';
    }
});

// ============================================
// INTERSECTION OBSERVER FOR LAZY LOADING
// ============================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger loading
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Prevent layout shift
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Handle navigation scroll on mobile
function handleMobileNavigation() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Call mobile navigation for small screens
if (window.innerWidth <= 768) {
    // handleMobileNavigation(); // Uncomment if you want this behavior
}

// ============================================
// ACCESSIBILITY HELPERS
// ============================================

// Ensure keyboard navigation works
document.querySelectorAll('[role="button"]').forEach(btn => {
    btn.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Announce dynamic content changes for screen readers
function announceUpdate(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ============================================
// ANALYTICS READY (GTM/GA)
// ============================================

window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, eventData) {
    window.dataLayer.push({
        'event': eventName,
        ...eventData
    });
}

// Track page view
trackEvent('pageview', {
    'page_path': window.location.pathname,
    'page_title': document.title
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const t = window.performance.timing;
            const pageLoadTime = t.loadEventEnd - t.navigationStart;
            console.log('Page load time: ' + pageLoadTime + 'ms');
            trackEvent('page_performance', {
                'load_time': pageLoadTime
            });
        }, 0);
    });
}

// ============================================
// CONSOLE BRANDING
// ============================================

console.log('%c🌟 Welcome to AK Collection 🌟', 'color: #D4AF37; font-size: 16px; font-weight: bold;');
console.log('%cQuality | Style | Trust', 'color: #000000; font-size: 14px;');
console.log('%cVisit us at https://www.astore.pk', 'color: #666666; font-size: 12px;');
