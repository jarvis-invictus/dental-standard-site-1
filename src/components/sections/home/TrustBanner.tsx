'use client';

import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { clinicConfig } from '@/lib/clinic-config';

export function TrustBanner() {
  const avatars = [
    {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
      alt: 'Patient 1',
      fallback: 'P1',
    },
    {
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
      alt: 'Patient 2',
      fallback: 'P2',
    },
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
      alt: 'Patient 3',
      fallback: 'P3',
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      alt: 'Patient 4',
      fallback: 'P4',
    },
  ];

  return (
    <div className="trust-banner">
      <div className="avatar-group">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="avatar-item">
            <AvatarImage src={avatar.src} alt={avatar.alt} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <p className="trust-text">
        Trusted by{' '}
        <strong className="trust-count">
          {clinicConfig.stats.patients_treated}
        </strong>{' '}
        Happy Patients
      </p>
    </div>
  );
}
