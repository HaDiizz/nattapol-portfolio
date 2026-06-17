import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

function initAnimations() {
  const mm = gsap.matchMedia();

  mm.add(
    {
      reduceMotion: '(prefers-reduced-motion: reduce)',
      isDesktop: '(min-width: 768px)',
      isMobile: '(max-width: 767px)',
    },
    (context) => {
      const { reduceMotion, isDesktop } = context.conditions as Record<
        string,
        boolean
      >;

      if (reduceMotion) {
        return; // skip animations
      }

      // Initialize ScrollSmoother for silky smooth scrolling on desktop
      if (isDesktop) {
        ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.5,
          effects: true,
        });
      }

      // Prevent flickering by setting initial state before scroll triggers
      gsap.set(
        [
          '.section-heading',
          '.section-content',
          '.timeline-item',
          '.skill-tag',
          '.contact-item',
        ],
        { autoAlpha: 0 }
      );

      // Hero entrance - smoother, longer duration, more dramatic easing
      const tl = gsap.timeline({
        defaults: { ease: 'expo.out', duration: 1.2 },
      });

      tl.from('.hero-avatar', { autoAlpha: 0, scale: 0.9, duration: 1.5 })
        .from('.hero-name', { autoAlpha: 0, y: 40 }, '-=1.1')
        .from('.hero-role', { autoAlpha: 0, y: 30 }, '-=1.0')
        .from('.hero-meta', { autoAlpha: 0, y: 20 }, '-=1.0')
        .from('.hero-btns', { autoAlpha: 0, y: 20 }, '-=1.0')
        .from('.hero-stats', { autoAlpha: 0, duration: 1 }, '-=0.8');

      // Navbar fade down
      gsap.from('.nav-header', {
        y: -30,
        autoAlpha: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.3,
      });

      // Generic section headings
      gsap.utils.toArray<HTMLElement>('.section-heading').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // Generic section content
      gsap.utils.toArray<HTMLElement>('.section-content').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // Experience timeline
      const expSection = document.getElementById('experience');
      if (expSection) {
        gsap.fromTo(
          '.timeline-line',
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top',
            ease: 'none',
            scrollTrigger: {
              trigger: expSection,
              start: 'top 60%',
              end: 'bottom 80%',
              scrub: 1,
            },
          }
        );

        ScrollTrigger.batch('.timeline-item', {
          interval: 0.1,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { autoAlpha: 0, y: 30, x: -10 },
              {
                autoAlpha: 1,
                y: 0,
                x: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
                overwrite: true,
              }
            ),
          start: 'top 85%',
        });

        // Cool elastic pop animation for the dot when the line reaches it
        ScrollTrigger.batch('.timeline-dot', {
          interval: 0.1,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              scale: 1,
              stagger: 0.1,
              duration: 1,
              ease: 'elastic.out(1, 0.4)',
              overwrite: true,
            }),
          start: 'top 65%',
        });
      }

      // Skills tags
      ScrollTrigger.batch('.skill-tag', {
        interval: 0.1,
        batchMax: 5,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { autoAlpha: 0, scale: 0.8, y: 10 },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.6,
              ease: 'back.out(1.5)',
              overwrite: true,
            }
          ),
        start: 'top 90%',
      });

      // Contact section
      ScrollTrigger.batch('.contact-item', {
        interval: 0.1,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 30 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.15,
              duration: 1,
              ease: 'power3.out',
              overwrite: true,
            }
          ),
        start: 'top 85%',
      });

      ScrollTrigger.refresh();

      // Smooth scroll for all anchor links
      document
        .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        .forEach((anchor) => {
          anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              e.preventDefault();
              const smoother = ScrollSmoother.get();
              if (smoother) {
                smoother.scrollTo(targetElement, true, 'top top');
              } else {
                gsap.to(window, {
                  scrollTo: targetElement,
                  duration: 1,
                  ease: 'power3.out',
                });
              }
            }
          });
        });
      return () => {
        ScrollSmoother.get()?.kill();
      };
    }
  );
}

function initScrollActions() {
  const widget = document.getElementById('scroll-actions-widget');
  const autoScrollBtn = document.getElementById('auto-scroll-btn');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const scrollSpeedBtn = document.getElementById('scroll-speed-btn');
  const playIcon = autoScrollBtn?.querySelector('.play-icon');
  const pauseIcon = autoScrollBtn?.querySelector('.pause-icon');

  if (!widget || !autoScrollBtn || !scrollTopBtn || !scrollSpeedBtn) return;

  let isAutoScrolling = false;
  let scrollSpeed = 1; // 1x to 3x
  const basePixelsPerSec = 150;

  // Show scroll-top button after scrolling down 300px natively
  const handleScroll = () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  scrollSpeedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollSpeed = scrollSpeed >= 3 ? 1 : scrollSpeed + 1;
    scrollSpeedBtn.innerText = `${scrollSpeed}x`;
    scrollSpeedBtn.title = `Speed: ${scrollSpeed}x`;

    // If currently scrolling, restart with new speed
    if (isAutoScrolling) {
      stopAutoScroll(null, true);
      startAutoScroll();
    }
  });

  const stopAutoScroll = (e?: Event | null, isRestarting = false) => {
    if (!isAutoScrolling) return;
    isAutoScrolling = false;
    gsap.killTweensOf(window); // Safely kill all window tweens

    if (!isRestarting) {
      playIcon?.classList.remove('hidden');
      pauseIcon?.classList.add('hidden');
    }
  };

  const startAutoScroll = () => {
    isAutoScrolling = true;
    playIcon?.classList.add('hidden');
    pauseIcon?.classList.remove('hidden');

    const maxScroll =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;
    const currentScroll = window.scrollY;
    const remainingScroll = maxScroll - currentScroll;
    const duration = remainingScroll / (basePixelsPerSec * scrollSpeed);

    gsap.to(window, {
      scrollTo: { y: 'max', autoKill: false },
      duration: duration,
      ease: 'none',
      onComplete: stopAutoScroll,
    });
  };

  autoScrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  });

  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    stopAutoScroll();
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power3.inOut' });
    }
  });

  // Listen for user interaction to explicitly stop scroll (removed mousedown to prevent button conflicts)
  window.addEventListener('wheel', stopAutoScroll, { passive: true });
  window.addEventListener('touchstart', stopAutoScroll, { passive: true });
}

document.addEventListener('astro:page-load', () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  initAnimations();
  initScrollActions();

  // Experience Projects Toggle
  document.querySelectorAll('.project-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling as HTMLElement;
      const showText = btn.querySelector('.show-text');
      const hideText = btn.querySelector('.hide-text');

      if (!content) return;

      const isOpen = content.classList.contains('is-open');

      if (isOpen) {
        gsap.to(content, {
          height: 0,
          autoAlpha: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
        content.classList.remove('is-open');
        showText?.classList.remove('hidden');
        hideText?.classList.add('hidden');
      } else {
        gsap.to(content, {
          height: 'auto',
          autoAlpha: 1,
          duration: 0.5,
          ease: 'power3.out',
          onComplete: () => ScrollTrigger.refresh(),
        });
        content.classList.add('is-open');
        showText?.classList.add('hidden');
        hideText?.classList.remove('hidden');
      }
    });
  });
});

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
