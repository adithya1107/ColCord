import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

type Job = {
  id: string;
  title: string;
  openings: number;
  intro: string;
  responsibilities: string[];
  preferred: string[];
  tools: string[];
};

const JOBS: Job[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Developer Intern',
    openings: 3,
    intro:
      'We are looking for enthusiastic Full Stack Developer Interns to help us build a secure and scalable education platform. You will get hands-on experience with modern technologies and contribute to both frontend and backend development.',
    responsibilities: [
      'Assist in developing frontend (React.js) and backend (Node.js) features.',
      'Help build and test RESTful APIs.',
      'Work with databases and authentication systems using Supabase + PostgreSQL.',
      'Learn and apply secure coding practices.',
      'Collaborate with team members on projects.',
    ],
    preferred: [
      'Basic knowledge of React.js and Node.js.',
      'Familiarity with SQL (PostgreSQL).',
      'Understanding of APIs and authentication (JWT).',
      'Eagerness to learn cloud tools (Azure, Supabase).',
    ],
    tools: ['Git & GitHub', 'Postman / Insomnia', 'Supabase', 'VS Code'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Intern',
    openings: 2,
    intro:
      'We are looking for Cybersecurity Interns interested in learning how to secure web applications. You will work with our team to test and improve platform security.',
    responsibilities: [
      'Learn and assist with vulnerability testing.',
      'Work with authentication and access control systems (including Supabase Auth).',
      'Understand and apply basic encryption concepts.',
      'Explore Supabase Row Level Security (RLS) for secure data handling.',
      'Support developers in writing secure code.',
    ],
    preferred: [
      'Awareness of web security basics (e.g., OWASP Top 10).',
      'Interest in encryption (AES-256) and JWT authentication.',
      'Curiosity about access control libraries (CASL, Permit.io).',
      'Eagerness to learn about securing Supabase databases.',
    ],
    tools: ['Git & GitHub', 'Postman', 'Supabase', 'VS Code'],
  },
  {
    id: 'uiux',
    title: 'UI/UX Developer Intern',
    openings: 2,
    intro:
      'We are seeking creative students interested in UI/UX design and frontend development. You’ll help design and implement user-friendly experiences for our education platform.',
    responsibilities: [
      'Create and refine wireframes or simple mockups.',
      'Build responsive layouts with React.js.',
      'Assist in usability testing and design improvements.',
      'Work with developers to connect designs to APIs.',
    ],
    preferred: [
      'Basic React.js knowledge.',
      'Familiarity with design tools (Figma, Adobe XD, or similar).',
      'Interest in accessibility and good user experience.',
    ],
    tools: ['Git & GitHub', 'VS Code', 'Figma'],
  },
  {
    id: 'backend',
    title: 'Backend Developer Intern',
    openings: 1,
    intro:
      'We are looking for Backend Developer Interns who enjoy working with databases, APIs, and server-side logic. You’ll gain experience building the backbone of a modern web platform.',
    responsibilities: [
      'Help build backend services using Node.js + Express.',
      'Write simple API endpoints.',
      'Assist with database queries in PostgreSQL/Supabase.',
      'Learn about authentication and secure data handling.',
    ],
    preferred: [
      'Coursework or projects in Node.js or any backend language.',
      'Understanding of basic SQL.',
      'Familiarity with REST APIs.',
    ],
    tools: ['Git & GitHub', 'Postman / Insomnia', 'VS Code'],
  },
  {
    id: 'data',
    title: 'Data Specialist Intern',
    openings: 1,
    intro:
      'We are seeking Data Specialist Interns to help analyze and visualize data from our platform. You’ll learn how to manage and present insights that support decision-making.',
    responsibilities: [
      'Assist in writing SQL queries for reports.',
      'Collect and organize platform data.',
      'Help create dashboards or charts for insights.',
      'Work with the team to ensure secure data usage.',
    ],
    preferred: [
      'Basic knowledge of SQL (PostgreSQL preferred).',
      'Interest in data visualization (Excel, Google Data Studio, or BI tools).',
      'Curiosity about analytics and data-driven decisions.',
    ],
    tools: ['Git & GitHub', 'Supabase / PostgreSQL', 'Visualization tools (Google Sheets, BI tools)'],
  },
  {
    id: 'qa',
    title: 'QA / Testing Engineer Intern',
    openings: 1,
    intro:
      'We are looking for QA/Testing Interns to ensure our platform works smoothly and reliably. You will test features, find bugs, and learn about software quality assurance.',
    responsibilities: [
      'Test features developed by the team.',
      'Report bugs and suggest improvements.',
      'Help with API testing using Postman.',
      'Learn about writing basic automated tests.',
    ],
    preferred: [
      'Interest in software testing.',
      'Familiarity with React apps or Node.js projects.',
      'Awareness of testing tools (Jest, Cypress, or similar).',
    ],
    tools: ['Git & GitHub', 'Postman / Insomnia', 'VS Code'],
  },
];

