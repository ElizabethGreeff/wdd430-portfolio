import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Astronomy Explorer",
    description:
      "A web application that allows users to explore astronomical data and images from various NASA sources.",
    technologies: ["JavaScript", "CSS", "HTML", "NASA API"],
    link: "https://elizabethgreeff.github.io/wdd330-final-project/",
  },
  {
    title: "Mytho Magic",
    description:
      "A web application that allows users to explore mythical creatures and their stories.",
    technologies: ["JavaScript", "CSS", "HTML", "JSON"],
    link: "https://elizabethgreeff.github.io/wdd231/finalProject/index.html",
  },
  {
    title: "Summit Facilities",
    description:
      "A web application that allows users to explore services for a real company.",
    technologies: ["JavaScript", "CSS", "HTML", "JSON"],
    link: "https://elizabethgreeff.github.io/summit/",
  },
  {
    title: "Paradise Getaways",
    description:
      "A web application that allows users to find the perfect getaway for a real company.",
    technologies: ["JavaScript", "CSS", "HTML"],
    link: "https://elizabethgreeff.github.io/work/",
  },
  {
    title: "Exotic Animal World",
    description:
      "A web application that allows users to explore animals hosted and protected by a south african wildlife sanctuary.",
    technologies: ["JavaScript", "CSS", "HTML", "Animals API"],
    link: "https://elizabethgreeff.github.io/wdd131/project/index.html",
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl text-[#3d2c2e] font-bold mb-4">
          Welcome to My Portfolio
        </h2>
        <p className="text-[#6b4f52] leading-relaxed">
          Hello! I'm Elizabeth Greeff, a web developer passionate about
          creating engaging and user-friendly web applications. Below are some
          of the projects I've created.
        </p>
      </section>
      <section>
        <h2 className="text-2xl text-[#3d2c2e] font-bold mb-6">Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
