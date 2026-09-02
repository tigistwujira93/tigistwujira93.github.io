/* =========================================================
   PORTFOLIO JAVASCRIPT
   Vanilla JavaScript only
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const header = document.getElementById("site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");
  const revealElements = document.querySelectorAll(".reveal");
  const currentYear = document.getElementById("current-year");


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  /* =======================================================
     STICKY HEADER
  ======================================================= */

  const handleHeaderScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  handleHeaderScroll();

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true
  });


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const closeMenu = () => {
    navigation.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
  };


  const openMenu = () => {
    navigation.classList.add("open");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
    document.body.classList.add("menu-open");
  };


  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }


  /* =======================================================
     CLOSE MOBILE MENU AFTER CLICKING NAVIGATION
  ======================================================= */

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });


  const navCta = document.querySelector(".nav-cta");

  if (navCta) {
    navCta.addEventListener("click", () => {
      closeMenu();
    });
  }


  /* =======================================================
     CLOSE MENU WITH ESCAPE
  ======================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });


  /* =======================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
  ======================================================= */

  document.addEventListener("click", (event) => {
    if (
      navigation.classList.contains("open") &&
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });


  /* =======================================================
     ACTIVE NAVIGATION LINK
  ======================================================= */

  const updateActiveNavigation = () => {

    const scrollPosition = window.scrollY + 160;

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });


    navLinks.forEach((link) => {

      const target = link.getAttribute("href");

      link.classList.toggle(
        "active",
        target === `#${currentSection}`
      );

    });
  };


  updateActiveNavigation();

  window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
  });


  /* =======================================================
     SMOOTH SCROLLING
  ======================================================= */

  const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();

      const headerHeight = header.offsetHeight;

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (!prefersReducedMotion && "IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );


    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

  }


  /* =======================================================
     KEYBOARD ACCESSIBILITY FOR PROJECT / CARD ELEMENTS
  ======================================================= */

  const interactiveCards = document.querySelectorAll(
    ".project-card, .skill-card, .stat-card, .experience-card"
  );

  interactiveCards.forEach((card) => {

    card.addEventListener("keydown", (event) => {

      if (event.key === "Enter" || event.key === " ") {
        const link = card.querySelector("a");

        if (link) {
          event.preventDefault();
          link.click();
        }
      }

    });

  });


  /* =======================================================
     PARALLAX-LIKE HERO DECORATION
     Disabled when reduced motion is preferred.
  ======================================================= */

  if (!prefersReducedMotion) {

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual) {

      window.addEventListener(
        "mousemove",
        (event) => {

          const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

          const y =
            (event.clientY / window.innerHeight - 0.5) * 10;

          heroVisual.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;

        },
        { passive: true }
      );

    }

  }


  /* =======================================================
     RESET HERO TRANSFORM ON MOBILE
  ======================================================= */

  const handleResize = () => {

    if (window.innerWidth <= 820) {

      const heroVisual =
        document.querySelector(".hero-visual");

      if (heroVisual) {
        heroVisual.style.transform = "none";
      }

    }

  };

  handleResize();

  window.addEventListener("resize", handleResize);


  /* =======================================================
     UPDATE URL HASH WITHOUT JUMPING
  ======================================================= */

  window.addEventListener("hashchange", () => {

    const target = window.location.hash;

    if (!target) {
      return;
    }

    const targetElement = document.querySelector(target);

    if (targetElement) {
      targetElement.setAttribute("tabindex", "-1");
    }

  });

});
