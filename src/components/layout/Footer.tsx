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

const socialLinks = [
  {
    href: 'https://www.facebook.com/yourclinic',
    label: 'Facebook',
    icon: <IoLogoFacebook />,
  },
  {
    href: 'https://www.instagram.com/yourclinic',
    label: 'Instagram',
    icon: <IoLogoInstagram />,
  },
  {
    href: 'https://twitter.com/yourclinic',
    label: 'Twitter',
    icon: <IoLogoTwitter />,
  },
] as const;

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <Link href="/" className="logo">
              Smile Dental Clinic
            </Link>

            <p className="footer-text">
              Premium dental care in Aundh, Pune. We combine advanced technology
              with compassionate care to give you the perfect smile. Book your
              appointment on WhatsApp for a healthier, brighter smile today.
            </p>

            <div className="schedule">
              <span className="schedule-icon">
                <IoTimeOutline aria-hidden="true" />
              </span>
              <span className="span">
                Monday - Sunday:
                <br />
                10:00 AM - 8:00 PM
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
              <address className="item-text">
                123, ITI Road, Near Bata Showroom
                <br />
                Aundh, Pune - 411007, Maharashtra
              </address>
            </li>
            <li className="footer-item">
              <span className="item-icon">
                <IoCallOutline aria-hidden="true" />
              </span>
              <a href="tel:+919699577641" className="footer-link">
                +91 96995 77641
              </a>
            </li>
            <li className="footer-item">
              <span className="item-icon">
                <IoMailOutline aria-hidden="true" />
              </span>
              <a
                href="mailto:contact@smiledentalclinic.in"
                className="footer-link"
              >
                contact@smiledentalclinic.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div
            className="copyright-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              textAlign: 'center',
            }}
          >
            <p className="copyright">
              &copy; {new Date().getFullYear()} Smile Dental Clinic. All Rights
              Reserved.
            </p>
            <p style={{ color: 'hsl(0, 0%, 60%)', fontSize: '0.875rem' }}>
              Powered by{' '}
              <a
                href="https://invictus-ai.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
                className="footer-link"
              >
                Invictus AI
              </a>
            </p>
          </div>

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
