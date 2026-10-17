// images: add paths to files in /public (e.g. "/experiences/uas-1.jpg")
// and they will show up in the photo slider for that experience.
export const experiences = [
  {
    id: 1,
    title: "UBC UAS",
    role: "Software Developer",
    date: "Sep. 2026 – Present",
    location: "Vancouver, BC",
    description: [
      "Collaborating with about 20 software engineers to build competitive end to end drone autonomy.",
      "Using ROS to integrate software components including computer vision, ML, and telemetry.",
      "Utilizing WebRTC to integrate a video streaming pipeline with ground communications.",
    ],
    tech: ["C++", "Python", "ROS", "Docker", "Git"],
    images: [],
  },
  {
    id: 2,
    title: "CHAOS INDUSTRIES",
    role: "Software Engineering Intern",
    date: "Jul. 2026 – Sep. 2026",
    location: "San Francisco, CA",
    description: [
      "Tested a custom robotics framework built on Rust and C++ by applying it to a real use case.",
      "Analyzed framework time and memory efficiency using bash scripting.",
      "Communicated with mentors frequently while debugging in the company monorepo, following Git best practices.",
    ],
    tech: ["C++", "Python", "Docker", "Git"],
    images: ["/experiences/chaos.jpg"],
  },
  {
    id: 3,
    title: "ATROPOS GROUP",
    role: "Software Engineering Intern",
    date: "Jun. 2026 – Jul. 2026",
    location: "Sunnyvale, CA",
    description: [
      "Developed, tested (HIL/SIL), and deployed data logging software from a Ground Control station to the autopilot computer.",
      "Built telemetry streaming over UDP for real-time flight data visualization.",
      "Optimized logic so 60,000+ messages could be analyzed almost instantaneously for verification.",
      "Acquired by CHAOS — personally contributed to a smooth integration into the new company.",
    ],
    tech: ["C++", "Python", "ROS2", "SSH", "Docker", "Git"],
    images: ["/experiences/atropos.jpg", "/experiences/atropos-1.jpg"],
  },
]
