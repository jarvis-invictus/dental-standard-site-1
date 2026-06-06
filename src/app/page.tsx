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
import type { DoctorSocialNetwork, Service } from '@/data/home';
import { doctors, services, treatmentDetails } from '@/data/home';

const heroBackground: CSSProperties = {
  backgroundImage: "url('/assets/images/hero-bg.png')",
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
              <h1 className="h1 hero-title">
                Premium Dental Care for Your Family&apos;s Smile
              </h1>
              <p className="hero-text">
                Experience advanced, painless dental treatments with Pune&apos;s
                leading implantologist and cosmetic dentist. We blend modern
                clinical technology with warm, personalized hospitality.
              </p>
              <TrustBanner />
              <div style={{ marginBlockStart: '10px' }}>
                <WhatsAppButton variant="primary">
                  Book Appointment
                </WhatsAppButton>
              </div>
            </div>

            <figure className="hero-banner">
              <Image
                src="/assets/images/hero-banner.png"
                width={587}
                height={839}
                alt="Dentist smiling with patient"
                className="w-100"
                style={{ objectFit: 'cover' }}
                priority
              />
            </figure>
          </div>
        </section>

        <section className="section service" id="service" aria-label="service">
          <div className="container">
            <p className="section-subtitle text-center">Our Services</p>
            <h2 className="h2 section-title text-center">
              Care that keeps your smile thriving
            </h2>
            <ul className="service-list">
              {services.slice(0, 3).map(service => (
                <li key={service.id}>
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
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <h3 className="h3 card-title">{service.title}</h3>
                      <p className="card-text" style={{ flexGrow: 1 }}>{service.description}</p>
                      <button style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--blue-crayola)', background: 'none', border: 'none', fontSize: '1.4rem', fontWeight: 600, cursor: 'pointer' }}>
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}

              <li className="service-banner" aria-hidden>
                <Image
                  src="/assets/images/service-banner.png"
                  width={409}
                  height={467}
                  alt="Dental team collaborating"
                  className="w-100"
                />
              </li>

              {services.slice(3).map(service => (
                <li key={service.id}>
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
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <h3 className="h3 card-title">{service.title}</h3>
                      <p className="card-text" style={{ flexGrow: 1 }}>{service.description}</p>
                      <button style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--blue-crayola)', background: 'none', border: 'none', fontSize: '1.4rem', fontWeight: 600, cursor: 'pointer' }}>
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section about" id="about" aria-label="about">
          <div className="container">
            <figure className="about-banner">
              <Image
                src="/assets/images/about-banner.png"
                width={470}
                height={538}
                alt="Dentist explaining treatment plan"
                className="w-100"
              />
            </figure>

            <div className="about-content">
              <p className="section-subtitle">
                Why patients choose Smile Dental Clinic
              </p>
              <h2 className="h2 section-title">
                Compassion meets clinical excellence
              </h2>
              <p className="section-text section-text-1">
                We start every appointment with a conversation so we can listen
                to your goals, calm worries, and design a personalized roadmap.
                Comfortable suites, sedation options, and Netflix keep anxiety
                away.
              </p>
              <p className="section-text">
                With digital scanners, same-day restorations, and flexible
                membership plans, we make dentistry convenient and predictable.
                It’s why 9 in 10 new visitors are referrals from delighted
                patients.
              </p>
              <Link href="#doctor" className="btn">
                Meet the team
              </Link>
            </div>
          </div>
        </section>

        <section className="section doctor" id="doctor" aria-label="doctor">
          <div className="container">
            <p className="section-subtitle text-center">Our Specialists</p>
            <h2 className="h2 section-title text-center">
              Dentists dedicated to lifelong smiles
            </h2>
            <ul className="has-scrollbar" style={{ justifyContent: 'center' }}>
              {doctors.map(doctor => (
                <li
                  className="scrollbar-item"
                  key={doctor.id}
                  style={{ minWidth: 'auto', flex: '0 1 380px' }}
                >
                  <article
                    className="doctor-card"
                    style={{ maxWidth: '380px', margin: '0 auto' }}
                  >
                    <div
                      className="card-banner img-holder"
                      style={
                        { '--width': '350', '--height': '350' } as CSSProperties
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
              ))}
            </ul>
          </div>
        </section>

        <section className="section cta" aria-label="cta">
          <div className="container">
            <figure className="cta-banner">
              <Image
                src="/assets/images/cta-banner.png"
                width={1056}
                height={1076}
                alt="Dentist high-fiving a patient"
                className="w-100"
                style={{ objectFit: 'cover' }}
              />
            </figure>

            <div className="cta-content">
              <p className="section-subtitle">Book your visit</p>
              <h2 className="h2 section-title">
                We’re welcoming new patients with complimentary smile consults
              </h2>
              <WhatsAppButton variant="primary">
                Book appointment
              </WhatsAppButton>
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
                  <address className="address-inline">
                    123, Premium Heights, Link Road, Andheri West, Mumbai,
                    Maharashtra 400053
                  </address>
                </li>
                <li>
                  <div className="icon">
                    <IoCallOutline aria-hidden="true" />
                  </div>
                  <a href="tel:+919876543210" className="contact-link">
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <div className="icon">
                    <IoMailOutline aria-hidden="true" />
                  </div>
                  <a
                    href="mailto:contact@smiledentalclinic.in"
                    className="contact-link"
                  >
                    contact@smiledentalclinic.in
                  </a>
                </li>
              </ul>
            </div>

            <div className="location-map">
              <iframe
                title="Smile Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8037135898317!2d72.833633!3d19.116262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f69b555555%3A0x1d471b0586e92f25!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717596000000!5m2!1sen!2sin"
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
