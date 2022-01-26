import { ADD_INFOS,ADD_ALL_DATAS,ADD_ALL_APP_DATAS, GET_FILTER_DATA,
  GET_CHOSEN_INFO,GET_FILTER_APP_DATA} from "./type";

export const initialState = {
  allDatas:[],
  allAppDatas:[],
  financeInfos: {
    districtID: "",
    districtName: "",
    regionID: "",
    regionName: "",
    paymentYear: "",
    paymentMonth: "",
    programmeID: "",
  },
  filterData:[],
  filterAppData:[],
  chosenInfo:"SUMMA",
  
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ALL_DATAS:
      return (state = {
        ...state,
        allDatas:[...action.payload]
      });
    case ADD_ALL_APP_DATAS:
      return (state = {
        ...state,
        allAppDatas:[...action.payload]
      });
    case ADD_INFOS:
      return (state = {
        ...state,
        financeInfos: action.payload,
      });
    case GET_FILTER_DATA:
      return (state = {
        ...state,
        filterData:[...action.payload]
      });
    case GET_FILTER_APP_DATA:
      return (state = {
        ...state,
        filterAppData:[...action.payload]
      });
    case GET_CHOSEN_INFO:
      return (state = {
        ...state,
        chosenInfo:action.payload
      });
    default:
      return state;
  }
};

