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


// import { getTimeLineDataByOpportunityId } from "../../../OpportunityAction";
import { ActionIcon } from "../../../Components/Utils";
import { AddPopover } from "../../../Components/Common";
// import { handleLinkPartnerModal } from "../../../../Partner/PartnerAction";
import { BundleLoader } from "../../../Components/Placeholder";

import { Breadcrumb, Alert } from "antd";
import StackedChart from "../Child/StackedChart";



const TabPane = StyledTabs.TabPane;
function handleRefreshPage() {
  window.location.reload();
}
class DashboardCustomerTab extends Component {
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
                 
                 {/* <FontAwesomeIcon icon={solid ('dollar-sign')} /> */}
                 {/* <FontAwesomeIcon icon={solid('bullseye')} /> */}
                 {/* <PieChartIcon 
                 /> */}
                    <span style={{ marginLeft: "0.25em" }}>Summary</span>
                  
                  {activeKey === "1" && (
                    <>
                      {/* <ActionIcon
                        type="plus"
                        tooltipTitle="Add"
                        handleIconClick={() => handleCandidateBankModal(true)}
                        size="1em"
                        style={{ marginLeft: 10, verticalAlign: "center" }}
                      /> */}
                    </>
                  )}
                </>
              }
              key="1"
            >
              <Suspense fallback={"Loading ..."}>
     
              <StackedChart
      />
          
              </Suspense>
            </TabPane>
            <TabPane
              tab={
                <>
                 
                 {/* <FontAwesomeIcon icon={solid ('dollar-sign')} /> */}
                 {/* <FontAwesomeIcon icon={solid('bullseye')} /> */}
                
                    <span style={{ marginLeft: "0.25em" }}>Top</span>
                  
                  {activeKey === "2" && (
                    <>
                      {/* <ActionIcon
                        type="plus"
                        tooltipTitle="Add"
                        handleIconClick={() => handleCandidateBankModal(true)}
                        size="1em"
                        style={{ marginLeft: 10, verticalAlign: "center" }}
                      /> */}
                    </>
                  )}
                </>
              }
              key="2"
            >
              <Suspense fallback={"Loading ..."}>
     
              {/* <StackedSummaryChart
              /> */}
          
              </Suspense>
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
const mapStateToProps = ({dispatch,
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

    },
    dispatch
  );

  const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCustomerTab);
