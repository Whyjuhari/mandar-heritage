import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Budaya", href: "#objects" },
  { label: "Pemetaan", href: "#mapping" },
  { label: "Pengembangan", href: "#plan" },
];

const NAV_HEIGHT = 80;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top, behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  const handleMobileLink = (e, href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();

    setTimeout(() => {
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({
        top,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }, 200);
  };

  const resolveHref = (href) => (isHome ? href : `/${href}`);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${scrolled ? "bg-surface/95 border-primary/10 shadow-[0_4px_20px_-4px_rgba(51,33,13,0.10)]" : "bg-transparent border-transparent shadow-none"}`}>
        <div className="flex justify-between items-center h-20 px-4 md:px-16 max-w-7xl mx-auto">
          <a
            href={resolveHref("#home")}
            onClick={(e) => scrollToSection(e, "#home")}
            className="text-[28px] font-semibold text-primary tracking-tight flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/images/optimized/logo-dm-96.webp"
              srcSet="/images/optimized/logo-dm-96.webp 96w, /images/optimized/logo-dm-192.webp 192w"
              sizes="60px"
              alt="Mandar Digital Heritage"
              decoding="async"
              fetchPriority="high"
              className="h-15 w-auto object-contain mix-blend-multiply"
            />
            Digital Heritage
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium border-b-2 border-transparent hover:border-secondary">
                {link.label}
              </a>
            ))}
            <a
              href={resolveHref("#objects")}
              onClick={(e) => scrollToSection(e, "#objects")}
              className="bg-primary text-on-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all active:scale-95">
              Lihat Objek Budaya
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            className="md:hidden p-2 text-primary transition-transform duration-200"
            onClick={() => setIsOpen((v) => !v)}>
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop — tipis, klik untuk tutup */}
            <motion.div
              className="fixed inset-0 z-40 bg-primary/10 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown panel */}
            <motion.div
              className="fixed top-20 left-0 right-0 z-50 mx-4 rounded-2xl bg-surface border border-primary/10 shadow-[0_8px_32px_-4px_rgba(51,33,13,0.18)] overflow-hidden"
              initial={
                shouldReduceMotion ? {} : { opacity: 0, y: -10, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                shouldReduceMotion ? {} : { opacity: 0, y: -10, scale: 0.98 }
              }
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              {/* Nav links */}
              <div className="px-3 pt-3 pb-2 flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={resolveHref(link.href)}
                    onClick={(e) => handleMobileLink(e, link.href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.05, duration: 0.2 }}>
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* CTA button */}
              <div className="px-3 pb-3 pt-1 border-t border-primary/8">
                <a
                  href={resolveHref("#objects")}
                  onClick={(e) => handleMobileLink(e, "#objects")}
                  className="block w-full bg-primary text-on-primary px-6 py-3 rounded-xl text-sm font-semibold text-center hover:bg-primary/90 transition-all active:scale-95 mt-2">
                  Lihat Objek Budaya
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
