import * as types from "./CoursesActionTypes";
import axios from "axios";
import moment from "moment";
import { message } from "antd"; 
import { base_url, assessment_url} from "../../Config/Auth";



export const setCoursesViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_COURSES_VIEW_TYPE, payload: viewType });



  export const getCourseCard = () => (dispatch) => {
    dispatch({
      type: types.GET_COURSE_CARD_REQUEST,
    });
    axios
      .get(`${ assessment_url}/course/getCourseDetails`, {
       headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        dispatch({
          type: types.GET_COURSE_CARD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.GET_COURSE_CARD_FAILURE,
        });
      });
  };


  export const LinkProductInfo = (data,) => (dispatch) => {
    dispatch({ type: types.LINK_PRODUCT_INFO_REQUEST });
  
    axios
      .post(`${ assessment_url}/cartOperation/add `, data, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
  
      .then((res) => {
         const final={cartId:res.data.storeCart.cartId,}
       
         localStorage.setItem("cartId",JSON.stringify(final))
console.log("final",final)
        dispatch({
          type: types.LINK_PRODUCT_INFO_SUCCESS,
          payload: res.data,
        });
        message.success("Course has been added to cart")
      })
      .catch((err) => {
      
        dispatch({
          type: types.LINK_PRODUCT_INFO_FAILURE,
        });
      });
  };



  export const getCourseDetailsById = (courseId) => (dispatch) => {
    dispatch({
      type: types.GET_COURSE_DETAILS_BY_ID_REQUEST,
    });
    axios
      .get(`${assessment_url}/course/${courseId}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
  
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.GET_COURSE_DETAILS_BY_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.GET_COURSE_DETAILS_BY_ID_FAILURE,
          payload: err,
        });
      });
  };




  export const getCartProductList = (cartId) => (dispatch) => {
    dispatch({
      type: types.GET_CART_LIST_REQUEST,
    });
    axios
      .get(`${assessment_url}/cartOperation/${cartId}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        
        dispatch({
          type: types.GET_CART_LIST_SUCCESS,
          payload: res.data,
        });
       
      })
      .catch((err) => {
     
        dispatch({
          type: types.GET_CART_LIST_FAILURE,
          payload: err,
        });
      });
  };



  export const updateCart = (data,cartId) => (dispatch) => {
    dispatch({ type: types.UPDATE_CART_REQUEST });
  
    axios
      .post(`${assessment_url}/cartOperation/update/${cartId} `, data, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
      })
  
      .then((res) => {
       
        dispatch({
          type: types.UPDATE_CART_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
    
        dispatch({
          type: types.UPDATE_CART_FAILURE,
        });
      });
  };