'use client';

import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface WhatsAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  message?: string;
  variant?: 'primary' | 'secondary' | 'floating' | 'outline';
  showIcon?: boolean;
}

const WHATSAPP_NUMBER = '919699577641';
const DEFAULT_MESSAGE =
  'Hi, I am interested in booking a dental appointment at Smile Dental Clinic.';

export function WhatsAppButton({
  children,
  className,
  message = DEFAULT_MESSAGE,
  variant = 'primary',
  showIcon = true,
  type = 'button',
  onClick,
  ...props
}: WhatsAppButtonProps): ReactElement {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      // Track the WhatsApp click for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: message.slice(0, 50),
          value: 1,
        });
      }

      // Open WhatsApp with pre-filled message
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const getVariantClass = (): string => {
    switch (variant) {
      case 'primary':
        return 'whatsapp-btn-primary';
      case 'secondary':
        return 'whatsapp-btn-secondary';
      case 'floating':
        return 'whatsapp-btn-floating';
      case 'outline':
        return 'whatsapp-btn-outline';
      default:
        return 'whatsapp-btn-primary';
    }
  };

  const getIcon = (): ReactElement => {
    if (!showIcon) {
      return null as unknown as ReactElement;
    }

    return (
      <svg
        className="whatsapp-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.793h-.004c-1.586 0-3.134-.426-4.48-1.229l-.322-.192-3.34.877.892-3.257-.208-.329c-.881-1.406-1.346-3.045-1.346-4.724 0-4.925 4.006-8.931 8.931-8.931 2.387 0 4.629.93 6.316 2.619 1.687 1.686 2.617 3.928 2.617 6.315 0 4.925-4.005 8.93-8.928 8.93M12.002 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.433 5.183L1.45 22.55l5.47-1.435A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12.002 2z" />
      </svg>
    ) as ReactElement;
  };

  return (
    <motion.button
      type={type}
      className={`${getVariantClass()} ${className || ''}`}
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...(props as any)}
    >
      {getIcon()}
      {children}
    </motion.button>
  );
}

// Floating WhatsApp Button for all pages
export function FloatingWhatsAppButton(): ReactElement {
  return (
    <div className="floating-whatsapp-container">
      <WhatsAppButton
        variant="floating"
        showIcon={false}
        message="Hi, I have a question about dental services at Smile Dental Clinic."
        className="floating-whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="floating-whatsapp-icon"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.793h-.004c-1.586 0-3.134-.426-4.48-1.229l-.322-.192-3.34.877.892-3.257-.208-.329c-.881-1.406-1.346-3.045-1.346-4.724 0-4.925 4.006-8.931 8.931-8.931 2.387 0 4.629.93 6.316 2.619 1.687 1.686 2.617 3.928 2.617 6.315 0 4.925-4.005 8.93-8.928 8.93M12.002 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.433 5.183L1.45 22.55l5.47-1.435A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12.002 2z" />
        </svg>
      </WhatsAppButton>
      <span className="floating-whatsapp-label">Chat Now</span>
    </div>
  );
}

// Phone Call Button (for direct calls)
export function PhoneButton({
  children,
  className,
  onClick,
  ...props
}: Omit<
  WhatsAppButtonProps,
  'message' | 'variant' | 'showIcon'
>): ReactElement {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      window.location.href = 'tel:+919699577641';
    }
  };

  return (
    <motion.button
      type="button"
      className={`phone-btn ${className || ''}`}
      onClick={handleClick}
      aria-label="Call us"
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...(props as any)}
    >
      <svg
        className="phone-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      {children}
    </motion.button>
  );
}
