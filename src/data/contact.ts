import type { Doctor } from '@/data/home';

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

export const clinicAddress =
  '123, ITI Road, Near Bata Showroom\nAundh, Pune - 411007, Maharashtra';

export const clinicSchedule =
  'Mon - Sun: 10:00 AM - 8:00 PM\n(Open all days including Sunday)';

export const contactChannels: ContactChannel[] = [
  {
    id: 'phone',
    icon: 'call-outline',
    label: 'Phone',
    href: 'tel:+919699577641',
    text: '+91 96995 77641',
  },
  {
    id: 'whatsapp',
    icon: 'logo-whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/919699577641',
    text: '+91 96995 77641',
  },
  {
    id: 'email',
    icon: 'mail-outline',
    label: 'Email',
    href: 'mailto:contact@smiledentalclinic.in',
    text: 'contact@smiledentalclinic.in',
  },
  {
    id: 'hours',
    icon: 'time-outline',
    label: 'Hours',
    text: clinicSchedule,
  },
];

export const appointmentServices = [
  'Root Canal Therapy',
  'Alignment Teeth',
  'Cosmetic Dentistry',
  'Oral Hygiene',
  'Live Advisory',
  'Cavity Inspection',
] as const;

export const appointmentDoctors: Doctor['id'][] = [
  'dr-priya-sharma',
  'dr-rajesh-patel',
  'dr-anita-desai',
  'dr-vikram-mehra',
];

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