// // Use backend proxy URL (set in client .env as VITE_API_URL) to avoid CORS.
// // Defaults to local proxy started at http://localhost:3001/apply
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/apply';

// const INDIAN_COLLEGES = [
//   // IITs (Indian Institutes of Technology)
//   'Indian Institute of Technology (IIT) Bombay',
//   'Indian Institute of Technology (IIT) Delhi',
//   'Indian Institute of Technology (IIT) Madras',
//   'Indian Institute of Technology (IIT) Kanpur',
//   'Indian Institute of Technology (IIT) Kharagpur',
//   'Indian Institute of Technology (IIT) Roorkee',
//   'Indian Institute of Technology (IIT) Guwahati',
//   'Indian Institute of Technology (IIT) Hyderabad',
//   'Indian Institute of Technology (IIT) Indore',
//   'Indian Institute of Technology (IIT) Varanasi (BHU)',
//   'Indian Institute of Technology (IIT) Ropar',
//   'Indian Institute of Technology (IIT) Patna',
//   'Indian Institute of Technology (IIT) Mandi',
//   'Indian Institute of Technology (IIT) Gandhinagar',
//   'Indian Institute of Technology (IIT) Jodhpur',
//   'Indian Institute of Technology (IIT) Bhubaneswar',
//   'Indian Institute of Technology (IIT) Tirupati',
//   'Indian Institute of Technology (IIT) Palakkad',
//   'Indian Institute of Technology (IIT) Goa',
//   'Indian Institute of Technology (IIT) Jammu',
//   'Indian Institute of Technology (IIT) Dharwad',
//   'Indian Institute of Technology (IIT) Bhilai',
//   'Indian Institute of Technology (IIT) ISM Dhanbad',
  
//   // IISc and IISERs
//   'Indian Institute of Science (IISc) Bangalore',
//   'Indian Institute of Science Education and Research (IISER) Pune',
//   'Indian Institute of Science Education and Research (IISER) Kolkata',
//   'Indian Institute of Science Education and Research (IISER) Mohali',
//   'Indian Institute of Science Education and Research (IISER) Bhopal',
//   'Indian Institute of Science Education and Research (IISER) Thiruvananthapuram',
//   'Indian Institute of Science Education and Research (IISER) Tirupati',
//   'Indian Institute of Science Education and Research (IISER) Berhampur',
  
//   // NITs (National Institutes of Technology)
//   'National Institute of Technology (NIT) Trichy',
//   'National Institute of Technology (NIT) Warangal',
//   'National Institute of Technology (NIT) Surathkal',
//   'National Institute of Technology (NIT) Calicut',
//   'National Institute of Technology (NIT) Rourkela',
//   'National Institute of Technology (NIT) Allahabad',
//   'National Institute of Technology (NIT) Bhopal',
//   'National Institute of Technology (NIT) Nagpur',
//   'National Institute of Technology (NIT) Kurukshetra',
//   'National Institute of Technology (NIT) Jamshedpur',
//   'National Institute of Technology (NIT) Durgapur',
//   'National Institute of Technology (NIT) Jalandhar',
//   'National Institute of Technology (NIT) Patna',
//   'National Institute of Technology (NIT) Raipur',
//   'National Institute of Technology (NIT) Agartala',
//   'National Institute of Technology (NIT) Arunachal Pradesh',
//   'National Institute of Technology (NIT) Delhi',
//   'National Institute of Technology (NIT) Goa',
//   'National Institute of Technology (NIT) Hamirpur',
//   'National Institute of Technology (NIT) Manipur',
//   'National Institute of Technology (NIT) Meghalaya',
//   'National Institute of Technology (NIT) Mizoram',
//   'National Institute of Technology (NIT) Nagaland',
//   'National Institute of Technology (NIT) Puducherry',
//   'National Institute of Technology (NIT) Sikkim',
//   'National Institute of Technology (NIT) Srinagar',
//   'National Institute of Technology (NIT) Uttarakhand',
//   'National Institute of Technology (NIT) Andhra Pradesh',
  
