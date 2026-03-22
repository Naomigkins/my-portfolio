
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,       // animation speed
      easing: "ease-in-out",
      once: false,         // animate every scroll
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-900 px-6 py-12">
      {/* Plain Grayish-White Background (no overlay) */}

      <div className="absolute top-20 left-10 text-stone-400 text-6xl opacity-10 rotate-12">⟨⟩</div>
      <div className="absolute top-40 right-20 text-stone-400 text-4xl opacity-8">⚡</div>
      <div className="absolute bottom-32 left-20 text-stone-400 text-5xl opacity-6 -rotate-12">0101</div>
      <div className="absolute bottom-20 right-10 text-stone-400 text-3xl opacity-8">🔒</div>
      <div className="absolute top-1/3 left-1/4 text-stone-400 text-2xl opacity-5">━━━━</div>
      <div className="absolute bottom-1/3 right-1/3 text-stone-400 text-lg opacity-7">{'</>'}</div>

      {/* Subtle Geometric Shapes */}
      <div className="absolute top-16 right-1/4 w-32 h-32 border border-stone-300/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-16 left-1/4 w-24 h-24 border border-stone-300/20 rounded-lg rotate-45 opacity-20"></div>
      <div className="absolute top-1/2 left-16 w-16 h-16 border border-stone-300/20 rounded-full opacity-25"></div>

      {/* Main Content Container */}
      <div className="relative z-10">
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/50 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-slate-900">
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-slate-700">
            <a href="#home" className="hover:text-amber-600 transition">Home</a>
            <a href="#skills" className="hover:text-amber-600 transition">Skills</a>
            <a href="#experience" className="hover:text-amber-600 transition">Experience</a>
            <a href="#projects" className="hover:text-amber-600 transition">Projects</a>
            <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-700 text-3xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-4">
            <a href="#home" className="block hover:text-amber-600 transition">Home</a>
            <a href="#skills" className="block hover:text-amber-600 transition">Skills</a>
            <a href="#experience" className="block hover:text-amber-600 transition">Experience</a>
            <a href="#projects" className="block hover:text-amber-600 transition">Projects</a>
            <a href="#contact" className="block hover:text-amber-600 transition">Contact</a>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <header id="home" className="relative mb-12 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Artistic background elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="artistic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400" />
                <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artistic-pattern)" />
          </svg>
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full opacity-20 blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-15 blur-lg" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mx-auto mb-8 w-40 h-40 rounded-full border-4 border-white shadow-2xl shadow-slate-300/50 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="/profile.jpg" alt="Noemie Migkins" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-6xl font-light tracking-wider text-black drop-shadow-lg font-cochocib">
            NOEMIE MIGKINS
          </h1>
          <p className="mt-4 text-slate-600 text-2xl font-semibold tracking-wide">
            Cybersecurity Graduate (Summa Cum Laude) · MSCS Candidate
          </p>
          <p className="mt-2 text-slate-500 text-lg font-medium">
            SOC/IR | Network Defense | Incident Response | Governance
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
  {[{
    label: 'GitHub',
    icon: '🐙',
    link: 'https://github.com/naomigkins'
  }, {
    label: 'LinkedIn',
    icon: '🔗',
    link: 'https://linkedin.com/in/naomigkins'
  }, {
    label: 'Email',
    icon: '✉️',
    link: 'mailto:noemieebdao23@gmail.com'
  }].map((item) => (
    <a 
      key={item.label} 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center gap-3 rounded-full px-6 py-3 
                 text-sm font-medium bg-white/80 border border-slate-300 
                 text-slate-700 hover:bg-white hover:shadow-lg hover:scale-105 
                 transition-all duration-200 backdrop-blur-sm"
    >
      <span className="text-lg">{item.icon}</span>
      <span>{item.label}</span>
    </a>
  ))}
