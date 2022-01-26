import React from "react";
import { Box } from "@material-ui/core";
import BlogGraph from "./BlogGraph";
import { PageHeader } from "../../../Common/Components";

export default function Dashboard() {
  return (
    <Box mt={1}>
      <PageHeader/>
      <BlogGraph />
    </Box>
  );
}
