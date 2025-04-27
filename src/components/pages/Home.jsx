import React from 'react';

const Home = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 text-center md:text-left md:pr-8 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Abdallah Salameh</h2>
            <h4 className="text-xl md:text-2xl font-bold mb-4">Full Stack Developer</h4>
            <p className="text-sm md:text-base">
              Hello, my name is Abdallah Samer Salameh, I studied Computer Information Systems (CIS) 
              and graduated from Jordan University of Science and Technology with a 3.9 GPA in late 2024.
            </p>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64">
              <img 
                src="src/assets/images/my_profile_picture.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;