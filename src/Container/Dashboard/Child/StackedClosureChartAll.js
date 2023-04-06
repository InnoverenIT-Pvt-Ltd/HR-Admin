//import "./styles.css";
import React, { Component,useState, useMemo ,useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FlexContainer } from "../../../Components/UI/Layout";
// import TimeInterval from "../../Utils/TimeInterval";
//  import {setSelectedClosureTimeIntervalReport} from "../Opportunity/OpportunityAction";
//  import {getAllDashBoardClosureRatio} from "../Dashboard/DashboardAction";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
// import OpportunityCardView from "../Opportunity/OpportunityCardView";
import { MainWrapper } from "../../../Components/UI/Elements";


const data = [
  {
    customerName: "ABN Amro",
    userId: null,
    customerId: null,
    requirementName: null,
    recruitmentId: null,
    recruiterId: null,
    name: null,
    orgId: null,
    opportunityNo: 0,
    openRequirmentNo: 1,
    Selected: 5,
    OnBoarded: 2,
    Positions: 15
  },
  {
    customerName: "TESTING ",
    userId: null,
    customerId: null,
    requirementName: null,
    recruitmentId: null,
    recruiterId: null,
    name: null,
    orgId: null,
    opportunityNo: 0,
    openRequirmentNo: 304,
    Selected: 0,
    OnBoarded: 1,
    Positions: 303
  }
]


 


 class StackedClosureChartAll extends React.Component {
  constructor() {
    super();
    var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  
  this.state = {
    date: date,
  };
  }
//   componentDidMount() {
//     const { getAllDashBoardClosureRatio, userId, department,startDate, endDate } = this.props;
//     getAllDashBoardClosureRatio(userId,  startDate, endDate,department);
//   }
//   componentWillReceiveProps(nextProps) {
//     if (
//       this.props.startDate !== nextProps.startDate ||
//       this.props.endDate !== nextProps.endDate
//     ) {
//       const { getAllDashBoardClosureRatio, userId,department, startDate, endDate } = nextProps;
//       getAllDashBoardClosureRatio(userId, startDate, endDate,department);
//     }
//   }

 

  // useEffect(() => {
  //   props.getDashBoardClosureRatio(props.organisationId,"Recruiter");
    
  // }, []);
  render() {
    
  return (
    <>
    <MainWrapper
    style={{height:"16em",width:"57%"}}
    >
      {/* Recruitment Performance */}
      <FlexContainer justifyContent="space-between">
    
      <span>Productivity</span>
  
        </FlexContainer>
    <BarChart
      width={350}
      height={200}
      data={data}
      margin={{
        top: 10,
        right: 20,
        left: 6,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend className="recharts-default-legend"/>
      <Bar dataKey="openRequirmentNo" stackId="a" fill="rgb(0, 192, 239, 0.4)" />
      <Bar dataKey="Selected" stackId="a" fill="#ff715885" />
      <Bar dataKey="Onboarded" stackId="a" fill="orange" /> 
    </BarChart>
    </MainWrapper>
    </>
  );
}
 }
const mapStateToProps = ({ dashboard,auth,opportunity }) => ({

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   getAllDashBoardClosureRatio,
    //     // getDashBoardClosureRatio,
    //      setSelectedClosureTimeIntervalReport
      
     // getDashBoardCustomerChart

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(StackedClosureChartAll);

