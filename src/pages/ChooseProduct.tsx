import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserSelections from "../context/UserSelections";

interface IProducts {
  amount: number;
  id: number;
  image: string;
  name: string;
}

const ChooseProduct = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProducts[] | undefined>();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const selections = useContext(UserSelections);

  useEffect(() => {
    if (selections.platform === "") {
      navigate("/new-campaign");
    } else {
      getProducts();
    }
  }, []);

  async function getProducts() {
    setLoading(true);
    const { data: productsData } = await axios.get(
      "https://zocket-api.vercel.app/api/products",
    );
    setProducts(productsData);
    setLoading(false);
  }

  function changeSelected(index: number) {
    if (index === selectedProduct) {
      setSelectedProduct(null);
      selections.name = "";
      selections.image = "";
    } else {
      setSelectedProduct(index);
      selections.name = products![index].name;
      selections.image = products![index].image;
    }
  }

  return (
    <div className="mx-12 mt-8 mb-2">
      <div>
        <h1 className="font-bold text-2xl mb-2">Your Ad Campaign</h1>
        <h3 className="text-black text-opacity-50">
          Launch your ad in just 4 easy steps
        </h3>
      </div>

      <div className="mt-10 relative w-full">
        <div className="mt-8 px-16 absolute h-[3px] right-[1%] top-[36%] w-[95%] md:w-full">
          <div className="ml-16 absolute bg-indigo-50 h-[3px] inset-[0] justify-center m-auto w-[95%]" />
          <div
            style={{
              boxShadow: "0px 0px 5px 0px #FFD7A6",
            }}
            className={`ml-16 absolute bg-[#FFB963] h-[3px] inset-y-[0] left-[0] my-auto shadow-bs w-[53%] rounded-l`}
          />
        </div>

        <div className="absolute flex justify-between w-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent-secondary border-4 border-white p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/lamp-charge.svg" />
            </div>
            <p className="font-medium mt-1">What you want to do</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent-secondary border-4 border-white p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/bag-white.svg" />
            </div>
            <p className="font-medium mt-1">Choose product</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-background-darker border-4 border-background p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/appointments.svg" />
            </div>
            <p className="text-black text-opacity-50 mt-1">Campaign settings</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-background-darker border-4 border-background p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/tick-circle.svg" />
            </div>
            <p className="text-black text-opacity-50 mt-1">Ready to go</p>
          </div>
        </div>
      </div>

      <div className="mt-44 bg-white border border-borders rounded-lg p-8">
        <div className="w-full border-b-2 border-borders-grayBright pb-2">
          <h3 className="text-lg font-bold">
            Choose the product
            <span className="ml-2 text-base font-normal text-black text-opacity-50">
              (Step 2 of 4)
            </span>
          </h3>
        </div>

        {!loading && products ? (
          <div className="gap-3 grid grid-cols-3 justify-center min-h-[auto] mt-5 w-full select-none">
            {products.map((product, index) => (
              <div
                key={product.name + product.id}
                onClick={() => changeSelected(index)}
                className={`relative flex justify-between items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  selectedProduct === index
                    ? "border-2 border-accent bg-[#E7F0FF] bg-opacity-30"
                    : "border border-borders-gray"
                }`}
              >
                <div className="flex gap-3 items-center">
                  <img
                    className="w-16 h-16 object-cover rounded-lg"
                    src={product.image}
                  />
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-black text-opacity-40 text-sm">
                      Rs: {product.amount}
                    </p>
                  </div>
                </div>
                <img
                  src={
                    selectedProduct === index
                      ? "/icons/new-campaign/tick.svg"
                      : "/icons/new-campaign/tick-hollow.svg"
                  }
                  className={`object-cover ${
                    selectedProduct === index ? "w-6 h-6" : "w-5 h-5"
                  }`}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="w-full flex justify-end my-5 mb-10">
        <Link
          to="/campaign-settings"
          className={`px-20 py-3 bg-accent rounded-lg text-white font-medium ${
            selectedProduct === null
              ? "pointer-events-none bg-opacity-70 text-opacity-70"
              : ""
          }`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default ChooseProduct;