//   // IIITs (Indian Institutes of Information Technology)
//   'Indian Institute of Information Technology (IIIT) Hyderabad',
//   'Indian Institute of Information Technology (IIIT) Bangalore',
//   'Indian Institute of Information Technology (IIIT) Delhi',
//   'Indian Institute of Information Technology (IIIT) Allahabad',
//   'Indian Institute of Information Technology (IIIT) Gwalior',
//   'Indian Institute of Information Technology (IIIT) Jabalpur',
//   'Indian Institute of Information Technology (IIIT) Kota',
//   'Indian Institute of Information Technology (IIIT) Pune',
//   'Indian Institute of Information Technology (IIIT) Vadodara',
//   'Indian Institute of Information Technology (IIIT) Nagpur',
//   'Indian Institute of Information Technology (IIIT) Kalyani',
//   'Indian Institute of Information Technology (IIIT) Lucknow',
//   'Indian Institute of Information Technology (IIIT) Sonepat',
//   'Indian Institute of Information Technology (IIIT) Kurnool',
//   'Indian Institute of Information Technology (IIIT) Tiruchirappalli',
//   'Indian Institute of Information Technology (IIIT) Una',
//   'Indian Institute of Information Technology (IIIT) Surat',
//   'Indian Institute of Information Technology (IIIT) Manipur',
//   'Indian Institute of Information Technology (IIIT) Kottayam',
//   'Indian Institute of Information Technology (IIIT) Ranchi',
//   'Indian Institute of Information Technology (IIIT) Agartala',
//   'Indian Institute of Information Technology (IIIT) Bhagalpur',
//   'Indian Institute of Information Technology (IIIT) Bhopal',
//   'Indian Institute of Information Technology (IIIT) Dharwad',
  
//   // BITS Campuses
//   'Birla Institute of Technology and Science (BITS) Pilani',
//   'BITS Pilani Goa Campus',
//   'BITS Pilani Hyderabad Campus',
//   'BITS Pilani Dubai Campus',
  
//   // VIT Campuses
//   'Vellore Institute of Technology (VIT) Vellore',
//   'VIT Chennai',
//   'VIT Bhopal',
//   'VIT AP (Amaravati)',
  
//   // Manipal Campuses
//   'Manipal Institute of Technology (MIT)',
//   'Manipal University Jaipur',
//   'Manipal Academy of Higher Education (MAHE)',
//   'Manipal Institute of Technology Manipal',
//   'Manipal University Dubai',
  
//   // Delhi Universities
//   'University of Delhi',
//   'Delhi Technological University (DTU)',
//   'Netaji Subhas University of Technology (NSUT)',
//   'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
//   'Jamia Millia Islamia',
//   'Jawaharlal Nehru University (JNU)',
//   'Indian Institute of Technology (IIT) Delhi',
//   'All India Institute of Medical Sciences (AIIMS) Delhi',
//   'Delhi University - St. Stephens College',
//   'Delhi University - Hindu College',
//   'Delhi University - Hansraj College',
//   'Delhi University - Ramjas College',
//   'Delhi University - Miranda House',
//   'Delhi University - Lady Shri Ram College',
//   'Guru Gobind Singh Indraprastha University',
//   'Ambedkar University Delhi',
  
//   // Mumbai/Maharashtra Universities
//   'Indian Institute of Technology (IIT) Bombay',
//   'University of Mumbai',
//   'Pune University',
//   'Savitribai Phule Pune University',
//   'College of Engineering Pune (COEP)',
//   'Pune Institute of Computer Technology (PICT)',
//   'Walchand College of Engineering Sangli',
//   'Vishwakarma Institute of Technology Pune',
//   'MIT Academy of Engineering Pune',
//   'Symbiosis Institute of Technology',
//   'Army Institute of Technology Pune',
//   'Maharashtra Institute of Technology (MIT) Pune',
//   'Bharati Vidyapeeth College of Engineering',
//   'Dr. D. Y. Patil Institute of Technology',
//   'Thadomal Shahani Engineering College',
//   'K. J. Somaiya College of Engineering',
//   'Sardar Patel Institute of Technology',
//   'Veermata Jijabai Technological Institute (VJTI)',
//   'Institute of Chemical Technology Mumbai',
//   'Fr. Conceicao Rodrigues College of Engineering',
  
