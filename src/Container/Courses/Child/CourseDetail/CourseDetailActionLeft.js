import React from "react";
import { withRouter } from "react-router-dom";
import ActionIcon from "../../../../Components/Utils/ActionIcon";
import { FormattedMessage, IntlProvider } from "react-intl";
import { FlexContainer } from "../../../../Components/UI/Layout/";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RollbackOutlined } from "@ant-design/icons";

class CourseDetailActionLeft extends React.Component {
  render() {
    return (
      <FlexContainer alignItems="center">
        <RollbackOutlined
          style={{ marginRight: "0.3rem" }}
          iconType="rollback"
           tooltipTitle="Back"
         
          // style={{ color: "#1890ff" }}
        onClick={() => this.props.history.goBack()}
        />
      </FlexContainer>
    );
  }
}
const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CourseDetailActionLeft)
);
