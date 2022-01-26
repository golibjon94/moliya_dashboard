import React, { useState, useContext, useRef, useEffect } from "react";
import "./map.css";
import { uzbDatas } from "../../datas/uzbDatas";
import { useNavigate } from "react-router-dom";
import { FinanceContext } from "../../Context/context";
import { addInfos } from "../../Reducer/action";

function Map() {
  const [name, setName] = useState(null);
  let navigate = useNavigate();
  const { state, dispatch } = useContext(FinanceContext);

  useEffect(() => {
    const newObj = {
      ...state.financeInfos,
      regionName: name,
      districtName: "",
    };
    dispatch(addInfos(newObj));
  }, []);
  const doubleClick = (id, name) => {
    navigate(`/regionData/${id}`);
    const newObj = {
      ...state.financeInfos,
      regionID: id,
      regionName: name,
      districtName: "",
    };
    dispatch(addInfos(newObj));
  };
  return (
    <div style={{ marginLeft: "40px" }} className="regions">
      <div className="uzbmap">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 264.05408 171.97914"
          version="1.1"
          id="uzbekistan"
          stroke="white"
          stroke-width="0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <sodipodi
            id="namedview204"
            pagecolor="#505050"
            bordercolor="#eeeeee"
            borderopacity="1"
            showgrid="false"
            width="264.05408mm"
            height="240mm"
            fit-margin-top="0"
            fit-margin-left="0"
            fit-margin-right="0"
            fit-margin-bottom="0"
          />

          <g id="layer1" transform="translate(-32.388773,-30.710986)">
            {uzbDatas?.map((item) => (
              <a xlinkTitle={item.name}>
                <path
                  d={item.d}
                  name={item.name}
                  id={item.clas}
                  onDoubleClick={(id, name) => doubleClick(item.id, item.name)}
                ></path>
              </a>
            ))}
          </g>
          <g>
            <circle cx="673.4" cy="626" id="0"></circle>
            <circle cx="637.6" cy="506" id="1"></circle>
            <circle cx="636" cy="498.9" id="2"></circle>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Map;
