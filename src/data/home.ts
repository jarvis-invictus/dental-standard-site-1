import { clinicConfig } from '@/lib/clinic-config';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
};

export type DoctorSocialNetwork = 'facebook' | 'instagram' | 'twitter';

export type Doctor = {
  id: string;
  name: string;
  role: string;
  image: string;
  profileHref: string;
  socials: {
    network: DoctorSocialNetwork;
    href: string;
  }[];
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  displayDate: string;
  href: string;
};

export const services: Service[] = clinicConfig.services || [];

export const doctors: Doctor[] = clinicConfig.doctors.map((doc, idx) => ({
  id: `doctor-${idx}`,
  name: doc.name,
  role: doc.specializations
    ? doc.specializations.join(', ')
    : doc.qualifications || 'Dentist',
  image: doc.photo || '/assets/images/doctor-1.webp',
  profileHref: '#doctor',
  socials: Object.entries(clinicConfig.social || {})
    .map(([network, href]) => ({
      network: network as DoctorSocialNetwork,
      href: href as string,
    }))
    .filter(social =>
      ['facebook', 'instagram', 'twitter'].includes(social.network)
    ),
}));

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: '5 early signs your smile needs a checkup',
    excerpt:
      'Watch for subtle changes in enamel, gum color, or tooth sensitivity to stay ahead of issues.',
    image: '/assets/images/blog-1.webp',
    date: '2024-09-12',
    displayDate: '12 Sep 2024',
    href: '/blog#post-1',
  },
  {
    id: 'post-2',
    title: 'How digital dentistry shortens treatment times',
    excerpt:
      'From 3D imaging to AI-driven aligners, technology keeps care precise and efficient.',
    image: '/assets/images/blog-2.webp',
    date: '2024-08-28',
    displayDate: '28 Aug 2024',
    href: '/blog#post-2',
  },
  {
    id: 'post-3',
    title: 'Secrets to helping kids enjoy the dentist',
    excerpt:
      'Transform visits with sensory-friendly suites, storytelling, and rewards that motivate.',
    image: '/assets/images/blog-3.webp',
    date: '2024-07-15',
    displayDate: '15 Jul 2024',
    href: '/blog#post-3',
  },
];

export type TreatmentDetail = {
  serviceId: string;
  detailedDescription: string;
  duration: string;
  benefits: string[];
  idealFor: string;
};

export const treatmentDetails: Record<string, TreatmentDetail> = {
  'root-canal': {
    serviceId: 'root-canal',
    detailedDescription:
      'Root Canal Therapy is a highly effective treatment designed to repair and save a tooth that is badly decayed or becomes infected. Our modern techniques ensure a completely painless procedure, helping you save your natural teeth.',
    duration: '1 - 2 Visits (approx. 45 mins each)',
    benefits: [
      'Relieves severe tooth pain and sensitivity',
      'Prevents the spread of infection to other teeth',
      'Restores natural chewing and biting efficiency',
      'Maintains the alignment of your jawline',
    ],
    idealFor:
      'Patients experiencing sharp tooth pain, sensitivity to hot and cold, swelling around the gums, or deep tooth decay.',
  },
  alignment: {
    serviceId: 'alignment',
    detailedDescription:
      'Achieve your dream smile with our state-of-the-art Teeth Alignment options. We offer both traditional orthodontics and premium Clear Aligners (invisible braces) that are custom-molded to guide your teeth into place comfortably and discreetly.',
    duration: '6 - 18 Months (based on complexity)',
    benefits: [
      'Discreet treatment with near-invisible clear aligners',
      'Easier oral hygiene compared to metal braces',
      'Corrects overbites, underbites, crowding, and gaps',
      'Boosts self-confidence and improves speech',
    ],
    idealFor:
      'Adults and teenagers looking to align their teeth comfortably without the aesthetic and lifestyle restrictions of metal braces.',
  },
  cosmetic: {
    serviceId: 'cosmetic',
    detailedDescription:
      'Transform the appearance of your teeth with our customized Cosmetic Dentistry services. From instant professional teeth whitening to custom porcelain veneers and contouring, we design custom smile makeovers to bring out your best features.',
    duration: '1 Visit (Whitening) / 2-3 Visits (Veneers)',
    benefits: [
      'Instantly brightens discolored or stained teeth',
      'Hides chips, cracks, or gaps with porcelain veneers',
      'Custom shades that perfectly match your facial aesthetics',
      'Long-lasting, stain-resistant, and natural-looking results',
    ],
    idealFor:
      'Anyone looking to repair dental imperfections, brighten their smile, or redesign the shape and color of their teeth.',
  },
  'oral-hygiene': {
    serviceId: 'oral-hygiene',
    detailedDescription:
      'Preventive dental care is the foundation of long-term oral health. Our premium care packages include deep cleaning (scaling and polishing), advanced cavity mapping, enamel-strengthening fluoride treatments, and dental sealants to protect your family’s teeth.',
    duration: '1 Visit (approx. 30 - 45 mins)',
    benefits: [
      'Removes plaque, tartar, and surface stains',
      'Prevents gum disease, bad breath, and future tooth decay',
      'Enamel strengthening to protect against sensitivity',
      'Early detection of potential dental issues',
    ],
    idealFor:
      'Individuals and families looking to maintain optimal oral health. Highly recommended twice a year.',
  },
  advisory: {
    serviceId: 'advisory',
    detailedDescription:
      'A thorough dental examination is the starting point for any treatment plan. Get detailed diagnostic reports, personalized care strategies, dental mapping, transparent budget estimates, and emergency dental triage with our experts.',
    duration: '1 Visit (approx. 20 - 30 mins)',
    benefits: [
      'Comprehensive diagnosis with state-of-the-art scanners',
      'Clear explanation of treatment options and budgets',
      'Early screening for oral health conditions',
      'Emergency consultation & immediate pain management plans',
    ],
    idealFor:
      'New patients looking for general checks, second opinions, or custom long-term dental health advice.',
  },
  cavity: {
    serviceId: 'cavity',
    detailedDescription:
      'Our advanced Cavity Detection systems use laser diagnostics and digital imagery to identify hidden decay between teeth and under existing fillings long before they are visible on X-rays, ensuring minimally invasive treatments.',
    duration: '1 Visit (approx. 15 mins)',
    benefits: [
      'Pinpoints decay in its absolute earliest stages',
      'Allows for micro-fillings, preserving more natural tooth structure',
      'Painless, radiation-free diagnostic technology',
      'Helps avoid root canals by treating cavities early',
    ],
    idealFor:
      'Patients of all ages who want to proactively map their tooth health and treat cavities early and painlessly.',
  },
};
