import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "One cannot think well, love well, sleep well, if one has not dined well." <br /> <span>― Tasty Talk@gopal</span>
        </h4>
      </div>
      <div className="about-right">
        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
