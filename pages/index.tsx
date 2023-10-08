import Head from "next/head";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Bhadoriya</title>
        <meta
          name="description"
          content="Ayush Bhadoriya - Full-Stack Software Engineer | Talks About React.js, Next.js, CMS, LLMs, Product Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <Header />
        <div className="pl-[20px] pr-[20px] max-w-[1280px] m-auto">
          <Intro />
          <About />
          <Work />
          <Contact />
        </div>
      </main>
    </>
  );
}
