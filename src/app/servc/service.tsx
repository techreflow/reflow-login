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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='flex justify-center h-[85%] w-full mt-7 '>
          <Image width={300} height={300} className='w-full max-w-4xl rounded-2xl' src="/dashbd.png" alt="Dashboard Placeholder" />
        </div>
      </div>

      {/* AI Analytics Section */}
      <section id="services" className="w-full h-auto lg:h-[55vh] flex flex-col lg:flex-row bg-gray-100 items-center justify-between">
        <div className="flex flex-col h-full w-full lg:w-[45%] text-black m-7 ml-9 p-8">
          <h1 className="text-2xl lg:text-4xl font-semibold">AI Analytics</h1>
          <p className="text-gray-600 text-sm mt-5  lg:text-sm w-full lg:w-[90%]">
            Use data to increase yield, make production faster, and cheaper with fewer resources than ever before. ReFlowMetrics -- Capture and analyse real-time data from your production to deliver actionable insights to drive the decisions that matter.
          </p>
          <p className="text-gray-600 text-sm my-5    lg:text-sm w-full lg:w-[90%]">
            No expensive integrators, no custom development, no physical configuration. Finally, the production monitoring and analytics platform you deserve.
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
