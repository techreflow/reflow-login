import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <section className="w-full min-h-[35rem] flex flex-col lg:flex-row items-center justify-between bg-gray-200 p-8">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="flex flex-col items-start lg:w-1/2 p-4">
            <div className="flex flex-col justify-start h-full">
              <h1 className="text-2xl lg:text-4xl text-black font-semibold">About Us</h1>
              <p className="text-gray-600 my-5 leading-6 lg:leading-8 text-base lg:text-lg">
                ReFlow Technologies is a leading provider of Industrial IoT solutions that help industries optimize their operations and reduce costs. Our cutting-edge products and services are designed to enhance efficiency, safety, and sustainability across various sectors.
              </p>
            </div>
            <Link href="/contact">
              <p className="bg-black border hover:bg-white hover:text-black hover:border-black text-white py-2 px-4 rounded-full">
                Contact Us
              </p>
            </Link>
          </div>
          <div className="h-full w-full lg:w-1/2 p-8 flex justify-center lg:justify-end">
            <div className="bg-cover bg-center h-64 lg:h-96 w-full lg:w-[90%] rounded-3xl mt-8 lg:mt-0">
              <img src="/lname.png" alt="About Us" className="rounded-3xl h-full w-full bg-center object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      <section id="aboutus" className="w-full flex flex-col lg:flex-row bg-white items-center justify-between py-8 lg:py-20">
        <div className="relative h-64 lg:h-96 w-full lg:w-[50%] m-3 lg:m-8 rounded-3xl">
          <Image
            src="/lastimage.jpeg"
            alt="Founder Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        
        <div className="flex flex-col h-full w-full lg:w-[55%] text-black m-7 lg:ml-9 lg:mt-0 p-8">
          <h1 className="text-2xl lg:text-4xl font-semibold">About Us</h1>
          <p className="text-gray-600 my-5 leading-[1.25rem] lg:leading-[1.5rem] text-base lg:text-lg w-full lg:w-[80%]">
          In the age of Industry 4.0, staying ahead requires a competitive edge. Since our founding in 2022, We at
            ReFlow Technologies have been at the forefront of driving digital transformation in factories. We
            specialize in the automated capture, transformation, and contextualization of process data, empowering
            businesses to achieve zero downtime, zero resource wastage, and maximum efficiency. Our vision is a future
            where every factory operates at peak performance, setting new standards in operational excellence.
          </p>
          <div className="flex items-center">
            <Link href="/register">
              <p className="text-sm bg-black text-white border border-black hover:bg-white hover:text-black py-3 px-6 rounded-3xl">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
