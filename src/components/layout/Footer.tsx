import Link from 'next/link';
import type { ReactElement } from 'react';
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMailOutline,
  IoTimeOutline,
} from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';

import { clinicConfig } from '@/lib/clinic-config';

const socialLinks = Object.entries(clinicConfig.social || {}).map(
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

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <Link href="/" className="logo">
              {clinicConfig.name}
            </Link>

            <p className="footer-text">
              Welcome to {clinicConfig.name}. {clinicConfig.tagline}. We combine
              advanced technology with compassionate care to give you the
              perfect smile.
            </p>

            <div className="schedule">
              <span className="schedule-icon">
                <IoTimeOutline aria-hidden="true" />
              </span>
              <span className="span" style={{ whiteSpace: 'pre-line' }}>
                {clinicConfig.hours
                  .map(h => `${h.day}:\\n${h.time}`)
                  .join('\\n\\n')}
              </span>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>
            <li className="footer-item">
              <span className="item-icon">
                <IoLocationOutline aria-hidden="true" />
              </span>
              <address className="item-text" style={{ whiteSpace: 'pre-line' }}>
                {clinicConfig.contact.address_full}
              </address>
            </li>
            <li className="footer-item">
              <span className="item-icon">
                <IoCallOutline aria-hidden="true" />
              </span>
              <a
                href={`tel:${clinicConfig.contact.phone_primary.replace(/\\s+/g, '')}`}
                className="footer-link"
              >
                {clinicConfig.contact.phone_primary}
              </a>
            </li>
            <li className="footer-item">
              <span className="item-icon">
                <IoMailOutline aria-hidden="true" />
              </span>
              <a
                href={`mailto:${clinicConfig.contact.email}`}
                className="footer-link"
              >
                {clinicConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {clinicConfig.name}. All Rights
            Reserved.{' '}
            <span
              style={{
                display: 'inline-block',
                marginInline: '10px',
                color: 'hsl(0, 0%, 60%)',
              }}
            >
              |
            </span>
            Powered by{' '}
            <a
              href="https://invictus-ai.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--primary-color, #4f46e5)',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              Invictus AI
            </a>
          </p>

          <ul className="legal-links">
            <li>
              <Link href="/privacy" className="legal-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="legal-link">
                Terms of Service
              </Link>
            </li>
          </ul>

          <ul className="social-list">
            {socialLinks.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="social-link"
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
