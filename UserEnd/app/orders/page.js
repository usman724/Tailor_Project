"use client"
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Pending from './pending/page';
import Completed from './completed/page';
import History from './history/page';
import {
    FaClipboardList,
    FaCheckCircle,
    FaHistory,
  } from 'react-icons/fa';

function Page() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="m-4 ">
                <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect} className="w-full">
            
                <TabList className="flex justify-center">
                    <Tab className="flex-grow bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
                        <div className="flex items-center">
                        <FaClipboardList className="w-5 h-5 mr-2" />
                        <button className="w-full h-full">
                            Pending
                        </button>
                        </div>
                    </Tab>
                    <Tab className="flex-grow bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
                        <div className="flex items-center">
                        <FaCheckCircle className="w-5 h-5 mr-2" />
                        <button className="w-full h-full">
                            Completed
                        </button>
                        </div>
                    </Tab>
                    <Tab className="flex-grow bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
                        <div className="flex items-center">
                        <FaHistory className="w-5 h-5 mr-2" />
                        <button className="w-full h-full">
                            History
                        </button>
                        </div>
                    </Tab>
                    </TabList>
                <TabPanel className="mt-4">
                    <Pending/>
                </TabPanel>
                <TabPanel className="mt-4">
                        <Completed/>

                </TabPanel>
                <TabPanel className="mt-4">
                        <History/>
                </TabPanel>
      </Tabs>
    </div>
  );
}

export default Page;
