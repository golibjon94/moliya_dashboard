import React, { useEffect, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import HearderComponent from "./Components/Header/HearderComponent";
import { Api } from "./utils/https";
import { FinanceContext } from "./Context/context";
import { reducer, initialState } from "./Reducer/reducer";
import { addAllDatas,addAllAppDatas } from "./Reducer/action";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    Api({
      method: "get",
      url: "/GetPaymentByYearMonthProgramRegionDistrict",
      header: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
      .then((res) => {
        dispatch(addAllDatas(res.data));
        const allPayment = res.data
          .map((item) => item.sumAmount.replace(/,/g, ""))
          .reduce((acc, current) => parseInt(acc) + parseInt(current))
          .toString();
        const newAdd =
          allPayment.substring(0, 10) +
          "," +
          allPayment.substring(10, allPayment.length);
        const newAdd2 =
          newAdd.substring(0, 7) + "," + newAdd.substring(7, newAdd.length);
        const newAdd3 =
          newAdd2.substring(0, 4) + "," + newAdd2.substring(4, newAdd2.length);
        const newAllPayment =
          newAdd3.substring(0, 1) + "," + newAdd3.substring(1, newAdd3.length);
        localStorage.setItem("jamiTolovlar", newAllPayment);
      })
      .catch((err) => console.log(err.message));
    // --------------------------------------
    Api({
      method: "get",
      url: "/GetApplicationsByRegionDistrict",
      header: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
      .then((res) => {
        dispatch(addAllAppDatas(res.data))
        const allApp = res.data
          .reduce(
            (acc, current) => acc + parseInt(current.applicationsCount),
            0
          )
          .toString();
        localStorage.setItem("jamiArizalar", allApp);
      })
      .catch((err) => console.log(err.message));

  }, []);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <HearderComponent />;
        <Footer />
      </BrowserRouter>
    </FinanceContext.Provider>
  );
}

export default App;
