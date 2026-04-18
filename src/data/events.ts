export interface EventType {
  id: number;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  venue: string;
  category: string;
  heroImage: string;
  galleryImages?: string[];
  attendees: string;
  status: 'past' | 'upcoming';
  description?: string;
  expectations?: string[];
}

export const allEvents: EventType[] = [
  {
    id: 1,
    title: 'FUZIONA',
    date: '2026-12-25',
    day: '25',
    month: 'Dec',
    time: '9:00 AM - 1:00 PM',
    venue: 'College Auditorium',
    category: 'workshop',
    heroImage: '/images/FUZIONA.jpg',
    attendees: '500+ participants',
    status: 'upcoming',
    description: 'Fuziona is the premier inter-collegiate cultural and academic fest organized by Anjuman Arts, Science, Commerce College and PG Centre, Bhatkal. It serves as a dynamic platform for students to showcase their talents across 13+ diverse competitions, ranging from literary debates to cultural performances.'
  },
  {
    id: 2,
    title: 'Free Mega Health Camp and Cancer Awareness Programme',
    expectations: [
    'Specialist Consultations',
    'Cancer Awareness Session',
    'Free Health Screening',
    'Expert Medical Advice'
  ],
    date: '2026-4-19',
    day: '19',
    month: 'Apr',
    time: '10:00 AM - 1:00 PM',
    venue: 'College Campus', // Fixed "Collage" typo
    category: 'Awareness Program',
    heroImage: '/images/mega health camp.jpg',
    attendees: '1000+',
    status: 'upcoming',
    description: 'Anjuman Arts, Science and Commerce College, Bhatkal, is gearing up to host a Free Mega Health Camp and Cancer Awareness Program on 19th April 2026 at the Anjuman Degree College campus. The event is being organised in collaboration with Father Muller Medical College and Hospital, Mangalore. The camp will offer free specialist consultations across a wide range of medical departments, including General Medicine, Dermatology, General Surgery, ENT, Paediatrics, Ophthalmology, Obstetrics and Gynaecology, Orthopaedics, Speech and Hearing, and Surgical Oncology.',
  },
  {
    id: 3,
    title: 'UKDFA Referee Examination',
    date: '2026-3-27',
    day: '27',
    month: 'Mar',
    time: '9:00 AM - 1:00 PM',
    venue: 'College Campus',
    category: 'Examination',
    heroImage: '/images/UKDFA.jpg',
    attendees: '28 participants',
    status: 'past',
    description: 'The Uttara Kannada District Football Association successfully hosted a three-day Referee Examination in Bhatkal from March 27th to 29th, 2026. The event was conducted under the supervision of the Karnataka State Football Association and its Referee Committee. A total of 28 aspirants participated in the program, representing various regions.',
  },
  {
    id: 4,
    title: '1st Prize – Finance Event at Canvas 2025',
    date: '2024-11-29',
    day: '29',
    month: 'Nov',
    time: '10:00 AM - 1:00 PM',
    venue: 'Kozhikode, Kerala',
    category: 'Seminar',
    heroImage: '/images/winner2.png',
    attendees: '4',
    status: 'past',
    description: 'Our students delivered an outstanding performance at Canvas 2025, the National-Level Management Fest hosted by Farook College, Kozhikode, Kerala, securing the 1st Prize in the Finance event.',
  },
  {
    id: 5,
    title: 'Graduation Day',
    date: '2024-08-26',
    day: '26',
    month: 'Aug',
    time: '10:00 AM - 5:00 PM',
    venue: 'College Campus',
    category: 'Annual Event',
    heroImage: '/images/Graduation Day.jpg',
    attendees: '500+ attendees',
    status: 'past',
    description: 'Celebrating the achievements of our graduating students. The event featured a formal ceremony where students received their diplomas, along with inspiring speeches from faculty members and guest speakers.'
  },
  {
    id: 6,
    title: 'Personality And Skills Development Workshop',
    date: '2025-10-08',
    day: '08',
    month: 'Oct',
    time: '10:00 AM - 2:00 PM',
    venue: 'College Campus',
    category: 'Workshop',
    heroImage: '/images/workshop.jpg',
    attendees: '200+ participants',
    status: 'past',
    description: 'The Personality and Skills Development Workshop was conducted by AIMCA, Bhatkal on October 8, 2025. The event aimed to enhance students\' personal and professional skills through interactive sessions.'
  },
  {
    id: 7,
    title: 'Independence Day Celebration',
    date: '2025-08-15',
    day: '15',
    month: 'Aug',
    time: '08:00 AM - 10:00 AM',
    venue: 'College Campus',
    category: 'Annual Event',
    heroImage: '/images/Independance Day.jpg',
    attendees: '200+ participants',
    status: 'past',
    description: 'The Independence Day Celebration was a vibrant event held to commemorate the spirit of freedom and patriotism, featuring a flag hoisting ceremony and cultural performances.'
  },
  {
    id: 8,
    title: 'Karnataka Rajyotsava Celebration',
    date: '2023-11-01',
    day: '01',
    month: 'Nov',
    time: '09:30 AM - 11:00 AM',
    venue: 'College Campus',
    category: 'Annual Event',
    heroImage: '/images/karnataka rajyot.webp',
    attendees: '200+ participants',
    status: 'past',
    description: 'The Karnataka Rajyotsava Celebration was a vibrant event held to commemorate the formation of Karnataka state, showcasing the rich heritage and traditions of our state.'
  },
  {
    id: 9,
    title: 'Road Safety Awareness Campaign',
    date: '2024-06-12',
    day: '12',
    month: 'Jun',
    time: '09:30 AM - 11:00 AM',
    venue: 'College Campus',
    category: 'Awareness Campaign',
    heroImage: '/images/road safety.jpg',
    attendees: '200+ participants',
    status: 'past',
    description: 'The Road Safety Awareness Campaign was a vital initiative held to educate students about road safety practices and responsible behavior on the roads.'
  }
];