//   // Tamil Nadu Universities
//   'Anna University',
//   'Indian Institute of Technology (IIT) Madras',
//   'PSG College of Technology',
//   'SSN College of Engineering',
//   'Thiagarajar College of Engineering',
//   'Kumaraguru College of Technology',
//   'Karunya Institute of Technology and Sciences',
//   'Sastra Deemed University',
//   'SRM Institute of Science and Technology',
//   'Hindustan Institute of Technology and Science',
//   'Sathyabama Institute of Science and Technology',
//   'Vel Tech Rangarajan Dr. Sagunthala R&D Institute',
//   'Chennai Institute of Technology',
//   'Rajalakshmi Engineering College',
//   'St. Joseph College of Engineering',
//   'Easwari Engineering College',
//   'R.M.K. Engineering College',
//   'Meenakshi College of Engineering',
//   'University of Madras',
//   'Madras Institute of Technology (MIT)',
//   'College of Engineering Guindy',
//   'Alagappa College of Technology',
//   'Government College of Technology Coimbatore',
  
//   // Karnataka Universities
//   'Indian Institute of Science (IISc) Bangalore',
//   'PES University',
//   'RV College of Engineering',
//   'BMS College of Engineering',
//   'Dayananda Sagar College of Engineering',
//   'JSS Science and Technology University',
//   'CMR Institute of Technology',
//   'MS Ramaiah Institute of Technology',
//   'Bangalore Institute of Technology',
//   'Sir M. Visvesvaraya Institute of Technology',
//   'New Horizon College of Engineering',
//   'Reva University',
//   'Christ University',
//   'Jain University',
//   'Manipal Institute of Technology Manipal',
//   'National Institute of Technology Karnataka (NITK) Surathkal',
//   'KLE Technological University',
//   'Visvesvaraya Technological University',
//   'University of Mysore',
//   'Bangalore University',
//   'Kuvempu University',
  
//   // West Bengal Universities
//   'Jadavpur University',
//   'Indian Institute of Technology (IIT) Kharagpur',
//   'University of Calcutta',
//   'Bengal Engineering and Science University (BESU)',
//   'Kalyani Government Engineering College',
//   'Haldia Institute of Technology',
//   'Institute of Engineering and Management (IEM)',
//   'Techno India University',
//   'Narula Institute of Technology',
//   'JIS University',
//   'Meghnad Saha Institute of Technology',
//   'Heritage Institute of Technology',
//   'Guru Nanak Institute of Technology',
//   'University of Engineering and Management',
//   'West Bengal University of Technology',
//   'Netaji Subhash Engineering College',
  
//   // Gujarat Universities
//   'Indian Institute of Technology (IIT) Gandhinagar',
//   'Nirma University',
//   'Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)',
//   'Gujarat Technological University',
//   'Sardar Vallabhbhai National Institute of Technology (SVNIT) Surat',
//   'Pandit Deendayal Energy University',
//   'Charotar University of Science and Technology (CHARUSAT)',
//   'L.D. College of Engineering',
//   'Institute of Technology Nirma University',
//   'Gujarat University',
//   'Maharaja Sayajirao University of Baroda',
//   'Saurashtra University',
//   'Ganpat University',
//   'P.P. Savani University',
  
//   // Rajasthan Universities
//   'Indian Institute of Technology (IIT) Jodhpur',
//   'Malaviya National Institute of Technology (MNIT) Jaipur',
//   'University of Rajasthan',
//   'Rajasthan Technical University',
//   'Poornima College of Engineering',
//   'Arya College of Engineering and IT',
//   'Jaipur Engineering College and Research Centre',
//   'Swami Keshvanand Institute of Technology',
//   'LNM Institute of Information Technology',
//   'JECRC University',
//   'Manipal University Jaipur',
//   'Amity University Rajasthan',
//   'JK Lakshmipat University',
  
