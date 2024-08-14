import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Dashboard Section */}
      <div className="p-[4rem] h-[70vh] mb-[5rem]">
        <h1 className="text-black font-bold tracking-wide text-4xl">Dashboard</h1>
        <p className="text-gray-600 text-sm mt-4">
        ReFlow Technologies offers an advanced IoT dashboard that provides comprehensive real-time insights into your industrial processes. Our intuitive interface is designed to empower you with data-driven decision-making, enabling you to monitor key performance indicators, track efficiency, and optimize operations with ease.


        </p>
        <p className="text-gray-600 text-sm mt-4">
       {`With a focus on usability and functionality, our dashboard integrates seamlessly with your existing systems, offering customizable views and detailed analytics. Whether you’re tracking power consumption, monitoring environmental conditions, or analyzing production efficiency, ReFlow’s dashboard brings all the essential information to your fingertips.`}






        </p>
        <div className='flex justify-center h-[85%] w-full mt-7 '>
          <Image width={300} height={300} className='w-full max-w-4xl rounded-2xl' src="/newdash.png" alt="Dashboard Placeholder" />
        </div>
      </div>

      {/* AI Analytics Section */}
      <section id="services" className="w-full h-auto lg:h-[55vh] flex flex-col lg:flex-row bg-gray-100 items-center justify-between">
        <div className="flex flex-col h-full w-full lg:w-[45%] text-black m-7 ml-9 p-8">
          <h1 className="text-2xl lg:text-4xl font-semibold">AI Analytics</h1>
          <p className="text-gray-600 text-sm mt-5  lg:text-sm w-full lg:w-[90%]">
          Transform your operations with advanced AI tools that convert complex data into actionable insights. Optimize processes, reduce waste, and boost productivity with predictive analytics and AI-driven recommendations tailored to your industry. Achieve greater accuracy and efficiency, ensuring smooth and profitable operations.
          </p>
          <p className="text-gray-600 text-sm my-5    lg:text-sm w-full lg:w-[90%]">
          Leverage cutting-edge machine learning to gain deep insights into operational trends and equipment performance. Proactively address issues, streamline workflows, and enhance decision-making to drive efficiency and profitability in your operations.
          </p>
          
          <div className="flex items-center h-[30%] ">
            <Link
              href="/login"
              className="text-sm bg-black text-white border border-black hover:bg-white hover:text-black py-2 px-2 rounded-3xl"
            >{`Login to view Dashboard`}</Link>
          
        </div>
          
        </div>
        <div className="h-[50%] lg:h-[50%] rounded-3xl mx-8 mr-[2rem] lg:mr-[5rem] w-full lg:w-[35%]">
          <Image  width={400} height={300} src="/graph.png" alt="graph" />
        </div>
      </section>

     
    </div>
  );
};

export default LandingPage;
