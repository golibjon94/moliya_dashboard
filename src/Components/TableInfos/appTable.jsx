import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FinanceContext } from "../../Context/context";
export default function AppStatusTable() {
  const { state } = React.useContext(FinanceContext);
  const { filterAppData } = state;
  console.log(filterAppData)
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow  >
            <TableCell sx={{fontSize:"30px",padding:"20px"}} >Arizalar holati</TableCell>
            <TableCell sx={{fontSize:"30px",padding:"20px"}} align="right">Arizalar soni</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterAppData.length > 0 &&
            filterAppData.map((row) => (
              <TableRow
              sx={{fontSize:"20px",padding:"13px"}}
                key={row.statusID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell 
                sx={{fontSize:"20px",padding:"13px"}}
                component="th" scope="row">
                  {row.statusID==="WAITING LIST" && "Hal bo'lishi kutilayotgan"}
                  {row.statusID==="PENDING APPROVAL" && "Tasdiqni kutish bosqichida"}
                  {row.statusID==="REJECTED" && "Rad etilgan"}
                  {row.statusID==="APPROVED" && "Ma'qullangan"}
                  {row.statusID==="EXITED" && "Bolasi 18ga to'lgan va ruyhatdan chiqarilgan"}
                  {row.statusID==="EXPIRED" && "Topshirilganiga 1 yildan oshgan"}
                  {row.statusID==="MEMBERS" && "Oila a'zolarini qo'shish bosqichida"}
                  {row.statusID==="OTHER_INCOME" && "Chorva soni bo'yicha"}
                  {row.statusID==="UPLOAD_DOC" && "Xujjat nusxalarini yuklash bosqichida"}
                  {row.statusID==="REGIONAL_REVIEW" && "Nikoh hujjati kutish bosqichida "}
                  {row.statusID==="REVIEW_APPLICATION" && "2 kunda keyingi bosqichga o'tadigan"}
                </TableCell>
                <TableCell sx={{fontWeight:"bold",fontSize:"22px"}} align="right">{row.applicationsCount} ta</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
