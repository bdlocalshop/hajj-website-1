/**
 * Al-Safwa Hajj & Umrah Journeys - Main Application Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderPackages("all");
  initPackageFilters();
  renderServices();
  renderRitualsGuide();
  renderTestimonials();
  renderFaqs();
  initFaqAccordion();
  initItineraryModal();
  initQuickHeroSearch();
  initInquiryForm();
  initScrollEffects();
  initUmrahCalculator();
});

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
window.showToast = function (message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast-message toast-${type}`;

  const iconSvg = type === "success" 
    ? `<svg class="w-5 h-5 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    : `<svg class="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-body">${message}</div>
    <button class="toast-close" aria-label="Close Notification">&times;</button>
  `;

  toastContainer.appendChild(toast);

  // Auto remove after 4.5 seconds
  const autoTimer = setTimeout(() => {
    removeToast(toast);
  }, 4500);

  toast.querySelector(".toast-close").addEventListener("click", () => {
    clearTimeout(autoTimer);
    removeToast(toast);
  });

  function removeToast(t) {
    t.classList.add("toast-fade-out");
    setTimeout(() => {
      if (t.parentElement) t.parentElement.removeChild(t);
    }, 300);
  }
};

/* ==========================================================================
   Navigation & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const navToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-navigation");
  const navBackdrop = document.getElementById("nav-backdrop");

  // Sticky header class on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });

  // Mobile Drawer Toggle
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-active");
      if (navBackdrop) navBackdrop.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
      navToggle.classList.toggle("open", isOpen);
      document.body.classList.toggle("overflow-hidden", isOpen);
    });

    if (navBackdrop) {
      navBackdrop.addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const navClose = document.getElementById("mobile-nav-close");
    if (navClose) {
      navClose.addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });
  }

  function closeMobileMenu() {
    if (mobileNav) mobileNav.classList.remove("is-active");
    if (navBackdrop) navBackdrop.classList.remove("is-active");
    if (navToggle) {
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
    document.body.classList.remove("overflow-hidden");
  }
}

/* ==========================================================================
   Packages Rendering & Filtering
   ========================================================================== */
