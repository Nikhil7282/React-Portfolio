import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import AnimatedLetters from "../components/animattedLetters/AnimatedLetters";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [letter, setLetter] = useState("text-animate");
  const navigate = useNavigate();
  const roleArray = [
    "I",
    "'",
    "m",
    " ",
    "a",
    " ",
    "P",
    "a",
    "s",
    "s",
    "i",
    "o",
    "n",
    "a",
    "t",
    "e",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    const setLetterAfterDelay = () => {
      const timeoutId = setTimeout(() => {
        setLetter("text-animate-hover");
      }, 4000);
      return timeoutId;
    };
    const timeoutId = setLetterAfterDelay();
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div name="home" className="w-full h-[calc(100vh-80px)] bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full xxs:gap-1">
        <p className="text-pink-600 text-2xl">
          <span className={letter}>H</span>
          <span className={`${letter} _12`}>i,</span>
          <span> </span>
          <span className={`${letter} _13`}>I&apos;</span>
          <span className={`${letter} _14`}>a</span>
          <span className={`${letter} _15`}>m</span>
        </p>
        <div className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          <AnimatedLetters
            letter={letter}
            strArray={["N", "i", "k", "h", "i", "l"]}
            idx={16}
          />
        </div>
        <div className="md:text-4xl sm:text-3xl xs:text-base xxs:text-md  font-bold text-[#8892b0] role-header">
          <AnimatedLetters letter={letter} strArray={roleArray} idx={16} />
        </div>
        <p className="text-[#8892b0] max-w-[750px]">
          🚀 Aspiring web Developer | Open to Contribute 🤝 | Passionate about
          Crafting Digital Experiences 🌐 | Open to Opportunities 🌟
        </p>
        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            onClick={() => navigate("/projects")}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-0" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
