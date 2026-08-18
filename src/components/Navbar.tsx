'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Image
            src="/assets/logo/Vlogo-light.png"
            alt="VishwaSai Consultancy"
            width={120}
            height={100}
            priority
          />
        </Link>

        <nav className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>

          <Link
            href="/services"
            className={`nav-link ${pathname === '/services' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>

          <Link
            href="/Industries"
            className={`nav-link ${pathname === '/Industries' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Industries
          </Link>

          <Link
            href="/case-studies"
            className={`nav-link ${pathname === '/case-studies' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Case Studies
          </Link>

          <Link
            href="/approach"
            className={`nav-link ${pathname === '/approach' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Approach
          </Link>

          <Link
            href="/insights"
            className={`nav-link ${pathname === '/insights' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Insights
          </Link>

          <Link
            href="/portfolio"
            className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>

          {/* <Link
            href="/faq"
            className={`nav-link ${pathname === '/faq' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            FAQ
          </Link> */}

          {/* <Link href="/contact" className="nav-link" onClick={closeMobileMenu}>
            Contact Us
          </Link> */}
        </nav>

        <div className="navbar-actions">
          <Link href="/contact" className="enquire-btn" onClick={closeMobileMenu}>
            <span>Enquire Now</span>
          </Link>

          <button
            className={`menu-btn ${mobileOpen ? 'open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((s) => !s);
            }}
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  );
}
