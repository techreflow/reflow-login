import Link from "next/link";

function About() {
  return (
    <div className="flex flex-col items-center bg-white min-h-[100vh]">
      <section className="w-full min-h-[35rem] flex flex-col lg:flex-row items-center justify-between bg-gray-200 p-8">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="flex flex-col items-start lg:w-1/2 p-4">
            <div className="flex flex-col justify-start h-full">
              <h1 className="text-2xl lg:text-4xl text-black font-semibold">About Us</h1>
              <p className="text-gray-600 my-5 leading-6 lg:leading-8 text-base lg:text-lg">
                Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
              </p>
            </div>
            <Link href={"/contact"} className="bg-black text-white py-2 px-4 rounded-full">Contact Us</Link>
          </div>
          <div className="h-full w-full p-[5rem] flex justify-end">
            <div className="bg-[url('/placeholder.webp')] bg-cover bg-center h-64 lg:h-96 w-full lg:w-1/2 rounded-3xl mt-8 lg:mt-0"></div>
          </div>
        </div>
      </section>
      
      <section id="aboutus" className="w-full h-auto lg:h-[55vh] flex flex-col lg:flex-row bg-white items-center justify-between">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="bg-[url('/placeholder.webp')] bg-cover bg-center h-48 w-48 lg:h-64 lg:w-64 rounded-3xl"></div>
              <p className="mt-4 text-lg text-gray-700">Name 1</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[url('/placeholder.webp')] bg-cover bg-center h-48 w-48 lg:h-64 lg:w-64 rounded-3xl"></div>
              <p className="mt-4 text-lg text-gray-700">Name 2</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-full w-full lg:w-1/2 text-black p-8 lg:p-16">
          <h1 className="text-2xl lg:text-4xl font-semibold">Our Founders</h1>
          <p className="text-gray-600 my-5 leading-6 lg:leading-8 text-base lg:text-lg">
            ReFlow Technologies is a leading provider of Industrial IoT solutions that help industries optimize their operations and reduce costs. Our cutting-edge products and services are designed to enhance efficiency, safety, and sustainability across various sectors.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
