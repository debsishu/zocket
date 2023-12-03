import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-background-dark h-full items-center">
      <img className="w-10 object-cover my-10 mx-4" src="/logo.svg" />
      <div className="flex flex-col gap-6 items-center w-full">
        <Link to="/">
          <div className="flex flex-col items-center text-white gap-1">
            <img src="/icons/sidebar/home.svg" />
            <p className="text-[0.65rem] font-medium">Home</p>
          </div>
        </Link>
        <Link to="/">
          <div className="w-full flex">
            <div className="bg-accent px-0.5 rounded-r-sm"></div>
            <div className="p-3 bg-accent bg-opacity-10 flex flex-col items-center text-white gap-1">
              <img src="/icons/sidebar/campaign-fill.svg" />
              <p className="text-[0.65rem] font-medium">Campaign</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-col items-center text-white gap-1">
            <img src="/icons/sidebar/products.svg" />
            <p className="text-[0.65rem] font-medium">Products</p>
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-col items-center text-white gap-1">
            <img src="/icons/sidebar/customers.svg" />
            <p className="text-[0.65rem] font-medium">Customers</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
