import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import MetaMask_Fox from "../assets/MetaMask_Fox.svg.png";
import solidity from "../assets/solidity_logo.svg";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <>
      <div
        name="skills"
        className="w-full h-screen bg-[#0a192f]  text-gray-300"
      >
        {/* container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="font-bold inline border-b-4 border-pink-600 text-4xl">
              Skills
            </p>
            <p className="py-4">
              //These are the technologies i've worked with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={html} alt="Html icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={css} alt="Html icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={javascript} alt="Html icon" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={react} alt="Html icon" />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={github} alt="Html icon" />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={tailwind} alt="Html icon" />
              <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={MetaMask_Fox}
                alt="Html icon"
              />
              <p className="my-4">METAMASK</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20  mx-auto" src={solidity} alt="Html icon" />
              <p className="my-4">SOLIDITY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
