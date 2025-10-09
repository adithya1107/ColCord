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
    title: 'Full Stack Developer',
    openings: 3,
    intro:
      "Build secure, scalable features across our education platform using React, Node.js, and modern cloud tools.",
    responsibilities: [
      'Develop frontend (React.js) and backend (Node.js) features',
      'Build and test RESTful APIs',
      'Work with Supabase + PostgreSQL',
      'Apply secure coding practices',
    ],
    preferred: [
      'React.js and Node.js knowledge',
      'SQL (PostgreSQL) familiarity',
      'Understanding of APIs and JWT',
    ],
    tools: ['Git & GitHub', 'Postman', 'Supabase', 'VS Code'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    openings: 2,
    intro:
      "Learn to secure web applications through hands-on testing and implementation of security best practices.",
    responsibilities: [
      'Assist with vulnerability testing',
      'Work with authentication systems (Supabase Auth)',
      'Apply encryption concepts',
      'Explore Row Level Security (RLS)',
    ],
    preferred: [
      'OWASP Top 10 awareness',
      'Interest in encryption and JWT',
      'Curiosity about access control',
    ],
    tools: ['Git & GitHub', 'Postman', 'Supabase', 'VS Code'],
  },
  {
    id: 'uiux',
    title: 'UI/UX Developer',
    openings: 2,
    intro:
      "Design and implement user-friendly experiences that make education accessible and engaging.",
    responsibilities: [
      'Create wireframes and mockups',
      'Build responsive layouts with React.js',
      'Conduct usability testing',
      'Connect designs to APIs',
    ],
    preferred: [
      'Basic React.js knowledge',
      'Familiarity with Figma or Adobe XD',
      'Interest in accessibility',
    ],
    tools: ['Git & GitHub', 'VS Code', 'Figma'],
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    openings: 1,
    intro:
      "Build the backbone of our platform with databases, APIs, and server-side logic.",
    responsibilities: [
      'Build backend services (Node.js + Express)',
      'Write API endpoints',
      'Work with PostgreSQL/Supabase',
      'Implement authentication',
    ],
    preferred: [
      'Node.js or backend language experience',
      'Basic SQL understanding',
      'REST API familiarity',
    ],
    tools: ['Git & GitHub', 'Postman', 'VS Code'],
  },
  {
    id: 'data',
    title: 'Data Specialist',
    openings: 1,
    intro:
      "Transform raw data into actionable insights through analysis and visualization.",
    responsibilities: [
      'Write SQL queries for reports',
      'Organize platform data',
      'Create dashboards and charts',
      'Ensure secure data usage',
    ],
    preferred: [
      'SQL knowledge (PostgreSQL preferred)',
      'Interest in data visualization',
      'Analytics curiosity',
    ],
    tools: ['Git & GitHub', 'Supabase', 'BI tools'],
  },
  {
    id: 'qa',
    title: 'QA / Testing Engineer',
    openings: 1,
    intro:
      "Ensure platform reliability through systematic testing and quality assurance.",
    responsibilities: [
      'Test features and report bugs',
      'Suggest improvements',
      'Perform API testing',
      'Learn automated testing',
    ],
    preferred: [
      'Interest in software testing',
      'React or Node.js familiarity',
      'Awareness of Jest or Cypress',
    ],
    tools: ['Git & GitHub', 'Postman', 'VS Code'],
  },
];

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfUSzo-AVIFgRHEW99VbGifjqarTxzvxkC_j3RLWYFW25hAJQ/viewform';

export const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApply = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-palette-black font-body">
      <section className="bg-palette-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-6">
            Join <span className="font-bold">ColCord</span>
          </h1>
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            We're a student-run startup—no monetary stipend, but real equity, mentorship, and ownership. 
            Trade your skills for high-impact learning and a stake in what we're building.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {JOBS.map((job) => (
              <article key={job.id} className="bg-white/3 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-colors">
                <header className="mb-4">
                  <h3 className="text-xl text-white font-semibold mb-2">{job.title}</h3>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {job.openings} open
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/80 border border-white/10 rounded-md hover:bg-white/10 transition-colors -mr-2"
                      onClick={handleApply}
                    >
                      Apply
                    </Button>
                  </div>
                </header>

                <p className="text-white/70 text-sm leading-relaxed mb-4">{job.intro}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs text-white/80 font-medium mb-2 uppercase tracking-wide">What You'll Do</h4>
                    <ul className="text-white/60 text-sm space-y-1">
                      {job.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-white/40 mt-1">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/80 font-medium mb-2 uppercase tracking-wide">Nice to Have</h4>
                    <ul className="text-white/60 text-sm space-y-1">
                      {job.preferred.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-white/40 mt-1">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/80 font-medium mb-2 uppercase tracking-wide">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((t) => (
                        <span key={t} className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded border border-white/10">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Co-builder Package */}
          <section className="mt-16 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 lg:p-12 rounded-lg">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-palette-white mb-3">
                The Co-builder Package
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">Your compensation is our investment in your growth</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                { title: 'Project Ownership', desc: 'Sole owner and builder of our User Dashboard' },
                { title: 'Weekly Mentorship', desc: 'Two 1-on-1 sessions with founders every week' },
                { title: 'Permanent Credit', desc: 'Featured on our website with your photo and links' },
                { title: 'Graduation Package', desc: 'Letter of Recommendation + network introductions' },
                { title: 'Innovation Centre', desc: 'Exclusive access to Manipal Innovation Centre' },
              ].map((p) => (
                <div key={p.title} className="bg-white/3 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-colors">
                  <h3 className="text-white font-semibold font-heading mb-2 text-lg">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Collaboration Framework */}
          <section className="mt-12 bg-white/3 border border-white/10 p-8 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl lg:text-4xl font-light text-palette-white">
                  The Collaboration Framework
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto mt-2 font-body">We've designed a learning-first workflow to maximize your growth and respect your time.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: 'Flexible Agreement',
                    desc: "We don't track hours. This is about the outcome, not the time logged.",
                  },
                  {
                    title: 'Accountability & Feedback',
                    desc: "We'll maintain a consistent feedback loop to ensure you're always supported and moving forward.",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="bg-white/3 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-white font-semibold text-base font-heading mb-2">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-snug font-body">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Perks & Benefits */}
          <section className="mt-16 bg-white/3 border border-white/10 p-8 lg:p-12 rounded-lg">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-palette-white mb-3">
                Additional Perks
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                { title: 'Official Certificate', desc: 'Verified internship credential' },
                { title: 'Experience Letter', desc: 'Proof of hands-on industry work' },
                { title: 'Project Showcase', desc: 'Work featured on live platforms & GitHub' },
                { title: 'Equity (ESOP)', desc: 'Share in our growth journey' },
                { title: 'Endorsements', desc: 'LinkedIn/GitHub profile boosts' },
              ].map((p) => (
                <div key={p.title} className="bg-white/3 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-colors">
                  <h3 className="text-white font-semibold text-lg font-heading mb-1">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 text-center">
            <p className="text-white/60 font-body">
              Questions? <a className="text-white underline hover:text-white/80 transition-colors" href="mailto:team@colcord.co.in">team@colcord.co.in</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};