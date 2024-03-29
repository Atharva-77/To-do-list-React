import React from "react";
import Button from "../Components/button/Button";
import LinkComponent from "../Components/link/Link";

const Dashboard = () => {
  return (
    <div>
      <LinkComponent path={`/add-employee`}>
          <Button label="Add Employee" type="button" className="buttonDashBoard"/>
      </LinkComponent>
  
      <LinkComponent path={`/view-employees`}>
        <Button label="View Employee" type="button" className="buttonDashBoard"/>
      </LinkComponent>
    </div>
  );
};

export default Dashboard;
