



import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from "react-intl";

import { Suspense } from "react";

import { Tooltip, Icon,Input,Button,Badge, Table,  InputNumber, Popconfirm, Form, Typography  } from "antd";

import { CurrencySymbol } from "../../../Components/Common";

import { StyledTable, StyledPopconfirm } from "../../../Components/UI/Antd";
import { MultiAvatar, SubTitle } from "../../../Components/UI/Elements";
import { BundleLoader } from "../../../Components/Placeholder";


import { FlexContainer } from "../../../Components/UI/Layout";
import { SearchOutlined } from "@ant-design/icons";

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}



function DashboardTable(props) {
 


 

  
  const [currentprocessName, setCurrentprocessName] = useState("");


  function handleSetCurrentProcessName(item) {
   setCurrentprocessName(item);
    console.log(item);
  }
 


 const columns = [
   {
     title: "",
     width: "2%",
   },
 
   {
    title:"Customer",
    
    //dataIndex: "customerName",
    //...getColumnSearchProps('customerName'),
     width: "16%",
  },
   {
    title:"Sponsor",

      //dataIndex: "sponserName",
     // ...getColumnSearchProps('sponserName'),
       width: "12%",
    },
    {
     title:"Ageing",

      // dataIndex: "sponserName",
      // ...getColumnSearchProps('sponserName'),
       width: "10%",
    },




   
 ];
  const tab = document.querySelector(".ant-layout-sider-children");
  const tableHeight = tab && tab.offsetHeight * 0.4;

 
  return (
    <>
     {/* <Box sx={{ height: 400, width: "100%" }}>
     <DataGrid
     getRowId={(row) => row.recruitmentId}
       rows={ props.tableDashboard2}
       loading={props.fetchingdashboardTable2}
       columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
       disableSelectionOnClick
       experimentalFeatures={{ newEditingApi: true }}
       components={{Toolbar:GridToolbar}}
     />
   </Box> */}
      <StyledTable
        // rowKey="opportunityId"
        columns={columns}
        // dataSource={
        //  props.tableDashboard2
        // // [{Recruitment:"react",jobid:"1",sponsor:"anc",recruiter:"abc",candidate:"20",selectedCandidate:"5",listOfProgress:["21","25","3"]}]
        // }
        onChange={onChange}
        scroll={{ y: tableHeight }}
        pagination={false}
      />


    </>
  );
}

// }
const mapStateToProps = ({ auth, account, opportunity,dashboard }) => ({

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    // getDashboardTable2,
    // getCandidateRequirement,
    // handleAddJobDetailtModal
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(DashboardTable);
