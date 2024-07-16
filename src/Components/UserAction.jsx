import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const UserAction = () => {
  return (
    <div className="mt-10">
      <div className="mb-10 flex items-center justify-center text-4xl">
        <h1>User</h1>
      </div>

      <Tabs>
        <TabList>
          <Tab>Send Money</Tab>
          <Tab>Cash Out</Tab>
          <Tab>Cash In</Tab>
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
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserAction;
