


import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
// import DashboardJumpstartAll from "../Dashboard/Child/JumpStart/DashboardJumpstartAll"
import DashboardJumpstart from "../Dashboard/Child/DashboardJumpstart"
import { Modal, Button } from "antd";
// import StackedClosureChart from "../Dashboard/StackedClosureChart"
// import FunnelChart from "../Dashboard/FunnelChart"
 import DashboardDetailsTab from "../Dashboard/Child/DashboardDetailsTab"
import { bindActionCreators } from "redux";
import { BundleLoader } from "../../Components/Placeholder";
// import DashboardAllDetailsTab from "../Dashboard/DashboardAllDetailsTab"

import Dashboardheader from "../Dashboard/Child/Dashboardheader";
 import { ResponsiveBox, FlexContainer,MainWrapper } from "../../Components/UI/Layout";

// import DashboardTodo from "./Child/DashboardTodo";
// import TodoDashboardTab from "../Dashboard/TodoDashboardTab"

 import DashboardCustomerTab from "../Dashboard/Child/DashboardCustomerTab";
 import StackedClosureChartAll from "../Dashboard/Child/StackedClosureChartAll";


class Dashboard extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCallback = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    // const {
    //   dashboardType,
    //   viewType,
    //   organization,
    //   timeZone,
    //   level,
    //   highestLevel,
    //   dept,
    //   country,
    // } = this.props;
    // if (viewType==="ALL") {
    //   return <BundleLoader/>;
    // }
    // console.log(timeZone);

    return (
      <React.Fragment>
   

        <Dashboardheader />
        <Suspense fallback={<BundleLoader />}>
         <div style={{ display: "flex", justifyContent: "space-between",  }}>
           <div style={{ width: "53%" }}>
           <FlexContainer flexDirection="column" style={{ display: "block" }}>
        
              <DashboardJumpstart />
          
           
       <FlexContainer justifyContent="space-between" >
      
                
               
                   <StackedClosureChartAll/>
       
        
                 <div style={{ width: "38%" }}>
       <MainWrapper
        style={{height:"16em"}}
       >
        Pipeline (Today)
     
              
              {/* <FunnelChart/> */}
         
       </MainWrapper>
       </div>
            </FlexContainer>
                
        
        
        <DashboardDetailsTab
       // viewType={viewType}
        />
          
         
        
        
    </FlexContainer>
    </div>
     <div style={{ width: "47%" }}>
          <FlexContainer flexDirection="column" style={{ display: "block" }}>
      
      <DashboardCustomerTab
      //viewType={viewType}
      />
      
       <FlexContainer justifyContent="space-between" >
       {/* <TodoDashboardTab
      //viewType={viewType}
      /> */}
     
      </FlexContainer>
    
    </FlexContainer>
    </div>
    </div>
    </Suspense>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ dashboard, auth }) => ({
//   viewType:dashboard.viewType,

});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


