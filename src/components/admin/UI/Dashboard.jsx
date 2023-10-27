import AppHeader from './AppHeader';
import PropTypes from 'prop-types';
import AppSidebar from './AppSidebar';
import { useState } from 'react';

const Dashboard = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div className="dashboard-container">
      <AppHeader toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'page-wrapper sidebar-open' : 'page-wrapper'}>
        {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        <AppSidebar />
        <main className="page-inner">{props.children}</main>
      </div>
    </div>
  );
};

// prop validation
Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;
