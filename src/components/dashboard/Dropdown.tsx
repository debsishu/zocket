import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ICampaignInfo } from "../../pages/Dashboard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface IDropDown {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  setCampaignData: React.Dispatch<
    React.SetStateAction<ICampaignInfo[] | undefined>
  >;
  originalCampaignData: ICampaignInfo[] | undefined;
  parameter: string;
}

export default function Dropdown({
  current,
  setCurrent,
  options,
  setCampaignData,
  originalCampaignData,
  parameter,
}: IDropDown) {
  function update(current: string) {
    if (parameter === "platform") {
      updatePlatform(current);
    } else if (parameter === "status") {
      updateStatus(current);
    } else {
      updateTime();
    }
  }

  function updatePlatform(current: string) {
    if (current === "All Platform") {
      setCampaignData(originalCampaignData);
    } else {
      const filteredCampaigns = originalCampaignData!.filter(
        (campaign) => campaign.platform.toLowerCase() === current.toLowerCase(),
      );
      setCampaignData(filteredCampaigns);
    }
  }

  function updateStatus(current: string) {
    if (current === "All Status") {
      setCampaignData(originalCampaignData);
    } else {
      const filteredCampaigns = originalCampaignData!.filter(
        (campaign) => campaign.status.toLowerCase() === current.toLowerCase(),
      );
      setCampaignData(filteredCampaigns);
    }
  }

  function updateTime() {}

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {current}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((e) => (
              <Menu.Item key={e}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer",
                    )}
                    onClick={() => {
                      update(e);
                      return setCurrent(e);
                    }}
                  >
                    {e}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
