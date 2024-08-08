import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col items-center bg-white min-h-[100vh]">
      <section className="w-full min-h-[35rem] flex flex-col lg:flex-row items-center justify-between bg-gray-200 p-8">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="flex flex-col items-start lg:w-1/2 p-4">
            <div className="flex flex-col justify-start h-full">
              <h1 className="text-2xl lg:text-4xl text-black font-semibold">About Us</h1>
              <p className="text-gray-600 my-5 leading-6 lg:leading-8 text-base lg:text-lg">
              ReFlow Technologies is a leading provider of Industrial IoT solutions that help industries optimize their operations and reduce costs. Our cutting-edge products and services are designed to enhance efficiency, safety, and sustainability across various sectors.


              </p>
            </div>
            <Link href={"/contact"} className="bg-black border hover:bg-white hover:text-black hover:border-black text-white py-2 px-4 rounded-full">Contact Us</Link>
          </div>
          <div className="h-full w-full p-[5rem] flex justify-end">
            <div className=" bg-cover  bg-center h-[40%] lg:h-96 w-full lg:w-[60%] rounded-3xl mt-8 lg:mt-0">
            <img src="/lname.png" alt="About Us"  className="rounded-3xl h-full w-full bg-center" />
            </div>
          </div>
        </div>
      </section>
      
      <section id="aboutus" className="w-full h-auto lg:h-[auto] flex flex-col lg:flex-row bg-white items-center justify-between">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="bg-[url('/founder13.jpeg')] bg-cover bg-center h-48 w-48 lg:h-64 lg:w-64 rounded-3xl"></div>
              <p className="mt-4 text-xl font-semibold text-gray-700">Rajkumar</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[url('/founder13.jpeg')] bg-cover bg-center h-48 w-48 lg:h-64 lg:w-64 rounded-3xl"></div>
              <p className="mt-4  text-xl font-semibold text-gray-700">Chakreesh</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-full w-full lg:w-1/2 text-black p-8 lg:p-16">
          <h1 className="text-2xl lg:text-4xl font-semibold">Our Founders</h1>
         <h3 className="text-xl lg:text-2xl mt-3">Rajkumar</h3>
         <p className="text-slate-500">CE0 and founder</p>

          <p className="text-gray-600 my-2 leading-6 lg:leading-7 text-base lg:text-lg">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error sequi nihil aspernatur repellat quod consequuntur cupiditate, laborum autem ad impedit, sed nam ea quidem numquam explicabo adipisci a cum.
          </p>
          <h3 className="text-xl lg:text-2xl mt-3">Chakreesh</h3>
          <p className="text-gray-500">CT0 and co-founder</p>
          <p className="text-gray-600 my-2 leading-6 lg:leading-7 text-base lg:text-lg">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ad. Maxime veritatis dolores illo vero deleniti. Esse facilis eius nam nobis? Mollitia at dicta, error facere accusamus harum a veniam!
          </p>
          
          
        </div>
      </section>
    </div>
  );
}

export default About;
