import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-16 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">About Me</h2>
        <p className="mb-8 text-justify">
          As a recent graduate with a passion for web development, I'm eager to launch my career as a full-stack developer. 
          I'm driven by a desire to contribute to high-quality software development and performance. 
          I thrive in collaborative environments and enjoy working as part of a team to achieve shared goals and deliver exceptional results. 
          I firmly believe that attention to detail and a focus on software quality are essential for project success, 
          and these principles guide my approach to development. While I'm just beginning my professional journey, 
          I'm a quick learner and excited to expand my skillset and contribute to innovative projects. 
          I'm looking for an opportunity to learn from experienced professionals and contribute to a dynamic team.
        </p>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Education</h2>
        <ul className="mb-8 space-y-3">
          <li className="flex items-center">
            <i className="fa-solid fa-school mr-2"></i> 
            <span>High School | <em>2020</em></span>
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-building-columns mr-2"></i> 
            <span>Jordan University of Science and Technology | <em>2020-2024</em></span>
          </li>
        </ul>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Certificates</h2>
        <ul className="mb-8 space-y-3">
          <li className="flex items-center">
            <i className="fa-solid fa-certificate mr-2"></i> 
            <span>Graphic Design in Adobe Illustrator | <em><strong><u>By AILIA PRESS</u></strong></em></span>
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-certificate mr-2"></i> 
            <span>QA Course | <em><strong><u>By The Hope International</u></strong></em></span>
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-certificate mr-2"></i> 
            <span>QA Advanced Course | <em><strong><u>By The Hope International</u></strong></em></span>
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-certificate mr-2"></i> 
            <span>Agile Course | <em><strong><u>By The Hope International</u></strong></em></span>
          </li>
        </ul>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Language</h2>
        <ul className="mb-8 space-y-3">
          <li className="flex items-center">
            <i className="fa-regular fa-comment mr-2"></i> 
            <span>Arabic | Native</span>
          </li>
          <li className="flex items-center">
            <i className="fa-regular fa-comment mr-2"></i> 
            <span>English | Excellent</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;