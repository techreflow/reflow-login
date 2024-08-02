import Link from "next/link";
import ProductImageSwitcher from "../components/ui/ProductImageSwitcher"

const Products: React.FC = () => {
  return (
    <section
      id="products"
      className="flex flex-col lg:flex-row h-auto lg:h-[48vh] ml-4 w-full lg:w-[100vw] justify-around bg-white"
    >
      <ProductImageSwitcher />
      <div className="flex flex-col h-full w-full lg:w-[55%] text-black mb-4 p-8">
        <h1 className="text-2xl lg:text-4xl font-semibold">Our Product</h1>
        <p className="text-gray-600 my-5 leading-[1.25rem] lg:leading-[1.5rem] text-base lg:text-lg w-full lg:w-[80%]">
          {`The Alpha X package offers a comprehensive solution designed to enhance operational efficiency and data management for industrial processes. It includes a powerful device with 90 days of free software, AI-generated reports on demand, monthly reports, and three months of secure data storage, enabling continuous improvement and efficiency.`}
        </p>
        <div className="flex items-center h-[30%] mx-4">
          <Link
            href="/#products"
            className="text-sm bg-white text-black border border-black hover:bg-black hover:text-white py-2 px-2 rounded-3xl"
          >{`view more >`}</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;