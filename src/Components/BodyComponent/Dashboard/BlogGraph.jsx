import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useContext } from "react";
import { useStyles } from "../BodyStyles";
import Map from "../../Map/Map";
import { Routes, Route } from "react-router-dom";
import RegionsData from "../../RegionsData/RegionsData";
import YearSelect from "../../Selects/yearSelect";
import MonthSelect from "../../Selects/monthSelect";
import ProgrammeSelect from "../../Selects/programmeSelect";
import InfosTable from "../../TableInfos/infosTable";
import AppStatusTable from "../../TableInfos/appTable";
import { FinanceContext } from "../../../Context/context";
import { getFilterData, getFilterAppData } from "../../../Reducer/action";

export default function BlogGraph() {
  const classes = useStyles();
  const { state, dispatch } = useContext(FinanceContext);
  const { financeInfos, allDatas, allAppDatas, chosenInfo } = state;
  const {
    districtID,
    districtName,
    regionID,
    regionName,
    programmeID,
    paymentMonth,
    paymentYear,
  } = financeInfos;

  useEffect(() => {
    const filteredData = allDatas
      ? allDatas.filter((item) => {
          return (
            item.districtID === districtID &&
            item.districtName === districtName &&
            item.regionID === regionID &&
            item.regionName === regionName &&
            item.paymentYear === paymentYear &&
            item.paymentMonth === paymentMonth &&
            item.programmeID === programmeID
          );
        })
      : [];
    console.log(filteredData);
    dispatch(getFilterData(filteredData));
  }, [districtName, paymentMonth, paymentYear, programmeID]);

  useEffect(() => {
    const filteredAppData = allAppDatas
      ? allAppDatas.filter((item) => {
          return (
            item.districtID === districtID &&
            item.districtName === districtName &&
            item.regionID === regionID &&
            item.regionName === regionName
          );
        })
      : [];
    dispatch(getFilterAppData(filteredAppData));
  }, [districtName, regionName]);
  const jamiTolovlar = localStorage.getItem("jamiTolovlar");
  const jamiArizalar = localStorage.getItem("jamiArizalar");
  return (
    <Grid container className={classes.section} spacing={1}>
      <Grid item xs={12} sm={7} md={7}>
        <Card component={Paper}>
          <CardContent>
            <Typography
              style={{
                display: "grid",
                gridGap: "20px",
                gridTemplateColumns: "repeat(3,auto)",
              }}
              variant="h6"
              className={classes.cardTitle}
              align=""
            >
              <YearSelect />
              <MonthSelect />
              <ProgrammeSelect />
            </Typography>
          </CardContent>

          <Divider />
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/regionData/:id" element={<RegionsData />} />
          </Routes>
        </Card>
      </Grid>
      <Grid item xs={12} sm={5} md={5}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant="h4" className={classes.cardTitle} align="left">
              Jami arizalar:{" "}
              <span style={{ fontWeight: "bold" }}> {jamiArizalar} ta</span>
            </Typography>
            <Typography variant="h4" className={classes.cardTitle} align="left">
              Jami summa:{" "}
              <span style={{ fontWeight: "bold" }}>{jamiTolovlar} sum</span>
            </Typography>
          </CardContent>
          <Divider />
          <InfosTable />
        </Card>
        <Divider />
        <Typography variant="h6" className={classes.cardTitle} align="center">
          {chosenInfo === "ARIZALAR" && <AppStatusTable />}
        </Typography>
      </Grid>
    </Grid>
  );
}
