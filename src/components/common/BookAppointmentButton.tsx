'use client';

import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface BookAppointmentButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  message?: string;
}

const WHATSAPP_NUMBER = '919699577641';
const DEFAULT_MESSAGE =
  'Hi, I would like to book a dental appointment at Smile Dental Clinic.';

export function BookAppointmentButton({
  children,
  className,
  message = DEFAULT_MESSAGE,
  type = 'button',
  ...props
}: BookAppointmentButtonProps): ReactElement {
  const handleClick = (): void => {
    // Track the WhatsApp click for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'Book Appointment Button',
        value: 1,
      });
    }

    // Open WhatsApp with pre-filled message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button type={type} className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
