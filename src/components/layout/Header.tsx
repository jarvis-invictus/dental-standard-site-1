'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import {
  IoCallOutline,
  IoCloseSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailOutline,
  IoMenuSharp,
} from 'react-icons/io5';

import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { clinicConfig } from '@/lib/clinic-config';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#service' },
  { label: 'About', href: '#about' },
  { label: 'Find Us', href: '#location' },
] as const;

const SOCIAL_LINKS = Object.entries(clinicConfig.social || {}).map(
  ([network, href]) => {
    let icon = <IoLogoFacebook />;
    let label = 'Facebook';
    if (network === 'instagram') {
      icon = <IoLogoInstagram />;
      label = 'Instagram';
    }
    if (network === 'twitter') {
      icon = <IoLogoTwitter />;
      label = 'Twitter';
    }
    if (network === 'youtube') {
      icon = <IoLogoYoutube />;
      label = 'YouTube';
    }
    return { href: href as string, label, icon };
  }
);

export function Header(): ReactElement {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const headerBottomClassName = useMemo(() => {
    const classNames = ['header-bottom'];
    if (isSticky) {
      classNames.push('active');
    }
    return classNames.join(' ');
  }, [isSticky]);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <ul className="contact-list">
            <li className="contact-item">
              <IoMailOutline aria-hidden="true" color="hsl(225, 68%, 53%)" />
              <a
                href={`mailto:${clinicConfig.contact.email}`}
                className="contact-link"
              >
                {clinicConfig.contact.email}
              </a>
            </li>
            <li className="contact-item">
              <IoCallOutline aria-hidden="true" color="hsl(225, 68%, 53%)" />
              <a
                href={`tel:${clinicConfig.contact.phone_primary.replace(/\\s+/g, '')}`}
                className="contact-link"
              >
                {clinicConfig.contact.phone_primary}
              </a>
            </li>
          </ul>

          <ul className="social-list" aria-label="Follow us on social media">
            {SOCIAL_LINKS.map(social => (
              <li key={social.href}>
                <a
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={headerBottomClassName} data-header>
        <div className="container">
          <Link
            href="/"
            className="logo"
            aria-label={`${clinicConfig.name} Home`}
          >
            {clinicConfig.name}
          </Link>

          <nav
            className={`navbar container${isMenuOpen ? ' active' : ''}`}
            data-navbar
          >
            <ul className="navbar-list">
              {NAV_LINKS.map(nav => {
                const isActive = false; // Single page app

                return (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className={`navbar-link${isActive ? ' active' : ''}`}
                      data-nav-link
                    >
                      {nav.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <WhatsAppButton variant="primary" className="header-cta-btn">
            Book appointment
          </WhatsAppButton>

          <button
            className={`nav-toggle-btn${isMenuOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            data-nav-toggler
            onClick={() => setIsMenuOpen(prev => !prev)}
            type="button"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <IoCloseSharp aria-hidden="true" className="close-icon" />
            ) : (
              <IoMenuSharp aria-hidden="true" className="menu-icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
