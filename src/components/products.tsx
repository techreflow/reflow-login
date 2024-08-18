import Link from "next/link";
import ProductImageSwitcher from "../components/ui/ProductImageSwitcher"

const Products: React.FC = () => {
  return (
    <section
      id="products"
      className="flex flex-col lg:flex-row h-auto lg:h-[610px] ml-4 w-full lg:w-[100vw] justify-around bg-white"
    >
      <ProductImageSwitcher />
      <div className="flex flex-col h-full w-full lg:w-[55%] text-black mb-4 p-8">
        <h1 className="text-2xl lg:text-4xl font-semibold">Our Product</h1>
        <p className="text-gray-600 my-5 leading-[1.25rem] lg:leading-[1.5rem] text-base lg:text-lg w-full lg:w-[80%]">
          {`The Alpha X package offers a comprehensive solution designed to enhance operational efficiency and data management for industrial processes. It includes a powerful device with 90 days of free software, AI-generated reports on demand, monthly reports, and three months of secure data storage, enabling continuous improvement and efficiency. 
          
          `}
        </p>
        <p className="text-gray-600 my-5 leading-[1.25rem] lg:leading-[1.5rem] text-base lg:text-lg w-full lg:w-[80%]">
          {`The cornerstone of any factory's digital transformation begins with automated capture, transformation and interpretation of process data. ALPHA - X Series provides a scalable solution for chemical and manufacturing industries that can be self-installed to easily collect data from any piece of equipment and enable actionable machine insights in a matter of minutes.
          
          `}
        </p>
        <div className="flex items-center h-[30%]">
          <Link
            href="/servc"
            className="text-sm bg-white text-black border border-black hover:bg-black hover:text-white py-3 px-7  rounded-3xl"
          >{`View More`} </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
