const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Raheel nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              In the realm of code, my passion unfolds, crafting elegant
              solutions in a digital dance. Lines of logic intertwine, a
              symphony of algorithms taking form. Bugs become puzzles, and every
              keystroke is a brushstroke on the canvas of innovation. In the
              world of software development, my heart beats in the rhythm of
              endless possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
