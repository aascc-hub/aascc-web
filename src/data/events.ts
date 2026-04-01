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
}

export const allEvents: EventType[] = [
  {
    id: 1,
    title: '1st Prize – Finance Event at Canvas 2025',
    date: '2024-10-20',
    day: '29',
    month: 'Nov',
    time: '10:00 AM - 1:00 PM',
    venue: 'Kozhikode, Kerala',
    category: 'Seminar',
    heroImage: '/images/winner2.png',
    attendees: '4',
    status: 'past',
    description: 'delivered an outstanding performance at Canvas 2025, the National-Level Management Fest hosted by Farook College, Kozhikode, Kerala.',

  },
  {
    id: 2,
    title: 'FUZIONA',
    date: '2026-12-25',
    day: '25',
    month: 'Dec',
    time: '9:00 AM - 1:00 PM',
    venue: 'College Auditorium',
    category: 'workshop',
    heroImage: '/images/FUZIONA.jpg',
    attendees: '500+ participants',
    status: 'upcoming'
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
    description: `The Uttara Kannada District Football Association successfully hosted a three-day Referee Examination in Bhatkal from March 27th to 29th, 2026. The event was conducted under the supervision of the Karnataka State Football Association and its Referee Committee.
                  The sessions were led by Mr. Sandeep Nanda from Kolkata, a national-level referee under the All India Football Federation. Over the course of three days, participants underwent both practical and theoretical training, concluding with a fitness test and a theory examination on the final day.
                  A total of 28 aspirants participated in the program, representing various regions including Gulbarga, Bidar, Karwar, Shirur, and Byndoor. Notably, 19 of the participants were students from Anjuman College. The event was organized in association with Anjuman Arts, Science and Commerce College, with continuous support from Anjuman Hami-e-Muslimeen.
                  This initiative provides a valuable opportunity for aspiring officials; those who successfully clear the examination have strong prospects of securing immediate officiating opportunities. The results are expected to be announced within one month.`,
  },
  {

    id: 3,
    title: 'Green Campus Campaign',
    date: '2019-11-05',
    day: '05',
    month: 'Nov',
    time: '9:00 AM - 11:00 PM',
    venue: 'College Campus',
    category: 'Workshop',
    heroImage: '/images/green event.jpg',
    attendees: '90 participants',
    status: 'past',
    description: 'The Tech Workshop on Cloud Computing was a comprehensive hands-on training session designed to equip students with practical skills in cloud technologies.\n\nParticipants learned about major cloud platforms including AWS, Azure, and Google Cloud. The workshop covered essential topics such as cloud architecture, deployment strategies, security best practices, and cost optimization.\n\nStudents worked on real-world projects, deploying applications to the cloud and managing cloud resources. Industry experts shared insights about current trends and career opportunities in cloud computing. The interactive format allowed students to ask questions and receive personalized guidance from experienced professionals.'
  },
  // {
  //   id: 3,
  //   title: 'Green Campus Campaign',
  //   date: '2019-11-05',
  //   day: '05',
  //   month: 'Nov',
  //   time: '9:00 AM - 11:00 PM',
  //   venue: 'College Campus',
  //   category: 'Workshop',
  //   heroImage: '/images/green event.jpg',
  //   attendees: '90 participants',
  //   status: 'past',
  //   description: 'The Tech Workshop on Cloud Computing was a comprehensive hands-on training session designed to equip students with practical skills in cloud technologies.\n\nParticipants learned about major cloud platforms including AWS, Azure, and Google Cloud. The workshop covered essential topics such as cloud architecture, deployment strategies, security best practices, and cost optimization.\n\nStudents worked on real-world projects, deploying applications to the cloud and managing cloud resources. Industry experts shared insights about current trends and career opportunities in cloud computing. The interactive format allowed students to ask questions and receive personalized guidance from experienced professionals.'
  // },
  // {
  //   id: 3,
  //   title: 'Green Campus Campaign',
  //   date: '2019-11-05',
  //   day: '05',
  //   month: 'Nov',
  //   time: '9:00 AM - 11:00 PM',
  //   venue: 'College Campus',
  //   category: 'Workshop',
  //   heroImage: '/images/green event.jpg',
  //   attendees: '90 participants',
  //   status: 'past',
  //   description: 'The Tech Workshop on Cloud Computing was a comprehensive hands-on training session designed to equip students with practical skills in cloud technologies.\n\nParticipants learned about major cloud platforms including AWS, Azure, and Google Cloud. The workshop covered essential topics such as cloud architecture, deployment strategies, security best practices, and cost optimization.\n\nStudents worked on real-world projects, deploying applications to the cloud and managing cloud resources. Industry experts shared insights about current trends and career opportunities in cloud computing. The interactive format allowed students to ask questions and receive personalized guidance from experienced professionals.'
  // },
  {
    id: 4,
    title: 'Alumni Meet 2024',
    date: '2024-11-15',
    day: '15',
    month: 'Nov',
    time: '6:00 PM - 9:00 PM',
    venue: 'Convention Hall',
    category: 'Meetup',
    heroImage: '/images/weight-lifting.jpeg',
    attendees: '300+ alumni returning',
    status: 'past',
    description: 'The Alumni Meet 2024 was a grand reunion that brought together graduates from various batches to reconnect and celebrate their alma mater.\n\nThe event featured inspiring speeches from successful alumni who shared their career journeys and achievements. Current students had the opportunity to network with professionals from diverse fields and gain valuable insights about career opportunities.\n\nThe meet included interactive sessions, cultural performances, and a memorable dinner. Alumni shared their experiences and contributions to society, inspiring the current generation. The event strengthened the bond between alumni and the institution, creating a strong support network for future generations.'
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
    description: 'celebrating the achievements of our graduating students. The event featured a formal ceremony where students received their diplomas, along with inspiring speeches from faculty members and guest speakers. The atmosphere was filled with joy and pride as students and their families came together to commemorate this significant milestone in their academic journey.'
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
    description: 'The Personality and Skills Development Workshop was conducted by AIMCA, Bhatkal on October 8, 2025. The event aimed to enhance students\' personal and professional skills through interactive sessions and expert guidance.\n\nThe workshop covered topics such as public speaking, leadership, time management, and effective communication. Students were encouraged to participate actively in group activities and discussions. The event was organized by the Student Activities Committee in collaboration with the Academic Affairs Department.\n\nKey speakers included experienced professionals who shared their insights on developing personal skills and building confidence. The workshop concluded with a certificate distribution ceremony for all participants.'
  },
  {
    id: 7,
    title: 'Independence Day Celebration',
    date: '2025-07-15',
    day: '15',
    month: 'Aug',
    time: '08:00 AM - 10:00 AM',
    venue: 'College Campus',
    category: 'Annual Event',
    heroImage: '/images/Independance Day.jpg',
    attendees: '200+ participants',
    status: 'past',
    description: 'The Independence Day Celebration was a vibrant event held on July 15, 2025, to commemorate the spirit of freedom and patriotism. The celebration featured a flag hoisting ceremony, followed by cultural performances that showcased the rich heritage of our nation.\n\nStudents participated in various activities such as patriotic songs, dances, and skits that highlighted the importance of independence. The event also included a speech by the principal, emphasizing the significance of unity and progress. The celebration fostered a sense of pride and camaraderie among students and staff alike.'
  },
  {
    id: 8,
    title: 'Karnataka Rajyotsava Celebration',
    date: '2023-04-15',
    day: '15',
    month: 'Apr',
    time: '09:30 AM - 11:00 AM',
    venue: 'College Campus',
    category: 'Annual Event',
    heroImage: '/images/karnataka rajyot.webp',
    attendees: '200+ participants',
    status: 'past',
    description: 'The Karnataka Rajyotsava Celebration was a vibrant event held on April 15, 2023, to commemorate the formation of Karnataka state. The celebration featured a flag hoisting ceremony, followed by cultural performances that showcased the rich heritage and traditions of our state.\n\nStudents participated in various activities such as patriotic songs, dances, and skits that highlighted the importance of statehood and unity. The event also included a speech by the principal, emphasizing the significance of preserving our cultural identity. The celebration fostered a sense of pride and camaraderie among students and staff alike.'
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
    description: 'The Road Safety Awareness Campaign was a vital initiative held on June 12, 2024, to educate students about road safety practices and responsible behavior on the roads.\n\nThe event included interactive sessions, poster presentations, and a quiz competition to engage students in learning about road safety. The campaign emphasized the importance of following traffic rules and promoting safe driving habits among students. The event was organized by the Student Activities Committee in collaboration with the Academic Affairs Department.'
  }
];
