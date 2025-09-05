import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "MentoraX",
    description:
      "MentoraX- A career guidance website for student get confused after higher secondary and secondary school due to lots of pressure.",
      src:"rock.jpg",
    link: "https://static.vecteezy.com/system/resources/thumbnails/021/553/381/small_2x/making-a-decision-for-career-path-career-guidance-and-development-businessman-standing-at-road-direction-signs-determination-to-pick-the-right-choice-in-career-vector.jpg",
    color: "#6607daff",
    githubLink: "https://github.com/ashutosh936/mentoraX",
    liveLink: "https://mentorax.netlify.app/#contact",
  },
  {
    title: "Social Media PLatform",
    description:
      "A random pages with multiple functionalities with perfect responsiveness.",
    src: "rock.jpg",
    link: "https://randyseaver.com/wp-content/uploads/2013/09/social_media.jpg",
    color: "#03d4c2ff",
    githubLink: "https://github.com/ashutosh936/SCT_WD_01",
    liveLink: "https://scwd01landinpage.netlify.app/",
  },
  
  {
    title: "Movie Search App",
    description:
      "Site search movie across globe using Api which used for movie search",
    src: "rock.jpg",
    link:"data:image/jpeg;base64,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",
    color: "#428ffbff",
    githubLink: "https://github.com/ashutosh936/MovieSearch__BYapi_37",
    liveLink: "https://moviesearch37.netlify.app/",
  },
  {
    title: "Joke Generator App",
    description:
      "Built a fun web app that fetches random jokes from the Official Joke API and displays them dynamically using JavaScript, with a clean and responsive UI.",
    src: "rock.jpg",
    link: "https://www.creativehatti.com/wp-content/uploads/edd/2023/11/Indian-woman-character-laughing-on-funny-jokes-Large.jpg",
    color: "#4cbcdbff",
    githubLink: "https://github.com/ashutosh936/Jokesgeb_37",
    liveLink: "https://joke37.netlify.app/",
  },
  {
    title: "Github Profile Viewer by API",
    description:
      "The GitHub Profile Viewer is a web app that allows users to search for any GitHub username and instantly view profile details. It fetches live data from the GitHub REST API and displays information such as profile picture, bio, repositories, followers, and more.",
    src: "rock.jpg",
    link: "https://www.scaler.com/topics/images/github-logo.webp",
    color: "#f3b226ff",
    githubLink: "https://github.com/ashutosh936/Jokesgeb_37",
    liveLink: "https://githubuserfind37.netlify.app/",
  },
  {
    title: "Cyber Nexus",
    description:
      "Develope a first Higly animinated and responsive site.",
    src: "rock.jpg",
    link:"https://flat-icons.com/wp-content/uploads/2022/07/Weather-Icon-Set-Featured-Image.png",
    color: "#f6f9feff",
    githubLink: "https://github.com/ashutosh936/Holoweb",
    liveLink: "https://holoui.netlify.app/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
