export interface ProfileData {
  name: string;
  brand: string;
  tagline: string;
  age: number;
  education: {
    degree: string;
    specialization: string;
    status: string;
  };
  currentLearning: string;
  interests: string[];
  personalityTraits: string[];
  quote: string;
  subQuote: string;
  achievements: {
    title: string;
    value: string;
    description: string;
    badge: string;
  }[];
  socials: {
    name: string;
    label: string;
    url: string;
    type: 'github' | 'linkedin' | 'instagram' | 'email';
    handle: string;
  }[];
  travelWishlist: {
    country: string;
    city: string;
    reason: string;
    status: string;
  }[];
}

export const PROFILE_DATA: ProfileData = {
  name: 'Ravi Solanki',
  brand: 'BLUE 3D',
  tagline: 'building things while figuring things out',
  age: 19,
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    status: '2nd Year Undergraduate',
  },
  currentLearning: 'Data Structures & Algorithms (C++) and foundational computer science',
  interests: [
    '3D Art & Modeling',
    'Blender',
    'Environment Art',
    'Product Visualization',
    'Game Development',
    'Animation & VFX',
    'Filmmaking & Color Grading',
    'Photography',
    'Web Development',
    'AI / ML Foundations',
    'New Technology & Experimentation',
    'Travelling',
  ],
  personalityTraits: [
    'Deeply curious',
    'Quiet & introspective',
    'Enjoys finishing what he starts',
    'Hands-on experimental builder',
    'Comfortable in the messy learning phase',
  ],
  quote: "I don't know exactly where I'm going yet. So I keep building until I find it.",
  subQuote:
    "I'm a 19-year-old computer science student exploring an unreasonable number of things. I like learning by building things, breaking them, experimenting, and starting again.",
  achievements: [
    {
      title: 'Digital Audience Community',
      value: '40K+',
      description: 'Built and organically grew a dedicated Facebook page community to over 40,000 active followers.',
      badge: 'COMMUNITY MILESTONE',
    },
    {
      title: 'Commercial Client Deployment',
      value: 'Live',
      description: 'Engineered and launched the digital commercial storefront for ShreePlys architectural interiors.',
      badge: 'CLIENT SUCCESS',
    },
    {
      title: 'Web Arcade Deployments',
      value: '5 Games',
      description: 'Designed and deployed browser games including 3D WebGL procedural runners and cognitive arcades.',
      badge: 'GAME DEV',
    },
  ],
  socials: [
    {
      name: 'GitHub',
      label: 'github.com/WebDevRavi',
      url: 'https://github.com/WebDevRavi',
      type: 'github',
      handle: '@WebDevRavi',
    },
    {
      name: 'Blue 3D Instagram',
      label: 'instagram.com/blue3d_',
      url: 'https://www.instagram.com/blue3d_/',
      type: 'instagram',
      handle: '@blue3d_',
    },
    {
      name: 'Personal Instagram',
      label: 'instagram.com/ravi_solanki_1567',
      url: 'https://www.instagram.com/ravi_solanki_1567/',
      type: 'instagram',
      handle: '@ravi_solanki_1567',
    },
    {
      name: 'LinkedIn',
      label: 'linkedin.com/in/ravi-solanki-bb2420375',
      url: 'https://www.linkedin.com/in/ravi-solanki-bb2420375/',
      type: 'linkedin',
      handle: 'Ravi Solanki',
    },
    {
      name: 'Email Transmission',
      label: 'ravisolanki969197@gmail.com',
      url: 'mailto:ravisolanki969197@gmail.com',
      type: 'email',
      handle: 'ravisolanki969197@gmail.com',
    },
  ],
  travelWishlist: [
    {
      country: 'Japan',
      city: 'Kyoto & Akihabara',
      reason: 'Architecture, tranquil mountain shrines, and pixel-art arcade culture.',
      status: 'Planned Destination',
    },
    {
      country: 'Norway',
      city: 'Tromsø & Fjords',
      reason: 'Nocturnal northern lights, dramatic coastal topography, and silence.',
      status: 'Planned Destination',
    },
    {
      country: 'Switzerland',
      city: 'Lauterbrunnen Valley',
      reason: 'Towering alpine cliff faces, glacial water, and high-altitude perspective.',
      status: 'Planned Destination',
    },
    {
      country: 'Iceland',
      city: 'Black Sand Beaches',
      reason: 'Otherworldly basalt formations and volcanic lighting.',
      status: 'Planned Destination',
    },
  ],
};
