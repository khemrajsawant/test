import { Link } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { APP_NAME } from "../utils/constant";

function Reports() {
  return (
    <Container maxWidth="xl">
      <Typography>Daily Work Report</Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Typography>Employee Number</Typography>
          <Typography>Report Number</Typography>
          <Typography>Total Work Hours</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography>Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker />
          </LocalizationProvider>
          <Typography>Employee Name</Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Reports;