//   // Andhra Pradesh & Telangana Universities
//   'Indian Institute of Technology (IIT) Hyderabad',
//   'Indian Institute of Information Technology (IIIT) Hyderabad',
//   'National Institute of Technology (NIT) Warangal',
//   'Osmania University',
//   'Jawaharlal Nehru Technological University (JNTU) Hyderabad',
//   'JNTU Kakinada',
//   'JNTU Anantapur',
//   'International Institute of Information Technology (IIIT) Hyderabad',
//   'CVR College of Engineering',
//   'Chaitanya Bharathi Institute of Technology',
//   'Vasavi College of Engineering',
//   'VNR Vignana Jyothi Institute of Engineering and Technology',
//   'Gokaraju Rangaraju Institute of Engineering and Technology',
//   'Koneru Lakshmaiah Education Foundation (KL University)',
//   'Gitam University',
//   'Vignan University',
//   'SRM University AP',
//   'Amrita Vishwa Vidyapeetham',
//   'Lovely Professional University (LPU) - Andhra Pradesh Campus',
  
//   // Kerala Universities
//   'Indian Institute of Technology (IIT) Palakkad',
//   'National Institute of Technology (NIT) Calicut',
//   'University of Kerala',
//   'Cochin University of Science and Technology (CUSAT)',
//   'Kerala University',
//   'Government Engineering College Thrissur',
//   'College of Engineering Trivandrum',
//   'Rajagiri School of Engineering and Technology',
//   'Mar Athanasius College of Engineering',
//   'Toc H Institute of Science and Technology',
//   'LBS Institute of Technology for Women',
//   'APJ Abdul Kalam Technological University',
//   'Indian Institute of Space Science and Technology (IIST)',
  
//   // Punjab Universities
//   'Indian Institute of Technology (IIT) Ropar',
//   'Thapar Institute of Engineering and Technology',
//   'Punjab University',
//   'Punjab Engineering College',
//   'Guru Nanak Dev University',
//   'Punjabi University Patiala',
//   'Lovely Professional University (LPU)',
//   'Chitkara University',
//   'CT Institute of Technology and Research',
//   'DAV Institute of Engineering and Technology',
  
//   // Uttar Pradesh Universities
//   'Indian Institute of Technology (IIT) Kanpur',
//   'Indian Institute of Technology (IIT) Varanasi (BHU)',
//   'Motilal Nehru National Institute of Technology (MNNIT) Allahabad',
//   'Aligarh Muslim University',
//   'Banaras Hindu University',
//   'Harcourt Butler Technical University',
//   'Uttar Pradesh Technical University',
//   'AKTU (Dr. A.P.J. Abdul Kalam Technical University)',
//   'Indian Institute of Information Technology (IIIT) Allahabad',
//   'King Georges Medical University',
//   'Integral University',
//   'Amity University Uttar Pradesh',
//   'Sharda University',
//   'Galgotias University',
//   'Bennett University',
//   'KIET Group of Institutions',
//   'JSS Academy of Technical Education Noida',
//   'Jaypee Institute of Information Technology',
//   'SRM Institute of Science and Technology - NCR Campus',
  
//   // Haryana Universities
//   'National Institute of Technology (NIT) Kurukshetra',
//   'Guru Jambheshwar University of Science and Technology',
//   'Deenbandhu Chhotu Ram University of Science and Technology',
//   'Maharshi Dayanand University',
//   'Kurukshetra University',
//   'Amity University Haryana',
//   'Manav Rachna University',
//   'The NorthCap University',
//   'Ansal University',
//   'GD Goenka University',
  
//   // Odisha Universities
//   'National Institute of Technology (NIT) Rourkela',
//   'Indian Institute of Technology (IIT) Bhubaneswar',
//   'Kalinga Institute of Industrial Technology (KIIT)',
//   'Siksha O Anusandhan University',
//   'Utkal University',
//   'GIET University',
//   'Centurion University',
//   'Trident Academy of Technology',
//   'CV Raman Global University',
  
//   // Jharkhand Universities
//   'Indian Institute of Technology (IIT) ISM Dhanbad',
//   'National Institute of Technology (NIT) Jamshedpur',
//   'Birla Institute of Technology (BIT) Mesra',
//   'Ranchi University',
//   'Central University of Jharkhand',
  
//   // Assam & Northeast Universities
//   'Indian Institute of Technology (IIT) Guwahati',
//   'National Institute of Technology (NIT) Silchar',
//   'Assam University',
//   'Dibrugarh University',
//   'Gauhati University',
//   'Tezpur University',
//   'Cotton University',
//   'Royal Global University',
//   'Assam Engineering College',
//   'Jorhat Engineering College',
  
