import React from 'react';

const About = () => {
  return (
    <div className="about-container bg-gradient-to-br from-yellow-400 via-500 to-pink-500 py-8 px-4 sm:px-6 lg:px-8 flex flex-col my-3 ml-6 mr-4 lg:flex-row items-center justify-between">
      <div className="about-left lg:w-1/2 lg:mr-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Welcome to <br /> The World of <br /> <span className="text-yellow-200">Tasty & Fresh Food</span>
        </h1>
        <h4 className="text-lg text-white mb-8">
          "One cannot think well, love well, sleep well, if one has not dined well." <br /> <span className="font-semibold">― Tasty Talk@gopal</span>
        </h4>
      </div>
      <div className="about-right lg:w-1/2">
        <img className="rounded-lg shadow-xl" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
