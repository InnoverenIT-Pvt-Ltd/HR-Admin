import React, { Component } from "react";
import { ActionHeader } from "../../../Components/Utils";
  import DashboardActionLeft from "./DashboardActionLeft";
 import DashboardActionRight from "./DashboardActionRight";
class DashboardHeader extends Component {
  render() {
    return (
      <div>
        <ActionHeader
           leftComponent={<DashboardActionLeft />}
          rightComponent={<DashboardActionRight />}
        />
      </div>
    );
  }
}

export default DashboardHeader;
