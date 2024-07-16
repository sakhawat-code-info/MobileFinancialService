import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AgentPage = () => {
  return (
    <div className="mt-10">
      <div className="mb-10 flex items-center justify-center text-4xl">
        <h1>Agent</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Transaction Management</Tab>
          <Tab>Balance Inquiry</Tab>
          <Tab>Transactions History</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AgentPage;
