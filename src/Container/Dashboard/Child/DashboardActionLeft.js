import React, { useEffect } from "react";
// import { ActionIcon } from "../../../Components/Utils";
import { FlexContainer } from "../../../Components/UI/Layout";
import { StyledSelect, StyledRangePicker } from "../../../Components/UI/Antd";
// import { TimeInterval } from "../../../Utils";
import dayjs from "dayjs";
import { FormattedMessage } from "react-intl";
// import {
 
//   setDashboardViewType,
// } from "../DashboardAction";
import { Button, Icon, Tooltip,Badge } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { Input,Tag } from "antd";
//import { dashboardReducer } from "../DashboardReducer";
import { BundleLoader } from "../../../Components/Placeholder";

const Option = StyledSelect.Option;
const { Search } = Input;
const DashboardActionLeft = (props) => {
  const dummy = ["cloud", "azure", "fgfdg"];
//   const {
//     viewType,
//     setDashboardViewType,
//     user,
//     role
//   } = props;
 
  return (
    <FlexContainer alignItems="center">
         {/* { user.department=== "Management" && (  
            <>
         
            
            
            
              <Tag
                color={viewType === "ME" ? "#FFA500" : "orange"}
                style={{
                  cursor: "pointer",                  
                  fontWeight: viewType === "ME" ? "bold" : null,
                  textAlign: "center",
                  borderColor: "orange",
                }}
                onClick={() => setDashboardViewType("ME")}
              >
                
                
                <FormattedMessage
                  id="app.myview"
                  defaultMessage="My View"
                />
                
              </Tag>
           
             
             
            
              <Tag
                color={viewType === "ALL" ? "#FFA500" : "orange"}
                style={{
                  cursor: "pointer",                  
                  fontWeight: viewType === "ALL" ? "#FFA500" : "orange",
                  textAlign: "center",
                  borderColor: "orange",
                }}
               onClick={() => setDashboardViewType("ALL")}
              >
                <FormattedMessage
                  id="app.organization"
                  defaultMessage="Organization"
                />
              </Tag>
            
          
           
            </>
             )} */}

            
         
           
    </FlexContainer>
  );
};
const mapStateToProps = ({ account,report, auth,opportunity,dashboard }) => ({
// reportViewType: report.reportViewType,
// viewType:dashboard.viewType,
// user: auth.userDetails,
// role: auth.userDetails.role,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    // setReportViewType,
    // setDashboardViewType
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashboardActionLeft)
);
