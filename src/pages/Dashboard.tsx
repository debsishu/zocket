import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/dashboard/Dropdown";
import TableHead from "../components/dashboard/TableHead";
import StatusButton from "../components/dashboard/StatusButton";
import PlatformInfo from "../components/dashboard/PlatformInfo";
import { Constants } from "../util/constants";
import axios from "axios";
import moment from "moment";
import { Switch } from "antd";

export interface ICampaignInfo {
  id: number;
  isEnabled: boolean;
  image: string;
  name: string;
  createdOn: string;
  startDate: string;
  endDate: string;
  clicks: number;
  budget: number;
  location: string;
  platform: string;
  status: string;
}

const Dashboard = () => {
  const [searchCampaign, setSearchCampaign] = useState<string>();
  const [platform, setPlatform] = useState("All Platform");
  const [status, setStatus] = useState("All Status");
  const [time, setTime] = useState("Last 30 days");
  const [campaignData, setCampaignData] = useState<
    ICampaignInfo[] | undefined
  >();
  const [originalCampaignData, setOriginalCampaignData] = useState<
    ICampaignInfo[] | undefined
  >();
  const [campaignLoading, setCampaignLoading] = useState(true);

  useEffect(() => {
    getUserCampaigns();
  }, []);

  async function getUserCampaigns() {
    setCampaignLoading(true);
    const { data } = await axios.get(
      "https://zocket-api.vercel.app/api/your-campaigns",
    );
    setCampaignData(data);
    setOriginalCampaignData(data);
    setCampaignLoading(false);
  }

  async function handleDelete(index: number) {
    const newArray = [
      ...campaignData!.slice(0, index),
      ...campaignData!.slice(index + 1),
    ];
    setCampaignData(newArray);
    await axios.delete(`https://zocket-api.vercel.app/api/campaign/${index}`);
  }

  async function handleSwitch(index: number) {
    if (campaignData) {
      const newArray: ICampaignInfo[] = [...campaignData];
      newArray[index].isEnabled = !newArray[index].isEnabled;
      if (newArray[index].isEnabled) {
        newArray[index].status = "Live Now";
      } else {
        newArray[index].status = "Paused";
      }
      setCampaignData(newArray);
      await axios.patch(`https://zocket-api.vercel.app/api/campaign/${index}`);
    }
  }

  return (
    <div className="mx-12 mt-8 mb-2">
      {/* CALL TO ACTIONS */}
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="font-bold text-2xl mb-2">Your Campaigns</h1>
          <h2 className="text-black text-opacity-50">
            Check the list of campaigns you created
          </h2>
        </div>
        <Link
          to="/new-campaign"
          className="flex items-center gap-2 bg-accent rounded-lg px-4 py-3 self-end"
        >
          <img src="/icons/dashboard/add-circle.svg" />
          <h2 className="text-white font-medium">Create new campaign</h2>
        </Link>
      </div>

      <div className="bg-background-brightest border border-borders rounded-lg px-8 py-6">
        {/* TABLE DROPDOWNS */}
        <div className="flex items-center justify-between">
          <div className="flex border-2 border-borders-gray gap-2 items-center p-3 rounded-lg">
            <img src="/icons/dashboard/search.svg" />
            <input
              className="font-medium text-base border-none outline-none placeholder-black placeholder-opacity-40"
              value={searchCampaign === undefined ? "" : searchCampaign}
              onChange={(e) => {
                if (e.target.value === "") {
                  setCampaignData(originalCampaignData);
                } else {
                  const filteredCampaigns = originalCampaignData!.filter(
                    (campaign) =>
                      campaign.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()),
                  );
                  setCampaignData(filteredCampaigns);
                }
                return setSearchCampaign(e.target.value);
              }}
              placeholder="Search for the campaign"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-black text-opacity-50">Platform:</p>
              <Dropdown
                current={platform}
                setCurrent={setPlatform}
                setCampaignData={setCampaignData}
                originalCampaignData={originalCampaignData}
                options={Constants.platformOptions}
                parameter={"platform"}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-black text-opacity-50">Status:</p>
              <Dropdown
                current={status}
                setCurrent={setStatus}
                setCampaignData={setCampaignData}
                originalCampaignData={originalCampaignData}
                options={Constants.statusOptions}
                parameter={"status"}
              />
            </div>
            <Dropdown
              current={time}
              setCurrent={setTime}
              options={Constants.timeOptions}
              setCampaignData={setCampaignData}
              originalCampaignData={originalCampaignData}
              parameter={"time"}
            />
          </div>
        </div>

        {/* ACTUAL TABLE */}
        <table className="w-full table-auto mt-4 text-center">
          <TableHead />
          {campaignLoading && <p>Loading...</p>}
          <tbody className="text-sm">
            {!campaignLoading &&
              campaignData &&
              campaignData.map((campaign, index) => (
                <tr
                  key={campaign.id}
                  className="border-b border-borders-grayBright"
                >
                  <td>
                    <p className="font-medium text-sm text-black text-opacity-50">
                      <input
                        type="checkbox"
                        value=""
                        className="w-3.5 h-3.5 text-accent bg-gray-100 border-borders-grayBright rounded"
                      />
                    </p>
                  </td>
                  <td>
                    <Switch
                      defaultChecked={campaign.isEnabled}
                      size="small"
                      disabled={campaign.status === "Exhausted"}
                      className="bg-black bg-opacity-30"
                      onChange={() => handleSwitch(index)}
                    />
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="w-16 h-14 m-2">
                        <img
                          className="w-full h-full object-cover rounded-md"
                          src={campaign.image}
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{campaign.name}</p>
                        <p className="text-black text-opacity-50 text-sm">
                          Created on{" "}
                          {moment.utc(campaign.createdOn).format("MMM D")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    {moment.utc(campaign.startDate).format("DD MMM YYYY")}-
                    {moment.utc(campaign.endDate).format("DD MMM YYYY")}
                  </td>
                  <td>{campaign.clicks}</td>
                  <td>INR {campaign.budget}</td>
                  <td>{campaign.location}</td>
                  <td>
                    <div className="w-full flex items-center">
                      <PlatformInfo platform={campaign.platform} />
                    </div>
                  </td>
                  <td>
                    <StatusButton name={campaign.status} />
                  </td>
                  <td>
                    <div className="flex items-center justify-between mx-5">
                      <button>
                        <img src="/icons/dashboard/edit.svg" />
                      </button>
                      <button onClick={() => handleDelete(index)}>
                        <img src="/icons/dashboard/trash.svg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
