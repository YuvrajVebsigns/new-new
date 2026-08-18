'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid footer-grid-5">
            {/* COLUMN 1 - ABOUT COMPANY */}
            <div className="footer-widget footer-brand">
              <Link href="/" className="footer-logo">
                <Image
                  src="/assets/logo/Vlogo-light.png"
                  alt="VishwaSai Consultancy"
                  width={120}
                  height={100}
                  priority
                />
              </Link>

              <div className="footer-about">
                <h4 className="footer-about-title">About Company</h4>
                <p className="footer-description">
                  Expert consultancy for co-operative agriculture and finance
                </p>
                <p className="footer-since">
                  <strong>Since 2009</strong>
                </p>
              </div>
            </div>

            {/* COLUMN 2 - USEFUL LINKS */}
            <div className="footer-widget">
              <h4 className="footer-title">Useful Links</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 - OFFICE ADDRESS */}
            <div className="footer-widget">
              <h4 className="footer-title">Office Address</h4>
              <p className="footer-description footer-address">
                Platinum 9, 4th Floor, A/20,
                <br />
                No. 52/5, Sr.No. 1, Pashan - Sus Rd,
                <br />
                Near Audi Showroom, Baner,
                <br />
                Pune, Maharashtra 411045
              </p>
            </div>

            {/* COLUMN 4 - EMAIL & PHONE */}
            <div className="footer-widget">
              <h4 className="footer-title">Get In Touch</h4>

              <div className="footer-contact-info">
                <div className="footer-contact-item-block">
                  <p className="footer-contact-label">Email Address</p>
                  <a href="mailto:vishwasai@vishwasai.com" className="footer-contact-link">
                    vishwasai@vishwasai.com
                  </a>
                </div>

                <div className="footer-contact-item-block">
                  <p className="footer-contact-label">Phone Number</p>
                  <a href="tel:+919588686363" className="footer-contact-link">
                    +91 9588 686 363
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMN 5 - FOLLOW US */}
            <div className="footer-widget">
              <h4 className="footer-title">Follow Us</h4>

              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/vishwasaiconsultancy/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/company/vishwasai-consultancy"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/vishwasaiconsultancy/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-wrapper">
          <div className="footer-copy">
            © 2026 Vishwasai Consultancy LLP. All Rights Reserved. | Designed &amp; Developed by{' '}
            <a href="https://www.design-lab.co.in/" target="_blank" rel="noopener noreferrer">
              DesignLab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
