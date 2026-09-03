/* ------------------------------------------------------------------ */
/* Site configuration                                                  */
/* ------------------------------------------------------------------ */

export const siteConfig = {
  name: "HackWesTX 2026",
  tagline: "Beyond the Feed",
  organizer: "GDG on Campus · Texas Tech University",
  location: "Texas Tech University, Lubbock, TX",
  coordinates: "33.5843° N · 101.8747° W",
  dates: "September 12–13, 2026",
  duration: "24 hours",
  links: {
    register:
      "https://gdg.community.dev/events/details/google-gdg-on-campus-texas-tech-university-lubbock-united-states-presents-hackwestx-26-beyond-the-feed-hackathon/",
    devpost: "https://hackwestx-2026.devpost.com",
    discord: "https://discord.gg/hackwestx",
    email: "mailto:sponsors@hackwestx.dev",
    codeOfConduct:
      "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Layer 1 — Hero                                                      */
/* ------------------------------------------------------------------ */

export const heroCopy = {
  eyebrow: "Signal acquired",
  titleTop: "HACKWESTX",
  titleBottom: "2026",
  accent: "Beyond the Feed.",
  subtitle: "The feed has ended. What's next?",
} as const;

/* ------------------------------------------------------------------ */
/* Layer 2 — About                                                     */
/* ------------------------------------------------------------------ */

export type Stat = {
  value: string;
  suffix?: string;
  label: string;
};

export const aboutCopy = {
  eyebrow: "Mission profile",
  titleLead: "24 Hours. ",
  titleAccent: "Lubbock, TX.",
  subtitle: "The next frontier of hardware and software.",
  stats: [
    { value: "24", suffix: "hrs", label: "of glorious chaos" },
    { value: "200", suffix: "+", label: "hackers" },
    { value: "🏆", label: "exciting prizes" },
  ] satisfies Stat[],
} as const;

/* ------------------------------------------------------------------ */
/* Layer 3 — Schedule                                                  */
/* ------------------------------------------------------------------ */

export type ScheduleEvent = {
  time: string;
  title: string;
};

export type ScheduleDay = {
  id: string;
  day: string;
  events: ScheduleEvent[];
};

export const scheduleCopy = {
  eyebrow: "Flight plan",
  title: "The 24-hour run.",
  days: [
    {
      id: "saturday",
      day: "SAT · SEP 12",
      events: [
        { time: "10:00", title: "Check-in" },
        { time: "11:30", title: "Opening ceremony" },
        { time: "12:00", title: "Hacking begins" },
        { time: "15:00", title: "Workshops" },
        { time: "20:00", title: "Game night" },
      ],
    },
    {
      id: "sunday",
      day: "SUN · SEP 13",
      events: [
        { time: "00:00", title: "Midnight fuel drop" },
        { time: "12:00", title: "Hacking ends" },
        { time: "13:00", title: "Judging expo" },
        { time: "15:00", title: "Awards & closing" },
      ],
    },
  ] satisfies ScheduleDay[],
} as const;

/* ------------------------------------------------------------------ */
/* Layer 4 — FAQ & Sponsors                                            */
/* ------------------------------------------------------------------ */

export type FaqItem = {
  question: string;
  answer: string;
  /** Optional trailing link rendered after the answer. */
  link?: {
    label: string;
    href: string;
  };
};

export const faqCopy = {
  eyebrow: "Intel",
  title: "Questions & allies.",
  faqs: [
    {
      question: "Who can participate?",
      answer:
        "Any currently enrolled college student — any school, any major. Coders, designers, spreadsheet wizards, first-timers: if you can dream it, you're in.",
    },
    {
      question: "How big can teams be?",
      answer:
        "One to four hackers. Bring your crew, or show up solo and adopt one at check-in — friendship speedrun included.",
    },
    {
      question: "What should I bring?",
      answer:
        "A laptop, a charger, and the audacity to build something weird. We'll handle the food, the caffeine, and the swag.",
    },
    {
      question: "What does it cost?",
      answer:
        "Zero dollars. Free food, free swag, free memories. The only currency you'll spend here is sleep.",
    },
    {
      question: "I've never hacked before. Can I come?",
      answer:
        "Then you're exactly who we built this for. Intro workshops all afternoon, mentors roaming all night, zero judgment — everyone's first hackathon is legendary.",
    },
    {
      question: "Are there rules I should know about?",
      answer:
        "One big one: be decent to each other. HackWesTX is an MLH Member Event, so every hacker, mentor, judge, and organizer is held to the MLH Code of Conduct for the whole weekend.",
      link: {
        label: "Read the MLH Code of Conduct",
        href: siteConfig.links.codeOfConduct,
      },
    },
  ] satisfies FaqItem[],
} as const;

export type Sponsor = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

export const sponsorsCopy = {
  label: "Backed by",
  sponsors: [
    {
      id: "conetrix",
      name: "CoNetrix",
      src: "/sponsor-conetrix.png",
      width: 1415,
      height: 1257,
    },
    {
      id: "patterson",
      name: "Patterson",
      src: "/sponsor-patterson.png",
      width: 2517,
      height: 635,
    },
    {
      id: "tcl",
      name: "Tactical Computing Labs",
      src: "/sponsor-tcl.png",
      width: 275,
      height: 128,
    },
    {
      id: "ihub",
      name: "iHub",
      src: "/sponsor-ihub.png",
      width: 1475,
      height: 1475,
    },
    {
      id: "kla",
      name: "KLA",
      src: "/sponsor-kla.png",
      width: 738,
      height: 165,
    },
    {
      id: "l3harris",
      name: "L3Harris",
      src: "/sponsor-l3harris.png",
      width: 1783,
      height: 443,
    },
  ] satisfies Sponsor[],
} as const;

/* ------------------------------------------------------------------ */
/* Layer 5 — Team & CTA                                                */
/* ------------------------------------------------------------------ */

export type TeamMember = {
  name: string;
  role: string;
};

export const ctaCopy = {
  eyebrow: "Transmission end",
  titleLead: "Build the ",
  titleAccent: "Frontier.",
  subtitle: "24 hours. One frontier. September 12–13, 2026.",
  teamLabel: "Flown by",
  team: [
    { name: "Avery Lawson", role: "Lead Organizer" },
    { name: "Priya Nandakumar", role: "Tech Director" },
    { name: "Jordan Whitfield", role: "Design Lead" },
    { name: "Sofia Herrera", role: "Sponsorships" },
  ] satisfies TeamMember[],
} as const;

/* ------------------------------------------------------------------ */
/* Viewport HUD                                                        */
/* ------------------------------------------------------------------ */

export const hudCopy = {
  status: "SYS.STATUS — ONLINE",
  timezone: "GMT-5",
  event: "HACKWESTX_2026",
  dates: "SEP 12–13",
  location: "LUBBOCK, TX",
  coordinates: "33.5843N 101.8747W",
  scrollHint: "Scroll to dive in",
  depthLabel: "DEPTH",
} as const;
