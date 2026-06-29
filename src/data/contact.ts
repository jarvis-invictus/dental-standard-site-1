import { clinicConfig } from '@/lib/clinic-config';

export type ContactChannel = {
  id: string;
  icon: string;
  label: string;
  href?: string;
  text: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const clinicAddress = clinicConfig.contact.address_full;

export const clinicSchedule = clinicConfig.hours
  .map(h => `${h.day}: ${h.time}`)
  .join('\n');

export const contactChannels: ContactChannel[] = [
  {
    id: 'phone',
    icon: 'call-outline',
    label: 'Phone',
    href: `tel:${clinicConfig.contact.phone_primary.replace(/\s+/g, '')}`,
    text: clinicConfig.contact.phone_primary,
  },
  {
    id: 'whatsapp',
    icon: 'logo-whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/${clinicConfig.contact.phone_whatsapp.replace(/\D/g, '')}`,
    text: clinicConfig.contact.phone_whatsapp,
  },
  {
    id: 'email',
    icon: 'mail-outline',
    label: 'Email',
    href: `mailto:${clinicConfig.contact.email}`,
    text: clinicConfig.contact.email,
  },
  {
    id: 'hours',
    icon: 'time-outline',
    label: 'Hours',
    text: clinicSchedule,
  },
];

export const appointmentServices = clinicConfig.services.map(s => s.title);

export const appointmentDoctors = clinicConfig.doctors.map(
  (_, idx) => `doctor-${idx}`
);

export const contactFaqs: Faq[] = [
  {
    question: 'Do you accept walk-in patients?',
    answer:
      'We prioritize scheduled visits but keep a few emergency slots daily. Call before coming in so we can prepare the right clinician.',
  },
  {
    question: 'Which insurance providers do you work with?',
    answer:
      'We partner with most major insurance providers. Share your policy while booking and we’ll confirm coverage before your visit.',
  },
  {
    question: 'How do I reschedule or cancel?',
    answer:
      'Use the confirmation link in your appointment email or call us directly at least 24 hours in advance to avoid cancellation fees.',
  },
];
