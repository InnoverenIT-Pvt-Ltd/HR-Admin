import * as types from './CoursesActionTypes'
import dayjs from "dayjs";




const initialState = {
    viewType: "card",

    fetchingCourseCard:false,
    fetchingCourseCardError:false,

    courseCard:[],


    fetchingCourseDetailsById: false,
  fetchingCourseDetailsByIdError: false,
  course: {},

  linkingProductInfo: false,
  linkingProductInfoError: false,
  productInfo: [],


  fetchingCartList: false,
  fetchingCartListError: false,
  cart: {},
}


export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_COURSES_VIEW_TYPE:
            return { ...state, viewType: action.payload };


            case types.GET_COURSE_CARD_REQUEST:
                return { ...state, fetchingCourseCard: true };
              case types.GET_COURSE_CARD_SUCCESS:
                return {
                  ...state,
                  fetchingCourseCard: false,
                  fetchingCourseCardError: false,
                  courseCard: action.payload,
                };
              case types.GET_COURSE_CARD_FAILURE:
                return {
                  ...state,
                  fetchingCourseCard: false,
                  fetchingCourseCardError: true,
                
                };


                case types.GET_COURSE_DETAILS_BY_ID_REQUEST:
      return { ...state, fetchingCourseDetailsById: true };
    case types.GET_COURSE_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        fetchingCourseDetailsById: false,
        course: action.payload,
      };
    case types.GET_COURSE_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        fetchingCourseDetailsById: false,
        fetchingCourseDetailsByIdError: true,
      };


      case types.LINK_PRODUCT_INFO_REQUEST:
        return {
          ...state,
          linkingProductInfo: true,
        };
      case types.LINK_PRODUCT_INFO_SUCCESS:
        return {
          ...state,
          linkingProductInfo: false,
           productInfo: action.payload,
          //   addRecruiterModal:false,
          //   recruitByOpportunityId: state.recruitByOpportunityId.map(
          //     (recruit, i) => {
          //       if (recruit.profileId === action.payload.profileId) {
          //         return action.payload;
          //       } else {
          //         return recruit;
          //       }
          //     }
          //   ),
        };
      case types.LINK_PRODUCT_INFO_FAILURE:
        return {
          ...state,
          // addRecruiterModal:false,
          linkingProductInfo: false,
          linkingProductInfoError: true,
        };



        case types.GET_CART_LIST_REQUEST:
          return { ...state, fetchingCartList: true };
        case types.GET_CART_LIST_SUCCESS:
          return {
            ...state,
            fetchingCartList: false,
            // productInfo: action.payload,
            cart:action.payload,
          };
        case types.GET_CART_LIST_FAILURE:
          return {
            ...state,
            fetchingCartList: false,
            fetchingCartListError: true,
          };


          case types.UPDATE_CART_REQUEST:
            return {
              ...state,
              updatingCart: true,
            };
          case types.UPDATE_CART_SUCCESS:
            return {
              ...state,
              updatingCart: false,
              cart: action.payload,
              //   addRecruiterModal:false,
              //   recruitByOpportunityId: state.recruitByOpportunityId.map(
              //     (recruit, i) => {
              //       if (recruit.profileId === action.payload.profileId) {
              //         return action.payload;
              //       } else {
              //         return recruit;
              //       }
              //     }
              //   ),
            };
          case types.UPDATE_CART_FAILURE:
            return {
              ...state,
              // addRecruiterModal:false,
              updatingCart: false,
              updatingCartError: true,
            };

        default:
    return state;

    }
};