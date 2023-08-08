import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                My name is Abdulmajeed Taboo, nice to meet you. 
                Please take a look around.
              </p>
            </div>
            <div>
              <p>
                {" "} 
                I am currently studying at the University of Illinois at Chicago and getting certificates from bootcamps and courses along the way. I am majoring in Computer science 
                and so far I have 2 years of experience in tech. From my experience I've learned that as much as you can love coding, you have to understand that successful software engineering is a collaborative 
                effort. I have learned to thrive in team environments where diverse perspectives come together solve a problem. I am constantly getting better at communicating and contributing to a team culture.
                I believe this will help not only me in the long run but the company and people i am contributing to. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;