import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactElement } from 'react';

import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Page Not Found | Smile Dental Clinic - Aundh, Pune',
  description:
    'The page you are looking for could not be found. Contact Smile Dental Clinic in Aundh, Pune for assistance.',
};

export default function NotFoundPage(): ReactElement {
  return (
    <main className="not-found-page">
      <section className="error-section">
        <div className="container">
          <div className="error-content">
            <div className="error-code">
              <span className="digit">4</span>
              <span className="digit zero">0</span>
              <span className="digit">4</span>
            </div>

            <h1 className="error-title">Page Not Found</h1>

            <p className="error-message">
              Oops! The page you are looking for seems to have gone missing. It
              might have been moved, deleted, or perhaps it never existed.
            </p>

            <div className="error-actions">
              <Link href="/" className="btn btn-primary">
                Back to Home
              </Link>

              <WhatsAppButton
                variant="outline"
                message="Hi, I need help finding something on your website. Can you assist me?"
                className="btn btn-whatsapp-outline"
              >
                Get Help on WhatsApp
              </WhatsAppButton>
            </div>

            <div className="quick-links">
              <p className="quick-links-title">Or try these popular pages:</p>
              <div className="links-grid">
                <Link href="/#service" className="quick-link">
                  Our Services
                </Link>
                <Link href="/#about" className="quick-link">
                  About Us
                </Link>
                <Link href="/#location" className="quick-link">
                  Find Us
                </Link>
              </div>
            </div>

            <div className="contact-info">
              <p>
                <strong>Smile Dental Clinic</strong>
                <br />
                123, ITI Road, Aundh, Pune - 411007
                <br />
                WhatsApp/Phone: +91 96995 77641
                <br />
                Mon-Sun: 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
