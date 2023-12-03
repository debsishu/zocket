import { DatePicker, Slider } from "antd";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSelections from "../context/UserSelections";

const CampaignSettings = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("Location");
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [campaignBudget, setCampaignBudget] = useState<number | undefined>(
    3000,
  );
  const [location, setLocation] = useState<string | undefined>();
  const [radius, setRadius] = useState<number | undefined>(20);

  const selections = useContext(UserSelections);

  useEffect(() => {
    if (selections.image === "" || selections.name === "") {
      navigate("/new-campaign");
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const disabledDate = (current: any) => {
    return current && current < moment().startOf("day");
  };

  function moveToNextStep() {
    if (startDate && endDate && campaignBudget && location) {
      selections.startDate = startDate;
      selections.endDate = endDate;
      selections.budget = campaignBudget.toString();
      selections.location = location;
      selections.createdOn = new Date().toISOString();
      navigate("/ready-to-go");
    }
  }

  function canNextStep() {
    if (selected === "Radius") {
      return startDate && endDate && campaignBudget && location && radius;
    } else {
      return startDate && endDate && campaignBudget && location;
    }
  }

  return (
    <div className="mx-12 mt-8 mb-8">
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
            className={`ml-16 absolute bg-[#FFB963] h-[3px] inset-y-[0] left-[0] my-auto shadow-bs w-[83%] rounded-l`}
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
            <div className="w-16 h-16 rounded-full bg-accent-secondary border-4 border-background p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/appointments-white.svg" />
            </div>
            <p className="font-medium mt-1">Campaign settings</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-background-darker border-4 border-background p-1 flex justify-center items-center">
              <img src="/icons/new-campaign/tick-circle.svg" />
            </div>
            <p className="text-black text-opacity-50 mt-1">Ready to go</p>
          </div>
        </div>
      </div>

      <div className="mt-44 flex justify-between items-end gap-16">
        <div className="bg-white border border-borders rounded-lg p-8 w-full">
          <div className="w-full border-b-2 border-borders-grayBright pb-2">
            <h3 className="text-lg font-bold">
              Campaign Settings
              <span className="ml-2 text-base font-normal text-black text-opacity-50">
                (Step 3 of 4)
              </span>
            </h3>
          </div>

          <div>
            <div className="flex items-center gap-2 mt-6">
              <span className="text-xs font-medium p-1 px-2.5 bg-accent rounded-full no-underline text-white">
                1
              </span>{" "}
              <span className="underline font-medium underline-offset-4">
                Budget and dates info
              </span>
            </div>
            <div className="w-full ml-[0.7rem] pl-6 border-l-2 border-borders-gray py-4 pb-8 pr-3">
              <div className="flex justify-between gap-4">
                <div className="w-full">
                  <p className="text-xs font-medium text-black text-opacity-50 mb-2">
                    Start date
                  </p>
                  <DatePicker
                    style={{
                      width: "100%",
                    }}
                    disabledDate={disabledDate}
                    size="large"
                    placement="bottomLeft"
                    onChange={(date) => setStartDate(date?.toISOString())}
                  />
                </div>
                <div className="w-full">
                  <p className="text-xs font-medium text-black text-opacity-50 mb-2">
                    End date
                  </p>
                  <DatePicker
                    style={{
                      width: "100%",
                    }}
                    disabledDate={disabledDate}
                    size="large"
                    placement="bottomLeft"
                    onChange={(date) => setEndDate(date?.toISOString())}
                  />
                </div>
              </div>

              <div className="w-full mt-6">
                <div className="flex justify-between">
                  <p className="text-sm text-black text-opacity-60 font-medium">
                    Enter campaign budget
                  </p>
                  <div className="flex items-center gap-2">
                    <img src="/icons/dashboard/INR.svg" />
                    <p className="text-sm">INR</p>
                  </div>
                </div>
                <Slider
                  range
                  min={100}
                  max={10000}
                  defaultValue={[100, 3000]}
                  trackStyle={[{ background: "#0F6EFF" }]}
                  onChange={(range) => setCampaignBudget(range[1])}
                />
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-xs font-medium text-black text-opacity-50">
                  100
                </p>
                <p className="text-xs font-medium text-black text-opacity-50">
                  10000
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium p-1 px-2 bg-accent rounded-full no-underline text-white">
                  2
                </span>{" "}
                <span className="underline font-medium underline-offset-4">
                  Location info
                </span>
              </div>

              <div className="ml-9 my-5">
                <div>
                  <p className="text-sm text-black text-opacity-60 mb-2 font-medium">
                    Location type
                  </p>
                  <div className="inline-flex bg-borders-grayBright gap-6 rounded-full font-medium">
                    <button
                      className={
                        selected === "Location"
                          ? "px-8 py-2 bg-accent rounded-full text-white"
                          : "pl-8 py-2 text-black text-opacity-50"
                      }
                      onClick={() => setSelected("Location")}
                    >
                      Location
                    </button>
                    <button
                      className={
                        selected === "Radius"
                          ? "px-8 py-2 bg-accent rounded-full text-white"
                          : "pr-8 py-2 text-black text-opacity-50"
                      }
                      onClick={() => setSelected("Radius")}
                    >
                      Radius
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-black text-opacity-60 font-medium mb-2">
                    Select Location
                  </p>
                  <div className="w-full flex justify-between border border-borders-gray rounded-lg px-6 py-3 pr-3">
                    <input
                      className="w-full border-none outline-none"
                      placeholder="Enter the location"
                      value={location === undefined ? "" : location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <img src="/icons/dashboard/gps.svg" />
                  </div>
                </div>

                {selected === "Radius" && (
                  <div className="mt-6">
                    <p className="text-black text-opacity-60 text-sm font-medium">
                      Select target radius
                    </p>
                    <Slider
                      range
                      min={1}
                      max={30}
                      defaultValue={[1, 20]}
                      trackStyle={[{ background: "#0F6EFF" }]}
                      onChange={(range) => setRadius(range[1])}
                    />
                    <div className="flex justify-between mt-2">
                      <p className="text-xs font-medium text-black text-opacity-50">
                        1 KM
                      </p>
                      <p className="text-xs font-medium text-black text-opacity-50">
                        30 KM
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          className={`px-20 py-3 bg-accent rounded-lg text-white font-medium ${
            !canNextStep()
              ? "pointer-events-none bg-opacity-70 text-opacity-70"
              : ""
          }`}
          onClick={() => moveToNextStep()}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CampaignSettings;
