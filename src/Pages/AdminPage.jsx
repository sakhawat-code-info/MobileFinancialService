import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AdminPage = () => {
  return (
    <div className="mt-10">
      <div className="mb-10 flex items-center justify-center text-4xl">
        <h1>Admin</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>User Management</Tab>
          <Tab>System Monitoring</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminPage;
