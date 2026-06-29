'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties, ReactElement } from 'react';
import { useState } from 'react';
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMailOutline,
} from 'react-icons/io5';

import { TreatmentModal } from '@/components/common/TreatmentModal';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { TrustBanner } from '@/components/sections/home/TrustBanner';
import { MotionReveal } from '@/components/ui/MotionReveal';
import type { DoctorSocialNetwork, Service } from '@/data/home';
import { doctors, services, treatmentDetails } from '@/data/home';
import { clinicConfig } from '@/lib/clinic-config';

const heroBackground: CSSProperties = {
  backgroundImage: "url('/assets/images/hero-bg.webp')",
};

const socialIconMap: Record<DoctorSocialNetwork, ReactElement> = {
  facebook: <IoLogoFacebook aria-hidden="true" />,
  instagram: <IoLogoInstagram aria-hidden="true" />,
  twitter: <IoLogoTwitter aria-hidden="true" />,
};

export default function HomePage(): ReactElement {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main>
      <article>
        <section
          className="section hero"
          id="home"
          style={heroBackground}
          aria-label="hero"
        >
          <div className="container">
            <div className="hero-content">
              <MotionReveal animation="fade-up" delay={0.1}>
                <h1 className="h1 hero-title">{clinicConfig.tagline}</h1>
              </MotionReveal>
              <MotionReveal animation="fade-up" delay={0.2}>
                <p className="hero-text">
                  Experience advanced, painless dental treatments at{' '}
                  {clinicConfig.name}. We blend modern clinical technology with
                  warm, personalized hospitality.
                </p>
              </MotionReveal>
              <MotionReveal animation="fade-up" delay={0.3}>
                <TrustBanner />
              </MotionReveal>
              <MotionReveal animation="fade-up" delay={0.4}>
                <div style={{ marginBlockStart: '10px' }}>
                  <WhatsAppButton variant="primary">
                    Book Appointment
                  </WhatsAppButton>
                </div>
              </MotionReveal>
            </div>

            <MotionReveal
              animation="slide-in-right"
              delay={0.5}
              duration={0.8}
              className="hero-banner"
            >
              <figure>
                <Image
                  src="/assets/images/hero-banner.webp"
                  width={587}
                  height={839}
                  alt="Dentist smiling with patient"
                  className="w-100"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </figure>
            </MotionReveal>
          </div>
        </section>

        <section className="section service" id="service" aria-label="service">
          <div className="container">
            <MotionReveal animation="fade-up" delay={0.1}>
              <p className="section-subtitle text-center">Our Services</p>
              <h2 className="h2 section-title text-center">
                Care that keeps your smile thriving
              </h2>
            </MotionReveal>
            <ul className="service-list">
              {services.slice(0, 3).map((service, index) => (
                <MotionReveal
                  animation="fade-up"
                  delay={0.2 + index * 0.1}
                  key={service.id}
                  className="h-full"
                >
                  <li>
                    <div
                      className="service-card"
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedService(service)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedService(service);
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-icon">
                        <Image
                          src={service.icon}
                          alt=""
                          width={100}
                          height={100}
                          className="w-100"
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                        }}
                      >
                        <h3 className="h3 card-title">{service.title}</h3>
                        <p className="card-text" style={{ flexGrow: 1 }}>
                          {service.description}
                        </p>
                        <button
                          style={{
                            marginTop: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--blue-crayola)',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          Learn More
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </MotionReveal>
              ))}

              <li className="service-banner" aria-hidden>
                <Image
                  src="/assets/images/service-banner.webp"
                  width={409}
                  height={467}
                  alt="Dental team collaborating"
                  className="w-100"
                />
              </li>

              {services.slice(3).map((service, index) => (
                <MotionReveal
                  animation="fade-up"
                  delay={0.2 + index * 0.1}
                  key={service.id}
                  className="h-full"
                >
                  <li>
                    <div
                      className="service-card"
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedService(service)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedService(service);
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-icon">
                        <Image
                          src={service.icon}
                          alt=""
                          width={100}
                          height={100}
                          className="w-100"
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                        }}
                      >
                        <h3 className="h3 card-title">{service.title}</h3>
                        <p className="card-text" style={{ flexGrow: 1 }}>
                          {service.description}
                        </p>
                        <button
                          style={{
                            marginTop: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--blue-crayola)',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          Learn More
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </MotionReveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section about" id="about" aria-label="about">
          <div className="container">
            <MotionReveal
              animation="slide-in-left"
              delay={0.2}
              duration={0.8}
              className="about-banner"
            >
              <figure>
                <Image
                  src="/assets/images/about-banner.webp"
                  width={470}
                  height={538}
                  alt="Dentist explaining treatment plan"
                  className="w-100"
                />
              </figure>
            </MotionReveal>

            <div className="about-content">
              <MotionReveal animation="fade-up" delay={0.1}>
                <p className="section-subtitle">
                  Why patients choose {clinicConfig.name}
                </p>
                <h2 className="h2 section-title">
                  Compassion meets clinical excellence
                </h2>
              </MotionReveal>
              <MotionReveal animation="fade-up" delay={0.2}>
                <p className="section-text section-text-1">
                  We start every appointment with a conversation so we can
                  listen to your goals, calm worries, and design a personalized
                  roadmap. Comfortable suites, sedation options, and Netflix
                  keep anxiety away.
                </p>
              </MotionReveal>
              <MotionReveal animation="fade-up" delay={0.3}>
                <p className="section-text">
                  With digital scanners, same-day restorations, and flexible
                  membership plans, we make dentistry convenient and
                  predictable. It’s why 9 in 10 new visitors are referrals from
                  delighted patients.
                </p>
              </MotionReveal>
              <MotionReveal animation="fade-up" delay={0.4}>
                <Link href="#doctor" className="btn">
                  Meet the team
                </Link>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="section doctor" id="doctor" aria-label="doctor">
          <div className="container">
            <MotionReveal animation="fade-up" delay={0.1}>
              <p className="section-subtitle text-center">Our Specialists</p>
              <h2 className="h2 section-title text-center">
                Dentists dedicated to lifelong smiles
              </h2>
            </MotionReveal>
            <ul className="has-scrollbar" style={{ justifyContent: 'center' }}>
              {doctors.map((doctor, index) => (
                <MotionReveal
                  animation="fade-up"
                  delay={0.2 + index * 0.1}
                  key={doctor.id}
                >
                  <li
                    className="scrollbar-item"
                    style={{ minWidth: 'auto', flex: '0 1 380px' }}
                  >
                    <article
                      className="doctor-card"
                      style={{ maxWidth: '380px', margin: '0 auto' }}
                    >
                      <div
                        className="card-banner img-holder"
                        style={
                          {
                            '--width': '350',
                            '--height': '350',
                          } as CSSProperties
                        }
                      >
                        <Image
                          src={doctor.image}
                          width={350}
                          height={350}
                          alt={doctor.name}
                          className="img-cover"
                        />
                      </div>
                      <h3 className="h3">
                        <Link href={doctor.profileHref} className="card-title">
                          {doctor.name}
                        </Link>
                      </h3>
                      <p className="card-subtitle">{doctor.role}</p>
                      <ul className="card-social-list">
                        {doctor.socials.map(social => (
                          <li key={social.network}>
                            <a
                              href={social.href}
                              className="card-social-link"
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${doctor.name} on ${social.network}`}
                            >
                              {socialIconMap[social.network]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                </MotionReveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section cta" aria-label="cta">
          <div className="container">
            <MotionReveal
              animation="fade-up"
              delay={0.2}
              className="cta-banner"
            >
              <figure>
                <Image
                  src="/assets/images/cta-banner.webp"
                  width={1056}
                  height={1076}
                  alt="Dentist high-fiving a patient"
                  className="w-100"
                  style={{ objectFit: 'cover' }}
                />
              </figure>
            </MotionReveal>

            <div className="cta-content">
              <MotionReveal animation="fade-up" delay={0.1}>
                <p className="section-subtitle">Book your visit</p>
                <h2 className="h2 section-title">
                  We’re welcoming new patients with complimentary smile consults
                </h2>
                <WhatsAppButton variant="primary">
                  Book appointment
                </WhatsAppButton>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section
          className="section location"
          id="location"
          aria-label="location"
        >
          <div className="container">
            <div className="location-content">
              <p className="section-subtitle">Find Us</p>
              <h2 className="h2 section-title">Visit Our Clinic</h2>
              <p className="section-text">
                We are conveniently located in Andheri West, Mumbai. Pay us a
                visit for a premium and comfortable dental consultation.
              </p>
              <ul className="contact-list">
                <li>
                  <div className="icon">
                    <IoLocationOutline aria-hidden="true" />
                  </div>
                  <address
                    className="address-inline"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {clinicConfig.contact.address_full}
                  </address>
                </li>
                <li>
                  <div className="icon">
                    <IoCallOutline aria-hidden="true" />
                  </div>
                  <a
                    href={`tel:${clinicConfig.contact.phone_primary}`}
                    className="contact-link"
                  >
                    {clinicConfig.contact.phone_primary}
                  </a>
                </li>
                <li>
                  <div className="icon">
                    <IoMailOutline aria-hidden="true" />
                  </div>
                  <a
                    href={`mailto:${clinicConfig.contact.email}`}
                    className="contact-link"
                  >
                    {clinicConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="location-map">
              <iframe
                title="Smile Dental Clinic Location Map"
                src={clinicConfig.contact.google_maps_embed}
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </article>

      {selectedService && (
        <TreatmentModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
          detail={treatmentDetails[selectedService.id]}
        />
      )}
    </main>
  );
}
