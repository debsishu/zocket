import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AdCards from "../components/dashboard/AdCards";
import UserSelections from "../context/UserSelections";
import { useNavigate } from "react-router-dom";

export interface IAdModel {
  id: number;
  name: string;
  userImage: string;
  desc: string;
  productImage: string;
}

const ReadyToGo = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState<IAdModel[] | undefined>();
  const [selectedAd, setSelectedAd] = useState<number | null>(null);

  const selections = useContext(UserSelections);

  useEffect(() => {
    if (selections.startDate === "" || selections.endDate === "") {
      navigate("/new-campaign");
    } else {
      getAds();
    }
  }, []);

  async function getAds() {
    setLoading(true);
    const { data: fetchedAds } = await axios.get(
      "https://zocket-api.vercel.app/api/ready-to-go",
    );
    setAds(fetchedAds);
    setLoading(false);
  }

  function changeSelected(index: number) {
    if (index === selectedAd) {
      setSelectedAd(null);
    } else {
      setSelectedAd(index);
    }
  }

  async function handleSubmit() {
    await axios.post(
      "https://zocket-api.vercel.app/api/create-campaign",
      selections,
    );
    navigate("/");
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
            className={`ml-16 absolute bg-[#FFB963] h-[3px] inset-y-[0] left-[0] my-auto shadow-bs w-[95%] rounded-l`}
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
            <div className="w-16 h-16 rounded-full bg-accent-secondary border-4 border-white p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/appointments-white.svg" />
            </div>
            <p className="font-medium mt-1">Campaign settings</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent-secondary border-4 border-white p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/tick-circle-white.svg" />
            </div>
            <p className="font-medium mt-1">Ready to go</p>
          </div>
        </div>
      </div>

      <div className="mt-44 bg-white border border-borders rounded-lg p-8 py-6">
        <div className="w-full border-b-2 border-borders-grayBright pb-2">
          <h3 className="text-lg font-bold">
            Ready to go
            <span className="ml-2 text-base font-normal text-black text-opacity-50">
              (Step 4 of 4)
            </span>
          </h3>
        </div>
        {loading && <p>Loading...</p>}
        {!loading && ads && (
          <div className="gap-3 grid grid-cols-4 justify-center min-h-[auto] mt-5 w-full select-none">
            {ads.map((ad, index) => (
              <div
                key={ad.name + ad.id}
                onClick={() => changeSelected(index)}
                className={`relative p-4 rounded-lg cursor-pointer ${
                  selectedAd === index
                    ? "border-2 border-accent bg-[#E7F0FF] bg-opacity-30"
                    : "border border-borders-gray"
                }`}
              >
                <AdCards ad={ad} isSelected={selectedAd === index} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full flex justify-end my-5 mb-10">
        <button
          className={`px-20 py-3 bg-accent rounded-lg text-white font-medium ${
            selectedAd === null
              ? "pointer-events-none bg-opacity-70 text-opacity-70"
              : ""
          }`}
          onClick={() => handleSubmit()}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ReadyToGo;
