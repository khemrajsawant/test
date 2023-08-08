import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";
import { Container, Stack, Typography } from "@mui/material";
import { Input as AntdInput } from "antd";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import React from "react";
import { createTutorial } from "../redux/tableStateGenForm/table/tableAction";
import { Divider } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const GenericForm = () => {
  const { control, handleSubmit } = useForm();
  const [id, setId] = React.useState(0);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    k = id + 1;
    data.id = k;
    dispatch(createTutorial(data));
    setId(k);
    // alert(JSON.stringify(data));
  };

  return (
    <Container maxWidth="xl" sx={[{marginBottom: theme => theme.spacing(3)},{ marginTop: theme => theme.spacing(3)}]}>
      <Stack spacing={1} sx={{marginBottom: theme => theme.spacing(3)}}>
        <Stack direction="row" spacing={1} sx={{marginBottom: theme => theme.spacing(3)}}>
          <Box sx={{ height: 100, width: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction="row" spacing={1}>
                <label>Drawing Number</label>
                <Controller
                  name="drawingNumber"
                  render={({ field }) => (
                    <Select {...field} sx={{minWidth: theme => theme.spacing(30)}}>
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  )}
                  control={control}
                  defaultValue=""
                />
                <label>Select Operation</label>
                <Controller
                  name="operationCode"
                  render={({ field }) => (
                    <Select {...field} sx={{minWidth: theme => theme.spacing(30)}}>
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  )}
                  control={control}
                  defaultValue=""
                />
                <label>Operation Description</label>
                <Controller
                  render={({ field }) => <Input {...field} />}
                  name="operationDescription"
                  control={control}
                  defaultValue=""
                  className="materialUIInput"
                />
                <label>Select Machine</label>
                <Controller
                  name="machineID"
                  render={({ field }) => (
                    <Select {...field} sx={{minWidth: theme => theme.spacing(30)}}>
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  )}
                  control={control}
                  defaultValue=""
                />
              </Stack>
              <Stack direction="row" spacing={1} sx={{marginTop: theme => theme.spacing(3)}}>
                <label >Machine Description</label>
                <Controller
                  render={({ field }) => <Input {...field} sx={{minWidth: theme => theme.spacing(30)}}/>}
                  name="machineDescription"
                  control={control}
                  defaultValue=""
                  className="materialUIInput"
                />

                <label>Quantity</label>
                <Controller
                  render={({ field }) => <AntdInput {...field} sx={{maxWidth: theme => theme.spacing(25)}}/>}
                  name="quantity"
                  control={control}
                  defaultValue=""
                />
                <label>Total</label>
                <Controller
                  render={({ field }) => <AntdInput {...field} sx={{maxWidth: theme => theme.spacing(25)}}/>}
                  name="totalPrice"
                  control={control}
                  defaultValue=""
                />
                <Button type="submit" variant="contained" sx={{minWidth: theme => theme.spacing(15)}}>
                  Add Entry
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default GenericForm;
