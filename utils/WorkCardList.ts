export type workCardList = workCardItem[];
export type workCardItem = {
  title: string;
  skills: string[];
  img: string;
  url: string;
};
export const WorkCardList: workCardList = [
  {
    title: "SkillGPT website",
    skills: ["Next.js", "Strapi", "tailwind css"],
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ab-4acfd.appspot.com/o/assets%2Fskillgpt.png?alt=media&token=feff91bc-d685-4f2c-823c-6105e8aeba1a&_gl=1*q2032c*_ga*OTk5ODIzNTIwLjE2OTQzMzk4MzM.*_ga_CW55HF8NVT*MTY5Njc2NDU5NS43LjEuMTY5Njc2NTk1Ny42MC4wLjA.",
    url: "https://www.skillgpt.ai/",
  },
  {
    title: "SkillGPT application",
    skills: ["React.js", "openai", "polaris"],
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ab-4acfd.appspot.com/o/assets%2Fskillgpt.png?alt=media&token=feff91bc-d685-4f2c-823c-6105e8aeba1a&_gl=1*npc9g6*_ga*OTk5ODIzNTIwLjE2OTQzMzk4MzM.*_ga_CW55HF8NVT*MTY5Njc2NDU5NS43LjEuMTY5Njc2NTQxNy40MS4wLjA.",
    url: "https://app.skillgpt.ai/",
  },
  {
    title: "SkillDB website",
    skills: ["Next.js", "Strapi", "tailwind css"],
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ab-4acfd.appspot.com/o/assets%2Fskilldb.png?alt=media&token=4bf70636-a05c-4ee4-a084-ce666d1390b7&_gl=1*reicb9*_ga*OTk5ODIzNTIwLjE2OTQzMzk4MzM.*_ga_CW55HF8NVT*MTY5Njc2NDU5NS43LjEuMTY5Njc2NTc1OC42MC4wLjA.",
    url: "https://skilldb.com/",
  },
  {
    title: "SkillDB application",
    skills: ["React.js", "MongoDB", "Node.js"],
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-ab-4acfd.appspot.com/o/assets%2Fskilldb-application.png?alt=media&token=57c5ef98-71c0-4b8e-9aba-b5ea201e8470&_gl=1*1klylw3*_ga*OTk5ODIzNTIwLjE2OTQzMzk4MzM.*_ga_CW55HF8NVT*MTY5Njc2NDU5NS43LjEuMTY5Njc2NTg0Ni42MC4wLjA.",
    url: "https://app.skilldb.com/",
  },
];
