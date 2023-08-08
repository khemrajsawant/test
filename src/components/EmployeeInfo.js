import React from "react";

import { Container, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";


function EmployeeInfo(props) {
  const [empNumber, setEmpNumber] = React.useState(1);
  const [reportNumber, setReportNumber] = React.useState(2345);
  const [totalWorkHour, setTotalWorkHour] = React.useState(12);
  const [empName, setEmpName] = React.useState("test_employee");
  const [selected, setSelected] = React.useState(false);
  // const [date_, setDate_] = React.useState("2022-04-17");
  return (
    <Container maxWidth="xl" sx={{ marginTop: (theme) => theme.spacing(1) }}>
      <Typography gutterBottom={true}>Daily Work Report</Typography>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Typography>Employee Number - {empNumber}</Typography>

          <Typography>Employee Name - {empName}</Typography>

          <Typography>Report Number - {reportNumber}</Typography>

          <Typography>Total Work Hours - {totalWorkHour}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography gutterBottom={true}>
            Choose Date of Reporting -{" "}
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              slotProps={{ textField: { size: "small" } }}
              onChange={(newValue) => setDate_(newValue)}
            />
          </LocalizationProvider>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            Modify / Confirm
          </ToggleButton>
        </Stack>
      </Stack>
    </Container>
  );
}

export default EmployeeInfo;
