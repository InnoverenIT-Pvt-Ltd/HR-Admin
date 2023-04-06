import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, message, Tooltip, Popover, Icon } from "antd";
import { FormattedMessage } from "react-intl";
import { StyledModal, StyledTabs } from "../../../Components/UI/Antd";
import {
  FlexContainer,
  TabsWrapper,
} from "../../../Components/UI/Layout";
// import GroupsIcon from '@mui/icons-material/Groups';
// import DnsIcon from '@mui/icons-material/Dns';

// import { getTimeLineDataByOpportunityId } from "../../../OpportunityAction";
import { ActionIcon } from "../../../Components/Utils";
import { AddPopover } from "../../../Components/Common";
import DashboardTable from "../Child/DashboardTable";


// import { handleLinkPartnerModal } from "../../../../Partner/PartnerAction";
import { BundleLoader } from "../../../Components/Placeholder";

import { Breadcrumb, Alert } from "antd";



const TabPane = StyledTabs.TabPane;
function handleRefreshPage() {
  window.location.reload();
}
class DashboardDetailsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1",
      contactPopover: false,
      partnerPopover: false,
      quotProPopover: false,
      deliveryProPopover: false,
      breadCumb: false,
      visibleModal: false,
      recriutmentdashboard: false,
      currentTabName: "",
      currentTabId: "",
      customField: [],
      ganttChart: false,
      costId: "",
    };
  }

  handleContactPopoverVisibleChange = () =>
    this.setState({ contactPopover: !this.state.contactPopover });
  handlepartnerPopoverVisibleChange = () =>
    this.setState({ partnerPopover: !this.state.partnerPopover });
  handleTabChange = (key) => {
    this.setState({ activeKey: key });
    // if (key === "1") {
    //   this.props.getQuotation(this.props.opportunity.opportunityId);
    // }
  };
  render() {
    const { activeKey } = this.state;
    return (
      <>
        {/* <OpportunityStatsCard opportunity={opportunity} /> */}
        <TabsWrapper>
          <StyledTabs
            defaultActiveKey="1"
            onChange={this.handleTabChange}
            forceRender={true}
          >

          <TabPane
              tab={
                <>
                  {/* <DnsIcon 
                  // icon={solid('bars-progress')} 
                  /> */}
                    <span style={{ marginLeft: "0.25em" }}>Requirements</span>
                  
                  {activeKey === "1" && (
                    <>
                    </>
                  )}
                </>
              }
              key="1"
            >
              <Suspense fallback={"Loading ..."}>
            
              <DashboardTable
      />
          
              </Suspense>
    </TabPane>
            <TabPane
              tab={
                <>
                 
                  {/* <GroupsIcon 
                
                   /> */}
                    <span style={{ marginLeft: "0.25em" }}>Recent Requirements</span>
                  
                  {activeKey === "2" && (
                    <>
                     
                    </>
                  )}
                </>
              }
              key="2"
            >
              {/* <Suspense fallback={"Loading ..."}>
                {" "}
                <DashboardTable 
                />
              </Suspense> */}
            </TabPane>
           
          

          
           
           

            
            {/* )} */}
          </StyledTabs>
        </TabsWrapper>
        <Suspense fallback={null}>
                  </Suspense>
      </>
    );
  }
}
const mapStateToProps = ({
  auth,
  contact,
  account,
  opportunity,
  call,
  event,
  task,
  partner,
  customeField,
}) => ({

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardDetailsTab);
