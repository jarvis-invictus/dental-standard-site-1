'use client';

import React, { useEffect } from 'react';
import {
  IoCloseSharp,
  IoTimeOutline,
  IoCheckmarkCircleSharp,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';

import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import type { Service, TreatmentDetail } from '@/data/home';

type TreatmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
  detail: TreatmentDetail;
};

export function TreatmentModal({
  isOpen,
  onClose,
  service,
  detail,
}: TreatmentModalProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div className="modal-container active" onClick={onClose}>
      <div className="modal-overlay" />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className="modal"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '620px' }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoCloseSharp aria-hidden="true" />
        </button>

        <p className="section-subtitle modal-subtitle">Treatment Details</p>
        <h2 className="h2 modal-title">{service.title}</h2>

        <div
          className="modal-text"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBlockEnd: '25px',
          }}
        >
          <p
            style={{
              fontSize: '1.5rem',
              lineHeight: '1.6',
              color: 'var(--sonic-silver)',
            }}
          >
            {detail.detailedDescription}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              background: '#f8fafe',
              padding: '15px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: 600,
                  color: 'var(--oxford-blue-1)',
                  fontSize: '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <IoTimeOutline style={{ color: 'var(--royal-blue-light)' }} />{' '}
                Duration
              </p>
              <p
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--sonic-silver)',
                  marginBlockStart: '4px',
                }}
              >
                {detail.duration}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 600,
                  color: 'var(--oxford-blue-1)',
                  fontSize: '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <IoShieldCheckmarkOutline
                  style={{ color: 'var(--royal-blue-light)' }}
                />{' '}
                Ideal For
              </p>
              <p
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--sonic-silver)',
                  marginBlockStart: '4px',
                }}
              >
                {detail.idealFor}
              </p>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'var(--oxford-blue-1)',
                marginBlockEnd: '10px',
              }}
            >
              Key Benefits
            </h4>
            <ul
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              {detail.benefits.map((benefit, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '1.4rem',
                    color: 'var(--sonic-silver)',
                  }}
                >
                  <IoCheckmarkCircleSharp
                    style={{
                      color: '#22c55e',
                      flexShrink: 0,
                      marginBlockStart: '2px',
                    }}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}
        >
          <button
            className="btn"
            style={{
              backgroundImage: 'none',
              backgroundColor: '#f1f5f9',
              color: '#475569',
              boxShadow: 'none',
              border: '1px solid #e2e8f0',
              padding: '12px 24px',
            }}
            onClick={onClose}
          >
            Back
          </button>
          <WhatsAppButton
            variant="primary"
            message={`Hi, I would like to book a consultation for ${service.title} at Smile Dental Clinic.`}
            style={{ padding: '12px 24px' }}
          >
            Book Appointment
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
