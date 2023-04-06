import React, {useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { JumpStartBox, Spacer } from "../../../Components/UI/Elements";
import { FlexContainer } from "../../../Components/UI/Layout";
// import {getDateWiseList,getSalesDateWiseList} from "../../DashboardAction";

class DashboardJumpStart extends React.Component{
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
// componentDidMount() {
//    if(this.props.role==="USER"&&this.props.user.department==="Recruiter"){
//   const { getDateWiseList, recruiterId, startDate, endDate } = this.props;
//   getDateWiseList(recruiterId,  startDate, endDate);
//    }else{
//     const { getSalesDateWiseList, orgId, startDate, endDate } = this.props;
//     getSalesDateWiseList(orgId,  startDate, endDate);
//    }
// }
// componentWillReceiveProps(nextProps) {
//   if (
//     this.props.startDate !== nextProps.startDate ||
//     this.props.endDate !== nextProps.endDate
//   ) {
//         if(this.props.role==="USER"&&this.props.user.department==="Recruiter"){
//     const { getDateWiseList, recruiterId, startDate, endDate } = nextProps;
//     getDateWiseList(recruiterId, startDate, endDate);
//         }else{
//           const { getSalesDateWiseList, orgId, startDate, endDate } = nextProps;
//           getSalesDateWiseList(orgId, startDate, endDate);
//         }
//   }
// }

//   useEffect(() => { 
//    props.getDateWiseList(props.recruiterId,props.startDate, props.endDate);
// }, [props.startDate, props.endDate, props.type]);
  
render() {
//   const { showDatelist, fetchingDatewiseReport } = this.props;
  return(
      <FlexContainer flexDirection="row" style={{ width: "100%"}}>
        <FlexContainer style={{ width: "100%"}}>
        
          <JumpStartBox
            //noProgress
            title="Requirements"
         
          />
       
          <JumpStartBox
            //noProgress
            title="Positions "
         
          />
        
          <JumpStartBox
            //noProgress
            title="Selected"
          
            
          />
          <JumpStartBox
            // noProgress
            title="On Boarded"
         
            
          />
           
       
        </FlexContainer>
        <Spacer />
     
      </FlexContainer>
    
  ); 
}
}
const mapStateToProps = ({ dashboard,auth }) => ({
//   user: auth.userDetails,
//   role: auth.userDetails.role,
//   showDatelist:dashboard.showDatelist,
//   orgId:auth.userDetails.organizationId,
//   showSalesDatelist:dashboard.showSalesDatelist,
//   fetchingSalesDatewiseReport:dashboard.fetchingSalesDatewiseReport,
//   fetchingSalesDatewiseReportError:dashboard.fetchingSalesDatewiseReportError,
//   fetchingDatewiseReport:dashboard.fetchingDatewiseReport,
//   fetchingDatewiseReportError:dashboard.fetchingDatewiseReportError,
//   recruiterId:auth.userDetails.userId,
//   endDate: dashboard.endDate,
//   startDate: dashboard.startDate,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
//   getDateWiseList,
//   getSalesDateWiseList
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardJumpStart);
