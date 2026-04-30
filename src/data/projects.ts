export type Project = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  highlights: string[];
  image: string;
  caseStudyUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Finance Tracker",
    type: "Personal SaaS / Full-stack App",
    description:
      "A personal finance dashboard to track accounts, transactions, budgets, and spending habits.",
    tags: ["Next.js", "Prisma", "Tailwind"],
    highlights: ["Built from scratch", "Dashboard UI", "Real use case"],
    image: "/projects/finance-tracker.png",
    caseStudyUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Travpals OTA Platform",
    type: "Travel Booking Platform",
    description:
      "A travel booking platform for China land tours with request-first booking and admin CMS flow.",
    tags: ["Next.js", "React", "Prisma"],
    highlights: ["Product thinking", "Booking flow", "Admin system"],
    image: "/projects/travpals.png",
    caseStudyUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Network Performance Dashboard",
    type: "Enterprise Dashboard",
    description:
      "A dashboard for visualising latency, jitter, packet delivery, and location-pair performance.",
    tags: ["React", "TypeScript", "Charts"],
    highlights: ["Data visualisation", "Reusable charts", "Enterprise UI"],
    image: "/projects/network-dashboard.png",
    caseStudyUrl: "#",
  },
  {
    title: "IoT Monitoring Dashboard",
    type: "Enterprise Monitoring Tool",
    description:
      "A monitoring dashboard for IoT devices, incidents, geofence events, temperature, and power state.",
    tags: ["React", "Redux", "DLS"],
    highlights: ["Incident workflow", "Map UI", "Service details"],
    image: "/projects/iot-dashboard.png",
    caseStudyUrl: "#",
  },
];