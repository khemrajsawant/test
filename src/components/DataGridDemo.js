import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteTutorial } from "../redux/tableStateGenForm/table/tableAction";
import { deleteAllTutorials } from "../redux/tableStateGenForm/table/tableAction";

function DataGridDemo(props) {
  const dispatch = useDispatch();
  const [clickedRow, setClickedRow] = React.useState();
  const onButtonClick = (e, row) => {
    e.stopPropagation();
    console.log("delete", row.id);
    setClickedRow(row);
    dispatch(deleteTutorial(row.id));
  };

  const columns = [
    {
      field: "id",
      headerName: "S.N",
      width: 150,
      editable: true,
    },
    {
      field: "drawingNumber",
      headerName: "Drawing Number",
      width: 150,
      editable: true,
    },
    {
      field: "operationCode",
      headerName: "Operation Code",
      width: 150,
      editable: true,
    },
    {
      field: "operationDescription",
      headerName: "Operation",
      width: 150,
      editable: true,
    },
    {
      field: "machineID",
      headerName: "Machine Number",
      width: 150,
      editable: true,
    },
    {
      field: "machineDescription",
      headerName: "Machine",
      width: 150,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
      editable: true,
    },
    {
      field: "totalPrice",
      headerName: "Total (INR)",
      width: 150,
      editable: true,
    },
    {
      field: "deleteButton",
      headerName: "Actions",
      description: "Actions column.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <Button
            onClick={(e) => onButtonClick(e, params.row)}
            variant="contained"
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const rows = props.data;
  console.log("rows:", rows);
  return (
    <Stack sx={{ marginTop: theme => theme.spacing(8)}}>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </Stack>

    // clickedRow: {clickedRow ? `${clickedRow.id}` : null}
  );
}

export default DataGridDemo;