function renderPackages(category = "all") {
  const container = document.getElementById("packages-grid");
  if (!container) return;

  const filtered = category === "all"
    ? APP_DATA.packages
    : APP_DATA.packages.filter(p => p.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No packages found in this category at this time. Please contact our concierge for customized arrangements.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(pkg => `
    <article class="package-card" data-category="${pkg.category}">
      <div class="package-media">
        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy" class="package-img">
        <span class="package-badge">${pkg.badge}</span>
        <span class="package-duration">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${pkg.duration}
        </span>
      </div>

      <div class="package-content">
        <div class="package-header">
          <span class="package-type-tag">${pkg.category.toUpperCase()} PILGRIMAGE</span>
          <h3 class="package-title">${pkg.title}</h3>
          <p class="package-desc">${pkg.description}</p>
        </div>

        <div class="package-hotels">
          <div class="hotel-item">
            <span class="hotel-city">Makkah:</span>
            <span class="hotel-name">${pkg.makkahHotel}</span>
            <span class="hotel-dist">(${pkg.makkahDistance})</span>
          </div>
          <div class="hotel-item">
            <span class="hotel-city">Madinah:</span>
            <span class="hotel-name">${pkg.madinahHotel}</span>
            <span class="hotel-dist">(${pkg.madinahDistance})</span>
          </div>
        </div>

        <ul class="package-features">
          <li>
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Flights:</strong> ${pkg.airline}</span>
          </li>
          <li>
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Transport:</strong> ${pkg.transport}</span>
          </li>
          <li>
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Meals:</strong> ${pkg.mealPlan}</span>
          </li>
        </ul>

        <div class="package-footer">
          <div class="package-price-wrap">
            <span class="price-prefix">From</span>
            <div class="price-value">
              <span class="currency">${pkg.currency}</span>
              <span class="amount">${pkg.price.toLocaleString()}</span>
              <span class="unit">/ person</span>
            </div>
            <span class="price-note">All taxes & permits included</span>
          </div>

          <div class="package-actions">
            <button class="btn btn-outline btn-sm view-itinerary-btn" data-pkg-id="${pkg.id}">
              Itinerary
            </button>
            <button class="btn btn-primary btn-sm book-pkg-btn" data-pkg-id="${pkg.id}" data-pkg-title="${pkg.title}">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  // Attach event listeners to card buttons
  container.querySelectorAll(".view-itinerary-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const pkgId = e.currentTarget.getAttribute("data-pkg-id");
      openItineraryModal(pkgId);
    });
  });

  container.querySelectorAll(".book-pkg-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const pkgTitle = e.currentTarget.getAttribute("data-pkg-title");
      const pkgId = e.currentTarget.getAttribute("data-pkg-id");
      selectPackageForInquiry(pkgId, pkgTitle);
    });
  });
}

function initPackageFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const category = e.currentTarget.getAttribute("data-filter");
      renderPackages(category);
    });
  });
}

/* ==========================================================================
   Quick Hero Search
   ========================================================================== */
function initQuickHeroSearch() {
  const heroSearchBtn = document.getElementById("hero-search-btn");
  if (!heroSearchBtn) return;

  heroSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const type = document.getElementById("hero-search-type")?.value || "all";
    
    // Switch filter buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      if (btn.getAttribute("data-filter") === type) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    renderPackages(type);

    const packagesSection = document.getElementById("packages-section");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* ==========================================================================
   Dedicated Services
   ========================================================================== */
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  const iconMap = {
    passport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 17h10"/></svg>`,
    hotel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 3h12a2 2 0 0 1 2 2v2H4V5a2 2 0 0 1 2-2zM9 10h1M14 10h1M9 14h1M14 14h1M9 18h1M14 18h1"/></svg>`,
    train: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="16" rx="2"/><line x1="4" y1="11" x2="20" y2="11"/><line x1="12" y1="3" x2="12" y2="11"/><path d="m8 19-3 3M16 19l3 3M9 15h.01M15 15h.01"/></svg>`,
    mountain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
  };

  container.innerHTML = APP_DATA.services.map(s => `
    <div class="service-card">
      <div class="service-icon-wrap">
        ${iconMap[s.icon] || iconMap.passport}
      </div>
      <span class="service-subtitle">${s.subtitle}</span>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      <ul class="service-feature-list">
        ${s.features.map(f => `
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${f}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

/* ==========================================================================
   Rituals Step-by-Step Guide
   ========================================================================== */
function renderRitualsGuide() {
  const container = document.getElementById("rituals-grid");
  if (!container) return;

  container.innerHTML = APP_DATA.ritualsGuide.map(r => `
    <div class="ritual-card">
      <div class="ritual-step-badge">${r.step}</div>
      <div class="ritual-body">
        <span class="ritual-name">${r.name}</span>
        <h4 class="ritual-title">${r.title}</h4>
        <p class="ritual-desc">${r.description}</p>
        <div class="ritual-duas">
          <span class="duas-label">Key Sunnah Du'a:</span>
          <p class="duas-text">"${r.duas}"</p>
        </div>
        <div class="ritual-tips">
          <strong>Advisor Tip:</strong> ${r.tips}
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   Testimonials Rendering
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = APP_DATA.testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-rating">
        ${Array(t.rating).fill('<svg class="star-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join("")}
      </div>
      <p class="testimonial-comment">"${t.comment}"</p>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy">
        <div class="author-meta">
          <h4 class="author-name">${t.name}</h4>
          <span class="author-location">${t.location}</span>
          <span class="author-pkg">${t.package} • <em>${t.date}</em></span>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   FAQs & Accordion
   ========================================================================== */
function renderFaqs() {
  const container = document.getElementById("faqs-container");
  if (!container) return;

  container.innerHTML = APP_DATA.faqs.map((faq, index) => `
    <div class="faq-item" data-index="${index}">
      <button class="faq-question" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="faq-ans-${index}">
        <span>${faq.question}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div id="faq-ans-${index}" class="faq-answer" style="${index === 0 ? 'display: block;' : 'display: none;'}">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join("");
}

function initFaqAccordion() {
  const container = document.getElementById("faqs-container");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const questionBtn = e.target.closest(".faq-question");
    if (!questionBtn) return;

    const faqItem = questionBtn.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const isExpanded = questionBtn.getAttribute("aria-expanded") === "true";

    // Close all other items
    container.querySelectorAll(".faq-item").forEach(item => {
      if (item !== faqItem) {
        const otherBtn = item.querySelector(".faq-question");
        const otherAns = item.querySelector(".faq-answer");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        if (otherAns) otherAns.style.display = "none";
        item.classList.remove("is-open");
      }
    });

    // Toggle clicked item
    if (isExpanded) {
      questionBtn.setAttribute("aria-expanded", "false");
      answer.style.display = "none";
      faqItem.classList.remove("is-open");
    } else {
      questionBtn.setAttribute("aria-expanded", "true");
      answer.style.display = "block";
      faqItem.classList.add("is-open");
    }
  });
}

/* ==========================================================================
   Itinerary Modal Dialog
   ========================================================================== */
function initItineraryModal() {
  const modal = document.getElementById("itinerary-modal");
  const closeBtn = document.getElementById("close-itinerary-modal");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.close();
      document.body.classList.remove("overflow-hidden");
    });
  }

  if (modal) {
    // Backdrop click dismiss
    modal.addEventListener("click", (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        modal.close();
        document.body.classList.remove("overflow-hidden");
      }
    });

    modal.addEventListener("close", () => {
      document.body.classList.remove("overflow-hidden");
    });
  }
}

function openItineraryModal(pkgId) {
  const pkg = APP_DATA.packages.find(p => p.id === pkgId);
  const modal = document.getElementById("itinerary-modal");
  const modalBody = document.getElementById("itinerary-modal-content");

  if (!pkg || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-pkg-header">
      <div class="modal-header-top">
        <span class="package-badge">${pkg.badge}</span>
        <span class="package-duration">${pkg.duration}</span>
      </div>
      <h2 class="modal-pkg-title">${pkg.title}</h2>
      <p class="modal-pkg-desc">${pkg.description}</p>
      
      <div class="modal-hotels-bar">
        <div class="modal-hotel-block">
          <strong>Makkah Stay:</strong> ${pkg.makkahHotel} (${pkg.makkahDistance})
        </div>
        <div class="modal-hotel-block">
          <strong>Madinah Stay:</strong> ${pkg.madinahHotel} (${pkg.madinahDistance})
        </div>
      </div>
    </div>

    <div class="modal-tabs-wrap">
      <h3 class="modal-section-title">Day-by-Day Journey Schedule</h3>
      <div class="itinerary-timeline">
        ${pkg.itinerary.map(item => `
          <div class="timeline-day">
            <div class="day-marker">${item.day}</div>
            <div class="day-content">
              <h4 class="day-title">${item.title}</h4>
              <p class="day-desc">${item.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="modal-inclusions-grid">
      <div class="modal-inclusions-card">
        <h4>Included in Package:</h4>
        <ul>
          ${pkg.highlights.map(h => `
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${h}</span>
            </li>
          `).join("")}
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Direct Airline Booking: ${pkg.airline}</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${pkg.mealPlan}</span>
          </li>
        </ul>
      </div>

      <div class="modal-price-action-card">
        <div class="modal-pricing-box">
          <span class="price-prefix">Price Per Pilgrim</span>
          <div class="price-value">
            <span class="currency">${pkg.currency}</span>
            <span class="amount">${pkg.price.toLocaleString()}</span>
          </div>
          <span class="price-sub">Includes all taxes, Nusuk permits & hotel fees</span>
        </div>

        <button class="btn btn-primary btn-block modal-book-trigger" data-pkg-id="${pkg.id}" data-pkg-title="${pkg.title}">
          Select & Inquire for This Package
        </button>
      </div>
    </div>
  `;

  // Attach book trigger
  modalBody.querySelector(".modal-book-trigger").addEventListener("click", () => {
    modal.close();
    selectPackageForInquiry(pkg.id, pkg.title);
  });

  document.body.classList.add("overflow-hidden");
  modal.showModal();
}

function selectPackageForInquiry(pkgId, pkgTitle) {
  const packageSelect = document.getElementById("inquiry-package");
  const messageField = document.getElementById("inquiry-message");

  if (packageSelect) {
    packageSelect.value = pkgId;
  }
  if (messageField && !messageField.value) {
    messageField.value = `Salam, I would like to check availability and obtain a formal quotation for the "${pkgTitle}".`;
  }

  const contactSection = document.getElementById("inquiry-section");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    const nameInput = document.getElementById("inquiry-name");
    if (nameInput) setTimeout(() => nameInput.focus(), 600);
  }
}

/* ==========================================================================
   Inquiry / Contact Form Handler
   ========================================================================== */
function initInquiryForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("inquiry-name")?.value.trim();
    const email = document.getElementById("inquiry-email")?.value.trim();
    const phone = document.getElementById("inquiry-phone")?.value.trim();
    const packageVal = document.getElementById("inquiry-package")?.value;
    const pilgrims = document.getElementById("inquiry-pilgrims")?.value || 1;

    if (!name || !email || !phone) {
      window.showToast("Please fill in your name, email, and phone number.", "warning");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="4" opacity="0.25"/>
        <path d="M4 12a8 8 0 018-8" stroke-width="4"/>
      </svg>
      Sending Reservation Request...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      window.showToast(
        `JazakAllah Khair, ${name}! Your inquiry has been received. Our dedicated Hajj & Umrah concierge will contact you via WhatsApp / Phone within 2 hours.`,
        "success"
      );
    }, 1200);
  });
}

/* ==========================================================================
   Scroll Effects & Back to Top
   ========================================================================== */
function initScrollEffects() {
  const backToTopBtn = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", () => {
    if (backToTopBtn) {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("is-visible");
      } else {
        backToTopBtn.classList.remove("is-visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
