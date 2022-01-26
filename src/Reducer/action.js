import {
  ADD_INFOS,
  ADD_ALL_DATAS,
  ADD_ALL_APP_DATAS,
  GET_FILTER_DATA,
  GET_CHOSEN_INFO,
  GET_FILTER_APP_DATA,
} from "./type";

export const addInfos = (info) => {
  return {
    type: ADD_INFOS,
    payload: info,
  };
};
export const addAllDatas = (data) => {
  return {
    type: ADD_ALL_DATAS,
    payload: data,
  };
};
export const addAllAppDatas = (appdata) => {
  return {
    type: ADD_ALL_APP_DATAS,
    payload: appdata,
  };
};
export const getFilterData = (dataa) => {
  return {
    type: GET_FILTER_DATA,
    payload: dataa,
  };
};
export const getFilterAppData = (appData) => {
  return {
    type: GET_FILTER_APP_DATA,
    payload: appData,
  };
};

export const getChosenInfo = (info) => {
  return {
    type: GET_CHOSEN_INFO,
    payload: info,
  };
};
