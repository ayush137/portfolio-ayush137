import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-64px)] scroll-m-[55px] flex flex-col items-center"
    >
      <div className="max-w-[800px] m-auto">
        <h2
          className="lexend text-[30px] text-[#40E0D0] capitalize"
          data-aos="fade-up"
        >
          Navigating My Story
        </h2>
        <p
          className="manrope text-[16px] md:text-[18px] leading-[180%] pt-6 pb-6"
          data-aos="fade-up"
        >
          Hey there! I&apos;m Ayush Bhadoriya, a passionate Fullstack Software
          Engineer with over 2 years of hands-on experience in the ever-evolving
          world of tech. I thrive on turning digital ideas into reality,
          crafting seamless web experiences with a futuristic touch.
        </p>
        <p
          className="manrope text-[16px] md:text-[18px] leading-[180%] pb-6"
          data-aos="fade-up"
        >
          My tech toolkit? It&apos;s packed with React.js, Node.js, and Next.js
          for dynamic front-end and back-end development. I dabble in Content
          Management Systems like a pro. JavaScript and TypeScript are my daily
          drivers, and I&apos;m fluent in the art of styling with Tailwind CSS.
          I&apos;ve danced with databases like MongoDB and VectorDB, and
          I&apos;ve harnessed the power of Figma for pixel-perfect designs.
          Redux is my secret sauce for state management, and Python is my
          sidekick for scripting. Plus, I&apos;m no stranger to the magic of GPT
          API, LLMs, and Langchain. If you&apos;re ready to take your project to
          the next level, let&apos;s connect and make some digital magic
          together!
        </p>
      </div>
    </section>
  );
};

export default About;
