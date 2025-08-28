import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

// Use backend proxy URL (set in client .env as VITE_API_URL) to avoid CORS.
// Defaults to local proxy started at http://localhost:3001/apply
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/apply';

const BRANCHES = [
  'CSE','CCE','AIML','IT','ECE','EEE','Mech','Civil','Chemical','Biotech','Other'
];
const YEARS = ['1','2','3','4'];

export const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '+91',
    branch: '',
    year: ''
  });

  const openApply = (job: Job) => {
    setSelectedJob(job);
    setApplyOpen(true);
    setSubmitted(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    if (!selectedJob) return;
    if (!API_URL) {
      alert('API URL not configured');
      return;
    }
    setSubmitting(true);
    try {
      const payload: Record<string, string> = {
        jobId: selectedJob.id,
        jobTitle: selectedJob.title,
        name: form.name,
        email: form.email,
        phone: form.phone,
        branch: form.branch,
        year: form.year,
        timestamp: new Date().toISOString(),
      };

      const params = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => params.append(k, String(v)));

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString(),
      });

      // Many Google Apps Script endpoints return 200 but may be opaque if CORS is misconfigured.
      if (!res.ok && res.type !== 'opaque') {
        throw new Error(`Network error: ${res.status}`);
      }

      setSubmitted(true);
      setForm({ name: '', email: '', phone: '+91', branch: '', year: '' });
    } catch (err) {
      console.error('Application submit error:', err);
      alert('Submission failed. Please check browser console/network and ensure the Google Script is deployed for "Anyone, even anonymous" access.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-palette-black font-body">
      {/* Application Dialog */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="sm:max-w-md bg-black border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription className="text-white/60 text-sm">
              Fill the details below. Data is stored per role in Google Sheets.
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <p className="text-green-400 text-sm">Application submitted successfully!</p>
              <Button variant="secondary" onClick={() => setApplyOpen(false)}>Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="bg-[#292929] border-white/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="bg-[#292929] border-white/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Number *</Label>
                <Input id="phone" name="phone" value={form.phone} onChange={handleChange} required pattern="^\+?\d[0-9\s\-]{6,}$" placeholder="+91XXXXXXXXXX" className="bg-[#292929] border-white/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branch">Branch *</Label>
                <select id="branch" name="branch" value={form.branch} onChange={handleChange} required className="bg-[#292929] border border-white/20 rounded-md h-9 px-3 text-sm">
                  <option value="" disabled>Select branch</option>
                  {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <select id="year" name="year" value={form.year} onChange={handleChange} required className="bg-[#292929] border border-white/20 rounded-md h-9 px-3 text-sm">
                  <option value="" disabled>Select year</option>
                  {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <DialogFooter>
                <Button type="button" variant="ghost" className="text-white/70" onClick={() => setApplyOpen(false)} disabled={submitting}>Cancel</Button>
                <Button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <section className="bg-palette-black py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-light text-palette-white mb-4">
            Careers at <span className="font-bold">ColCord</span>
          </h1>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            We're building the future of university tech. Explore internship roles below — if you see a fit, apply and join our mission.
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
                      className="text-white/80 border border-white/10 rounded-md"
                      onClick={() => openApply(job)}
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
                    <h4 className="text-sm text-white font-medium mb-2">Tools You’ll Use</h4>
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
                  Perks & Benefits <span aria-hidden>🌟</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto mt-2">What we provide to support your growth and celebrate your impact.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: 'Official Internship Certificate',
                    desc: 'A verified credential recognizing your contribution.',
                    icon: '🎓',
                  },
                  {
                    title: 'Experience & Completion Letter',
                    desc: 'Proof of hands-on industry experience.',
                    icon: '📄',
                  },
                  {
                    title: 'Letter of Recommendation',
                    desc: 'From professors/founders for outstanding performers.',
                    icon: '📝',
                  },
                  {
                    title: 'Project Showcase',
                    desc: 'Your work featured on live platforms, GitHub repos, and our official site.',
                    icon: '🚀',
                  },
                  {
                    title: 'Equity Participation (ESOP)',
                    desc: 'An opportunity to share in our growth journey.',
                    icon: '💼',
                  },
                  {
                    title: 'Professional Endorsements',
                    desc: 'Recognition on LinkedIn/GitHub to strengthen your profile.',
                    icon: '👍',
                  },
                  {
                    title: 'Innovation Centre Access',
                    desc: 'Exclusive chance to work at the Manipal Innovation Centre.',
                    icon: '🏢',
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="bg-palette-black border border-white/5 p-4 rounded-lg flex items-start gap-4 hover:scale-105 transform transition-all duration-200"
                    role="group"
                    aria-labelledby={`perk-${p.title.replace(/\s+/g, '-')}`}
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-xl" aria-hidden>
                      {p.icon}
                    </div>
                    <div>
                      <h3 id={`perk-${p.title.replace(/\s+/g, '-')}`} className="text-white font-semibold text-sm">
                        {p.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-1 leading-snug">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <p className="text-white/60">Have general questions about careers or partnerships? Email us at <a className="text-white underline" href="mailto:team@colcord.co.in">team@colcord.co.in</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};
