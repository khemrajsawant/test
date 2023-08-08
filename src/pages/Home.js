import React from "react";
import GenericForm from "../components/GenericForm";
// import { APP_NAME } from "../utils/constant";
import { useSelector } from "react-redux";
import EmployeeInfo from "../components/EmployeeInfo";
import DataGridDemo from "../components/DataGridDemo";
import { Container, Stack, Typography } from "@mui/material";
import { Paper } from "@mui/material";

function Home() {
  const table = useSelector((state) => state.table);
  const fetchData = async () => {
    try {
      google.script.run
        .withSuccessHandler((data) => {
          alert(data);
        })
        .withFailureHandler((er) => {
          alert(er);
        })
        .importData();
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
      return "Hello";
    }
  };

  return (
    <Paper>
      <EmployeeInfo />
      <GenericForm />
      <DataGridDemo
        data={table}
        sx={{ marginTop: (theme) => theme.spacing(3) }}
      />
    </Paper>
  );
}

export default Home;