//   // Madhya Pradesh Universities
//   'Indian Institute of Technology (IIT) Indore',
//   'Maulana Azad National Institute of Technology (MANIT) Bhopal',
//   'Indian Institute of Information Technology (IIIT) Jabalpur',
//   'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
//   'Barkatullah University',
//   'Devi Ahilya Vishwavidyalaya',
//   'Atal Bihari Vajpayee University',
//   'Oriental Institute of Science and Technology',
//   'Lakshmi Narain College of Technology',
//   'UIT RGPV',
  
//   // Chhattisgarh Universities
//   'National Institute of Technology (NIT) Raipur',
//   'Indian Institute of Information Technology (IIIT) Naya Raipur',
//   'Pt. Ravishankar Shukla University',
//   'Chhattisgarh Swami Vivekanand Technical University',
//   'Kalinga University',
//   'Raipur Institute of Technology',
  
//   // Himachal Pradesh Universities
//   'Indian Institute of Technology (IIT) Mandi',
//   'National Institute of Technology (NIT) Hamirpur',
//   'Himachal Pradesh University',
//   'Jaypee University of Information Technology',
//   'Shoolini University',
//   'Lovely Professional University Himachal Pradesh Campus',
  
//   // Uttarakhand Universities
//   'Indian Institute of Technology (IIT) Roorkee',
//   'National Institute of Technology (NIT) Uttarakhand',
//   'Dehradun Institute of Technology',
//   'Graphic Era Deemed University',
//   'University of Petroleum and Energy Studies (UPES)',
//   'Dev Bhoomi Uttarakhand University',
//   'Hemwati Nandan Bahuguna Garhwal University',
//   'Kumaun University',
  
//   // Goa Universities
//   'Indian Institute of Technology (IIT) Goa',
//   'BITS Pilani Goa Campus',
//   'National Institute of Technology (NIT) Goa',
//   'Goa University',
//   'Goa College of Engineering',
//   'Don Bosco College of Engineering',
  
//   // Jammu & Kashmir Universities
//   'Indian Institute of Technology (IIT) Jammu',
//   'National Institute of Technology (NIT) Srinagar',
//   'University of Kashmir',
//   'University of Jammu',
//   'Islamic University of Science and Technology',
//   'Shri Mata Vaishno Devi University',
  
//   // Bihar Universities
//   'Indian Institute of Technology (IIT) Patna',
//   'National Institute of Technology (NIT) Patna',
//   'Patna University',
//   'Bihar Institute of Technology',
//   'Muzaffarpur Institute of Technology',
//   'Darbhanga College of Engineering',
//   'Gaya College of Engineering',
  
//   // Other States and Specialized Institutions
//   'Indian Statistical Institute (ISI) Kolkata',
//   'Indian Statistical Institute (ISI) Delhi',
//   'Indian Statistical Institute (ISI) Bangalore',
//   'Indian School of Mines (ISM) Dhanbad',
//   'Defence Institute of Advanced Technology (DIAT) Pune',
//   'Indian Maritime University',
//   'Indian Institute of Foreign Trade (IIFT)',
//   'All India Institute of Medical Sciences (AIIMS) - Various Campuses',
//   'Tata Institute of Fundamental Research (TIFR)',
//   'Homi Bhabha National Institute',
//   'Indira Gandhi Centre for Atomic Research',
//   'Variable Energy Cyclotron Centre',
//   'Saha Institute of Nuclear Physics',
//   'Bose Institute',
//   'S.N. Bose National Centre for Basic Sciences',
//   'Harish-Chandra Research Institute',
//   'Institute of Mathematical Sciences',
//   'The Institute of Mathematical Sciences Chennai',
//   'Raman Research Institute',
//   'Physical Research Laboratory',
//   'Space Applications Centre',
//   'Vikram Sarabhai Space Centre',
//   'ISRO Satellite Centre',
//   'National Centre for Radio Astrophysics',
//   'Inter-University Centre for Astronomy and Astrophysics',
//   'Tata Institute of Social Sciences (TISS)',
//   'Indian Institute of Management (IIM) - All Campuses',
//   'Xavier School of Management (XLRI)',
//   'SP Jain Institute of Management and Research',
//   'Management Development Institute (MDI) Gurgaon',
//   'Faculty of Management Studies (FMS) Delhi',
//   'Indian School of Business (ISB) Hyderabad',
//   'Great Lakes Institute of Management',
//   'NMIMS Mumbai',
//   'Symbiosis Institute of Business Management',
//   'Other'
// ];

