import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Younes | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Younes Bessa</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/YounesBessa/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/YounesBessa"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Complex Problem
              Solving <span className="px-1">|</span> Proven Leadership
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Web Development</p>
            <p className="py-2">Complex Problem Solving</p>
            <p>Proven Leadership</p>
          </div>
        </div>
        <p>
          I&apos;m a 24-year-old Junior full stack Web developer from France. I study
          web development at <a href="https://www.needfor-school.com/" target="_blank" rel="noreferrer" color="red">Need for School</a> in Rouen. I&apos;m an apprentice at <a href="https://tonightpass.com/" target="_blank" rel="noreferrer" color="red">Tonight Pass</a> and I&apos;m also part of an association called <a href="https://onruntime.com/" target="_blank" rel="noreferrer" color="red">onRuntime
          Studio</a>. I particularly like to meet new and diverse people and work
          with modern frontend tools and frameworks like React.
        </p>
        {/* <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p> */}

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            {/* <span className="px-2">|</span>Front-End Web Developer */}
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>React Native
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>GraphQL
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
          <a href="https://tonightpass.com/"><span className="font-bold italic">TONIGHT PASS</span></a>
            <span className="px-2">|</span>Rouen, France
          </p>
          <p className="py-1 italic">
            Web Developer - Apprenticeship (September 2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Tech stack : React Native, MongoDB, Apollo, NestJS, GraphQL, Express, Node
            </li>
            <li>
            Rhythm of the apprenticeship: 1 week at school / 2 weeks at the company 
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <a href="https://expatfacilities.co/"><span className="font-bold italic">EXPAT FACILITIES</span></a>
            <span className="px-2">|</span>Rouen, France
          </p>
          <p className="py-1 italic">
            Web Developer - Apprenticeship (August 2021 - August 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Tech stack : MongoDB, Apollo, Next, GraphQL, Express, Node
            </li>
            <li>
            Rhythm of the apprenticeship: 1 week at school / 2 weeks at the company 
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
          <a href="https://rouen-informatique.com/"><span className="font-bold italic">ROUEN INFORMATIQUE</span></a>
            <span className="px-2">|</span>Rouen, France
          </p>
          <p className="py-1 italic">
            Web Developer - Internship (April 2021 - June 2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Designed internal digital tools related to the CRM of the company at the request of the internship supervisor and in compliance with the deadlines.
            </li>
            <li>
            Analysed the needs and developed all the technical functionalities of these tools.
            </li>
            <li>
            Solved the problems and fixed the bugs detected by the internship supervisor.
            </li>
            <li>
            Languages: HTML,CSS,PHP,SQL,JS
            </li>
            <li>
            Libraries: libcurl(PHP), jQuery
            </li>
            <li>
            APIs: Google Maps API (JavaScript), Axonaut API
            </li>
            <li>
            Framework: Bootstrap
            </li>
            <li>
            CMS: WordPress
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div> */}

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">QUICK</span>
            <span className="px-2">|</span>Rouen, France
          </p>
          <p className="py-1 italic">Cashier (June 2018 – August 2018)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            Prepared the ingredients and products in compliance with the standards in place (respect of the cold chain, hygiene standards etc.).
            </li>
            <li>
            Informed customers about the products, took orders and served at the counter and in the dining room.
            </li>
            <li>
            Handled transactions (cash and credit card) at the register and prepared the orders and trays.
            </li>
            <li>
            Cleaned and tidied up the equipment and the rooms (kitchen and dining room).
            {/* , handled waste management etc. */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
