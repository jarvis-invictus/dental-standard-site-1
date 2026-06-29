export const clinicConfig = {
  name: 'Smile Dental Clinic',
  tagline: 'Your perfect smile starts here',
  established: 2018,

  seo: {
    meta_title: 'Smile Dental Clinic | Your perfect smile starts here',
    meta_description:
      'Welcome to Smile Dental Clinic. We combine advanced technology with compassionate care to give you the perfect smile in Pune.',
  },

  contact: {
    phone_primary: '+91 96995 77641',
    phone_whatsapp: '+91 96995 77641',
    email: 'contact@s1.invictus-ai.in',
    address_full: '123 ITI Road, Near Bata, Aundh, Pune 411007',
    google_maps_url: 'https://maps.google.com/...',
    google_maps_embed: 'https://www.google.com/maps/embed?pb=...',
  },

  social: {
    instagram: 'https://instagram.com/smiledental',
    facebook: 'https://facebook.com/smiledental',
    twitter: 'https://twitter.com/smiledental',
  },

  theme: {
    primary: '#0EA5E9',
    secondary: '#38BDF8',
  },

  hours: [
    { day: 'Monday - Saturday', time: '10:00 AM - 8:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],

  doctors: [
    {
      name: 'Dr. Rahul Sharma',
      qualifications: 'BDS, MDS (Orthodontics)',
      experience_years: 15,
      specializations: [
        'Invisible Braces',
        'Smile Designing',
        'Kids Dentistry',
      ],
      languages: ['English', 'Hindi', 'Marathi'],
      bio: 'Dr. Rahul Sharma is a highly skilled orthodontist dedicated to providing exceptional dental care. He specializes in advanced cosmetic dentistry and smile makeovers.',
      photo: '/assets/images/doctor-1.webp',
      ida_number: 'IDA-MH-34521',
    },
  ],

  services: [
    {
      id: 'root-canal',
      title: 'Root Canal Therapy',
      description:
        'Gentle, precision treatments that save natural teeth and stop chronic pain fast.',
      icon: '/assets/images/service-icon-1.webp',
      href: '/services#service-root-canal',
    },
    {
      id: 'alignment',
      title: 'Teeth Alignment',
      description:
        'Modern aligners and braces that straighten smiles with fewer visits and faster results.',
      icon: '/assets/images/service-icon-2.webp',
      href: '/services#service-alignment',
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description:
        'Whitening, veneers, and contouring designed to match your facial features and goals.',
      icon: '/assets/images/service-icon-3.webp',
      href: '/services#service-cosmetic',
    },
    {
      id: 'oral-hygiene',
      title: 'Preventive Care',
      description:
        'Comfort-first cleanings, fluoride, and sealants to keep your family smiling year-round.',
      icon: '/assets/images/service-icon-4.webp',
      href: '/services#service-hygiene',
    },
    {
      id: 'advisory',
      title: 'Dental Consultation',
      description:
        'Expert consultations for personalized care plans, insurance guidance, and emergency triage.',
      icon: '/assets/images/service-icon-5.webp',
      href: '/services#service-advisory',
    },
    {
      id: 'cavity',
      title: 'Cavity Detection',
      description:
        'Digital diagnostics that pinpoint concerns early so treatments stay minimally invasive.',
      icon: '/assets/images/service-icon-6.webp',
      href: '/services#service-cavity',
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Riya Verma',
      treatment: 'Smile Designing',
      rating: 5,
      text: "The clinic's atmosphere is incredibly calming. Dr. Sharma completely transformed my smile. The entire process was painless and the results are amazing!",
    },
    {
      id: 2,
      name: 'Amit Patel',
      treatment: 'Root Canal',
      rating: 5,
      text: 'I was terrified of getting a root canal, but the team here made it completely painless. Very professional and caring staff.',
    },
    {
      id: 3,
      name: 'Neha Joshi',
      treatment: 'Invisible Braces',
      rating: 5,
      text: 'Started my clear aligners journey here 6 months ago. The progress is exactly as they showed me in the 3D scan. Highly recommend!',
    },
  ],

  features: [
    'Painless Treatments',
    'Digital X-Rays',
    'Stringent Sterilization',
    'Transparent Pricing',
    'EMI Options Available',
  ],

  stats: {
    patients_treated: '5000+',
    google_rating: '4.9',
    years_experience: '15+',
  },

  domain: 'https://s1.invictus-ai.in',
  whatsapp_default_message: 'Hello! I would like to book a consultation.',
};