// const BRANCHES = [
//   'CSE','CCE','AIML','IT','ECE','EEE','Mech','Civil','Chemical','Biotech','Other'
// ];
// const YEARS = ['1','2','3','4'];

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfUSzo-AVIFgRHEW99VbGifjqarTxzvxkC_j3RLWYFW25hAJQ/viewform';

export const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApply = (_job: Job) => {
    // Add job information as URL parameters to pre-fill the form if needed
    const url = new URL(GOOGLE_FORM_URL);
    // You can add parameters here if your Google Form supports pre-filling
    // url.searchParams.set('entry.XXXXXX', _job.title); // Replace XXXXXX with actual entry ID
    
    // Open Google Form in new tab
    window.open(url.toString(), '_blank');
  };

  return (
    <div className="min-h-screen bg-palette-black font-body">
      <section className="bg-palette-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-4">
            Careers at <span className="font-bold">ColCord</span>
          </h1>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            We're building the future of university tech. Explore internship roles below if you see a fit, apply and join our mission.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {JOBS.map((job) => (
              <article key={job.id} className="bg-white/3 border border-white/10 p-6 rounded-lg backdrop-blur-sm">
                <header className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-1">{job.title}</h3>
                    <div className="flex items-center text-sm text-white/60 gap-3">
                      <Briefcase className="h-4 w-4 text-white/60" />
                      <span>{job.openings} position{job.openings > 1 ? 's' : ''} open</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/80 border border-white/10 rounded-md hover:bg-white/10 transition-colors"
                      onClick={() => handleApply(job)}
                    >
                      Apply
                    </Button>
                  </div>
                </header>

                <p className="mt-4 text-white/60 text-sm leading-relaxed">{job.intro}</p>

                <div className="mt-4 grid gap-3">
                  <div>
                    <h4 className="text-sm text-white font-medium mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                      {job.responsibilities.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm text-white font-medium mb-2">Preferred Skills (Good to Have)</h4>
                    <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                      {job.preferred.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm text-white font-medium mb-2">Tools You'll Use</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((t) => (
                        <span key={t} className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Perks & Benefits */}
          <section className="mt-16 bg-white/3 border border-white/10 p-8 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl lg:text-4xl font-light text-palette-white">
                  Perks & Benefits
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto mt-2 font-body">What we provide to support your growth and celebrate your impact.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: 'Official Internship Certificate',
                    desc: 'A verified credential recognizing your contribution.',
                    icon: '',
                  },
                  {
                    title: 'Experience & Completion Letter',
                    desc: 'Proof of hands-on industry experience.',
                    icon: '',
                  },
                  {
                    title: 'Letter of Recommendation',
                    desc: 'From professors/founders for outstanding performers.',
                    icon: '',
                  },
                  {
                    title: 'Project Showcase',
                    desc: 'Your work featured on live platforms, GitHub repos, and our official site.',
                    icon: '',
                  },
                  {
                    title: 'Equity Participation (ESOP)',
                    desc: 'An opportunity to share in our growth journey.',
                    icon: '',
                  },
                  {
                    title: 'Professional Endorsements',
                    desc: 'Recognition on LinkedIn/GitHub to strengthen your profile.',
                    icon: '',
                  },
                  {
                    title: 'Innovation Centre Access',
                    desc: 'Exclusive chance to work at the Manipal Innovation Centre.',
                    icon: '',
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="bg-palette-black border border-white/5 p-4 rounded-lg flex items-start gap-4 hover:scale-105 transform transition-all duration-200"
                    role="group"
                    aria-labelledby={`perk-${p.title.replace(/\s+/g, '-')}`}
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-xl" aria-hidden>
                      {p.icon && <span>{p.icon}</span>}
                    </div>
                    <div>
                      <h3 id={`perk-${p.title.replace(/\s+/g, '-')}`} className="text-white font-semibold text-sm font-heading">
                        {p.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-1 leading-snug font-body">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <p className="text-white/60 font-body">Have general questions about careers or partnerships? Email us at <a className="text-white underline" href="mailto:team@colcord.co.in">team@colcord.co.in</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};
