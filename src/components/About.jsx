import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a React Developer with 1.9 Years of experience, I have a strong passion for creating dynamic and responsive web applications. I specialize in using ReactJS, Redux, and other modern web technologies to build scalable and efficient applications. My expertise also includes working with RESTful APIs, HTML5, CSS3, and JavaScript.
        </p>

        <br />

        <p className="text-xl">
        Throughout my career, I have developed a keen eye for detail and have been successful in delivering high-quality software within tight deadlines. I am also a strong believer in agile methodologies and have experience working in cross-functional teams to deliver results. My excellent communication and problem-solving skills have enabled me to work collaboratively with designers, product owners, and QA teams to create innovative and user-friendly applications.
        </p>
      </div>
    </div>
  );
};

export default About;
