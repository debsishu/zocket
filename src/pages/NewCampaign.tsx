import { useContext, useState } from "react";
import { Constants } from "../util/constants";
import { Link } from "react-router-dom";
import UserSelections from "../context/UserSelections";

const NewCampaign = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const selections = useContext(UserSelections);

  function changeSelected(index: number) {
    if (index === selected) {
      setSelected(null);
      selections.platform = "";
    } else {
      setSelected(index);
      selections.platform = Constants.campaignTypes[index].platform;
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
            className={`ml-16 absolute bg-[#FFB963] h-[3px] inset-y-[0] left-[0] my-auto shadow-bs w-[23%] rounded-l`}
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
            <div className="w-16 h-16 rounded-full bg-background-darker border-4 border-white p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/bag.svg" />
            </div>
            <p className="text-black text-opacity-50 mt-1">Choose product</p>
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
            What you want to do?
            <span className="ml-2 text-base font-normal text-black text-opacity-50">
              (Step 1 of 4)
            </span>
          </h3>
        </div>

        {/* CAMPAIGN CARDS */}
        <div className="gap-3 grid grid-cols-3 justify-center min-h-[auto] mt-5 w-full select-none">
          {Constants.campaignTypes.map((campaign, index) => (
            <div
              key={campaign.campaign_name + campaign.id}
              onClick={() => changeSelected(index)}
              className={`relative flex items-center gap-3 p-4 rounded-lg cursor-pointer ${
                selected === index
                  ? "border-2 border-accent bg-[#E7F0FF] bg-opacity-30"
                  : "border border-borders-gray"
              }`}
            >
              {/* TICK INDICATOR */}
              {selected === index && (
                <div className="w-full absolute flex justify-end mb-[4.8rem] pr-1">
                  <img
                    className="w-6 object-cover"
                    src="/icons/new-campaign/tick.svg"
                  />
                </div>
              )}
              <img
                className="w-6 object-cover"
                src={selected === index ? campaign.active_icon : campaign.icon}
              />
              <div>
                <h4 className="font-medium mb-1">{campaign.campaign_name}</h4>
                <p className="text-black text-opacity-40 text-sm">
                  {campaign.campaign_desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end my-5 mb-10">
        <Link
          to="/choose-product"
          className={`px-20 py-3 bg-accent rounded-lg text-white font-medium ${
            selected === null
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

export default NewCampaign;