</div>

          <div className="mt-6 text-slate-600 text-base font-medium">
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl">📍</span> Dasmariñas, Cavite, PH
            </p>
            <p className="flex items-center justify-center gap-2 mt-2">
              <span className="text-xl">📱</span>
              <a href="tel:+639319663834" className="underline hover:text-blue-600 transition-colors">+63 931 966 3834</a>
              <span className="mx-2">•</span>
              <a href="tel:+16468893406" className="underline hover:text-blue-600 transition-colors">+1 (646) 889‑3406</a>
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section data-aos="fade-up" data-aos-delay="200" className="max-w-5xl mx-auto mt-10 px-6 py-8 bg-stone-50 border border-stone-200 rounded-3xl shadow-md relative overflow-hidden">
        {/* Cyber/IT Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="20" height="20" fill="none"/>
                <circle cx="5" cy="5" r="1" fill="currentColor"/>
                <circle cx="15" cy="15" r="1" fill="currentColor"/>
                <line x1="5" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="15" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="15" y1="15" x2="5" y2="15" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-4 right-4 text-slate-400 text-2xl opacity-20">⚡</div>
        <div className="absolute bottom-4 left-4 text-slate-400 text-xl opacity-20">⟨⟩</div>
        <div className="absolute top-1/2 left-8 text-slate-400 text-lg opacity-15">0101</div>
        <div className="absolute bottom-8 right-8 text-slate-400 text-sm opacity-20">{'</>'}</div>

        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 relative z-10">About Me</h2>

        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-center bg-gradient-to-br from-stone-50 to-amber-50/30 border border-amber-200/50 rounded-2xl p-6 shadow-inner relative z-10">
          <div className="relative group overflow-hidden rounded-xl border border-blue-300/30">
            <img
              src="/militaryaboutme.jpg"
              alt="Noemie in military uniform"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-slate-900/20 mix-blend-multiply" />
            {/* Cyber overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-slate-700 text-lg leading-relaxed">
              I am a high-performing Cybersecurity graduate (Summa Cum Laude) and MSCS candidate with
              hands-on experience in SIEM alert triage (Splunk/Elastic), vulnerability assessments
              (Nessus/Nmap), incident response procedures, Linux systems, network hardening, and
              security governance documentation.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              My background includes service in the Philippine Marine Reserve, where I developed strong
              discipline, operational coordination, and rapid decision-making under pressure—skills that
              translate directly into cybersecurity and incident response.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              I have also served as a Chief Operating Officer, leading global teams and aligning operations
              with NIST CSF, ISO 27001, and SOC 2 readiness. I excel in diagnosing security issues, analyzing
              system behavior, writing clear documentation, and supporting compliance-driven environments.
            </p>
          </div>
        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto mt-12 px-6 py-10 bg-stone-50 border border-stone-200 rounded-3xl shadow-md">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Core Competencies</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Security Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              🔐 Security
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Network Hardening", "Incident Response", "SIEM Monitoring", "Vulnerability Assessment", "Risk & Compliance", "IAM", "SOC Procedures", "Linux Security"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-blue-900/40 border border-blue-400/50 rounded-full text-sm text-blue-100 hover:bg-blue-800/60 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Networking Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              🌐 Networking
            </h3>
            <div className="flex flex-wrap gap-2">
              {["TCP/IP", "DNS", "DHCP", "Routing", "Firewalls (SPI)", "Wireless Security (WPA2/WPA3)"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-cyan-900/40 border border-cyan-400/50 rounded-full text-sm text-cyan-100 hover:bg-cyan-800/60 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              💻 Programming
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "Java", "C++"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-purple-900/40 border border-purple-400/50 rounded-full text-sm text-purple-100 hover:bg-purple-800/60 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Documentation Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              📄 Documentation
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Security Reports", "Remediation Plans", "Policy Writing", "Playbooks", "SOPs"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-emerald-900/40 border border-emerald-400/50 rounded-full text-sm text-emerald-100 hover:bg-emerald-800/60 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Experience Timeline */}
      <section id="experience" className="max-w-5xl mx-auto mt-12 px-6 py-10 bg-stone-50 border border-stone-200 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Experience</h2>

        <div className="border-l border-slate-300 pl-6 space-y-12">

          {/* COO & Co‑Owner — ExecutiveHands */}
          <div>
            <div className="text-blue-400 font-semibold">
              COO &amp; Co‑Owner — ExecutiveHands (Wyoming, USA — Remote Global)
            </div>
            <div className="text-stone-600 text-sm mb-2">
              September 2024 – Present
            </div>
            <p className="text-stone-700 leading-relaxed">
              🌐 Company Website:{" "}
              <a
                href="https://executivehandsheadquarters.com/"
                className="text-blue-400 underline hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://executivehandsheadquarters.com/
              </a>
            </p>

            <ul className="list-disc list-inside text-stone-700 leading-relaxed mt-3 space-y-2">
              <li>Built and implemented a security governance program for a global remote team (15+ agents).</li>
              <li>Established IAM standards, RBAC, MFA enforcement, and secure data-handling procedures.</li>
              <li>Mapped operational workflows to NIST CSF, ISO 27001, and SOC 2 readiness requirements.</li>
              <li>Led incident-response readiness activities, including tabletop simulations and BCP/DR planning.</li>
              <li>Conducted internal risk assessments, identified vulnerabilities, and authored remediation plans.</li>
              <li>Produced security documentation, SOPs, policy guidelines, and compliance-aligned workflows.</li>
              <li>Coordinated with leadership to close gaps in governance, operational security, and continuity.</li>
            </ul>
          </div>

          {/* Technical Support Engineer */}
          <div>
            <div className="text-blue-400 font-semibold">
              Technical Support Engineer — CSS Corp / AloricaPH
            </div>
            <div className="text-stone-600 text-sm mb-2">
              April 2017 – February 2022
            </div>

            <ul className="list-disc list-inside text-stone-700 leading-relaxed mt-3 space-y-2">
              <li>Secured network infrastructure by mitigating DNS/DHCP vulnerabilities and correcting L1–L3 configuration issues.</li>
              <li>Hardened wireless environments: WPA2/WPA3, disabled WPS, and improved SPI firewall protections.</li>
              <li>Supported IAM onboarding and validated device identity across enterprise environments.</li>
              <li>Resolved large volumes of technical cases, performing root-cause analysis and restoring service uptime.</li>
              <li>Authored technical logs, troubleshooting guides, and KB documentation that reduced repeat incidents.</li>
            </ul>
          </div>

          {/* Philippine Marine Reserve */}
          <div>
            <div className="text-blue-400 font-semibold">
              Philippine Marine Reserve — Volunteer Service
            </div>
            <div className="text-stone-600 text-sm mb-2">
              2020 – 2022
            </div>
            <p className="text-stone-700 leading-relaxed">
              Served in the Philippine Marine Reserve, developing discipline, operational awareness,
              rapid decision-making, coordination skills, and a strong threat-assessment mindset.
            </p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative max-w-5xl mx-auto mt-12 px-6 py-10 bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(203,213,225,0.18),transparent_60%)]" />
        <h2 className="relative z-10 text-3xl font-bold text-center mb-8 text-stone-800 tracking-tight">Projects</h2>

        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Mobile App Security */}
          <div className="relative overflow-hidden rounded-2xl p-6 border border-amber-100/70 bg-gradient-to-br from-white/90 via-amber-100 to-white/90 hover:bg-gradient-to-br hover:from-white/95 hover:via-amber-150 hover:to-white/95 transition shadow-lg hover:shadow-amber-300 text-black">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-amber-200/30 blur-2xl pointer-events-none" />
            <h3 className="relative text-xl font-semibold mb-3">Mobile App Security (Android + Python Backend)</h3>
            <p className="relative text-sm leading-relaxed">
              end‑to‑end encrypted communication, secure API interaction, and hardened
              authentication flows. Applied mobile app security best practices to protect
              data-in-transit, prevent tampering, and enforce controlled access.
            </p>
          </div>

          {/* Vulnerability Assessment Lab */}
          <div className="relative overflow-hidden rounded-2xl p-6 border border-indigo-100/70 bg-gradient-to-br from-white/90 via-indigo-100 to-white/90 hover:bg-gradient-to-br hover:from-white/95 hover:via-indigo-150 hover:to-white/95 transition shadow-lg hover:shadow-indigo-300 text-black">
            <div className="absolute -top-5 right-4 w-20 h-20 rounded-full bg-indigo-200/25 blur-2xl pointer-events-none" />
            <h3 className="relative text-xl font-semibold mb-3">Vulnerability Assessment Lab</h3>
            <p className="relative text-sm leading-relaxed">
              Deployed a Windows/Linux test environment for credentialed Nessus scans.
              Identified 10+ critical and high‑severity vulnerabilities and produced a
              formal remediation report. Mapped findings to OWASP Top 10 and
              industry security best practices.
            </p>
          </div>

          {/* Incident Response & Forensics Simulation */}
          <div className="relative overflow-hidden rounded-2xl p-6 border border-cyan-100/70 bg-gradient-to-br from-white/90 via-cyan-100 to-white/90 hover:bg-gradient-to-br hover:from-white/95 hover:via-cyan-150 hover:to-white/95 transition shadow-lg hover:shadow-cyan-300 text-black">
            <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-cyan-200/25 blur-2xl pointer-events-none" />
            <h3 className="relative text-xl font-semibold mb-3">Incident Response & Forensics Simulation</h3>
            <p className="relative text-sm leading-relaxed">
              Analyzed Windows Event Logs, Syslog entries, HTTP traffic, and full PCAP
              captures using Wireshark. Practiced chain‑of‑custody documentation,
              log correlation, and incident timeline reconstruction within realistic IR scenarios.
            </p>
          </div>

          {/* Web Development */}
          <div className="relative overflow-hidden rounded-2xl p-6 border border-emerald-100/70 bg-gradient-to-br from-white/90 via-emerald-100 to-white/90 hover:bg-gradient-to-br hover:from-white/95 hover:via-emerald-150 hover:to-white/95 transition shadow-lg hover:shadow-emerald-300 text-black">
            <div className="absolute -top-4 -right-6 w-24 h-24 rounded-full bg-emerald-200/25 blur-2xl pointer-events-none" />
            <h3 className="relative text-xl font-semibold mb-3">Web Development — PizzaPal Ordering System</h3>
            <p className="relative text-sm leading-relaxed">
              Designed and deployed the PizzaPal Online Ordering System, a functional
              full‑stack web application featuring menu management, customer order flows,
              basic authentication, and backend request processing. Showcased UI/UX thinking
              and application deployment fundamentals.
            </p>
          </div>

          {/* BIG DATA PIPELINE PROJECT */}
          <div className="relative overflow-hidden rounded-2xl p-6 border border-violet-100/70 bg-gradient-to-br from-white/90 via-violet-100 to-white/90 hover:bg-gradient-to-br hover:from-white/95 hover:via-violet-150 hover:to-white/95 transition shadow-lg hover:shadow-violet-300 text-black">
            <div className="absolute bottom-3 right-3 w-20 h-20 rounded-full bg-violet-200/25 blur-2xl pointer-events-none" />
            <h3 className="relative text-xl font-semibold mb-3">Data Pipeline (Big Data Analytics)</h3>
            <p className="relative text-sm leading-relaxed">
              Engineered a full data‑processing pipeline during my bachelor's degree using
              VS Code and modern data tools. Implemented data ingestion, cleaning, transformation,
              and aggregation workflows that processed large structured and unstructured datasets.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Built modular Python scripts to automate ETL stages, validated data integrity,
              and generated analytics-ready datasets for visualization and reporting. Demonstrated
              hands‑on understanding of big data workflows, automation, and pipeline optimization.
            </p>
          </div>

        </div>
      </section>

      {/* Military & Leadership Experience */}
      <section className="max-w-5xl mx-auto mt-12 px-6 py-10 bg-stone-50 border border-stone-200 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Military & Leadership Experience</h2>

        <div className="border-l border-stone-300 pl-6 space-y-12">

          {/* Cadet – Cadet Candidate Officer Course (COCC) */}
          <div>
            <div className="text-stone-800 font-semibold">
              Cadet — COCC, Adamson University
            </div>
            <div className="text-stone-600 text-sm mb-2">2018</div>

            <ul className="list-disc list-inside text-stone-700 leading-relaxed mt-3 space-y-2">
              <li>Developed leadership, discipline, coordination, structured communication, and team-based problem-solving.</li>
              <li>Handled administrative work, documentation, logistics coordination, and assisted in Financial S4 functions (inventory, accountability, resource tracking).</li>
            </ul>
          </div>

          {/* Philippine Marine Reserve */}
          <div>
            <div className="text-stone-800 font-semibold">
              Reserve Member — Philippine Marine Reserve (72nd Marine Battalion)
            </div>
            <div className="text-stone-600 text-sm mb-2">2020–2022</div>
            <ul className="list-disc list-inside text-stone-700 leading-relaxed mt-3 space-y-2">
              <li>Demonstrated security-first mindset, structured decision-making, and situational awareness.</li>
              <li>Applied military-grade threat awareness principles relevant to cybersecurity and SOC environments.</li>
              <li>Assisted with administrative tasks, readiness coordination, and unit accountability processes.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="contact" className="relative max-w-5xl mx-auto mt-12 px-6 py-12 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 border border-stone-200 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_10%,rgba(245,158,11,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(147,197,253,0.12),transparent_55%,rgba(190,24,93,0.1))]" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-800 tracking-tight">Education & Certifications</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 border border-stone-200 hover:border-amber-200 transition shadow-lg hover:shadow-amber-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Master of Science in Computer Science (MSCS)</h3>
              <p className="text-stone-600 font-medium mb-1">Candidate — 4.0 GPA</p>
              <p className="text-stone-600">Colorado Technical University — Expected March 2027</p>
            </div>

            <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 border border-stone-200 hover:border-indigo-200 transition shadow-lg hover:shadow-indigo-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Bachelor of Science in Computer Science, Cybersecurity Engineering</h3>
              <p className="text-stone-600 font-medium mb-1">Summa Cum Laude</p>
              <p className="text-stone-600">Colorado Technical University — December 2025</p>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 border border-stone-200 hover:border-violet-200 transition shadow-lg hover:shadow-violet-200">
            <h3 className="text-2xl font-semibold text-stone-900 mb-6 text-center">Certifications</h3>
            <ul className="list-disc list-inside text-stone-700 leading-relaxed space-y-3">

              <li>
                Principles in Network Security — UCertify (May 2025)
                <a
                  href="https://www.ucertify.com/my/certificate.php?certificate_guid=NOV4GHQR"
                  className="text-amber-600 underline hover:text-amber-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </li>

              <li>
                Ethical Hacking — UCertify (July 2025)
                <a
                  href="https://www.ucertify.com/my/certificate.php?certificate_guid=OJ4TL7BJ"
                  className="text-amber-600 underline hover:text-amber-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </li>

              <li>
                Computer Networks & Communication — UCertify (Feb 2025)
                <a
                  href="https://www.ucertify.com/my/certificate.php?certificate_guid=OGKJV99S"
                  className="text-amber-600 underline hover:text-amber-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </li>

              <li>
                Security Risk Management — UCertify (Jun 2025)
                <a
                  href="https://www.ucertify.com/my/certificate.php?certificate_guid=1V2U527"
                  className="text-amber-600 underline hover:text-amber-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </li>

              <li>
                Security Fundamentals & Identity Management — Coursera (Mar 2025)
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/W579KB4J2EVJ"
                  className="text-amber-600 underline hover:text-amber-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </li>

            </ul>
          </div>

        </div>
      </section>

      {/* Additional Information Section */}
      <section className="max-w-5xl mx-auto mt-16 px-6 pb-12">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
          Additional Information
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-pink-500/30 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
            <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center gap-2">🌍 Languages</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg border border-pink-400/30">
                <span className="text-pink-100 font-semibold">English</span>
                <span className="text-pink-400 text-sm">Fluent (Native)</span>
              </div>
              <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg border border-pink-400/30">
                <span className="text-pink-100 font-semibold">Filipino</span>
                <span className="text-pink-400 text-sm">Native</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">🛠️ Security Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {[{ icon: "🔍", name: "Wireshark" },
                { icon: "🎯", name: "Nmap" },
                { icon: "🔓", name: "Nessus" },
                { icon: "🐧", name: "Kali Linux" },
                { icon: "🛡️", name: "Burp Suite" },
                { icon: "📊", name: "Splunk" },
                { icon: "⚡", name: "Elastic" },
                { icon: "🔀", name: "Git" },
                { icon: "🔑", name: "SSH" },
                { icon: "🔒", name: "VPN" }].map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-yellow-400/30 hover:bg-yellow-900/30 hover:border-yellow-400/60 transition">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-yellow-100 font-medium text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </div> {/* End Main Content Container */}
    </div>
  );
}