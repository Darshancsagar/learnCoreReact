import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  const data = [
    { id: 1, column1: "Data 1", column2: "Data A" },
    { id: 2, column1: "Data 2", column2: "Data B" },
    { id: 3, column1: "Data 3", column2: "Data C" },
    // Add more data rows as needed
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "100px" }}>Header 1</TableCell>
            <TableCell style={{ width: "150px" }}>Header 2</TableCell>
            {/* Adjust width values based on your needs */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ width: "100px" }}>{row.column1}</TableCell>
              <TableCell style={{ width: "150px" }}>{row.column2}</TableCell>
              {/* Adjust width values based on your needs */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
