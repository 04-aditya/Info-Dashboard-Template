import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Tab,
  Tabs,
} from "@mui/material";
import "./Team.css";
import { StackedAreaChartExample } from "../../ChartsandTables/StackedAreaChartExample";

import { DataTableExample } from "../../ChartsandTables/DataTableExample";
import { PieChartExample } from "../../ChartsandTables/PieChartExample";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%", marginTop: "35px" }}
      {...other}
    >
      {children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const chartsComponentArray = [<StackedAreaChartExample />, <PieChartExample />];
const chartsTypeArray = ["Stacked Area Chart", "Pie Chart"];

const tableComponentArray = [<DataTableExample />];
const tableTypeArray = ["Members - Basic"];

export const Team = () => {
  const [value, setValue] = React.useState(0);
  const [chartType, setChartType] = React.useState("Stacked Area Chart");
  const [tableType, setTableType] = React.useState("Members - Basic");

  const handleChartChange = (event: SelectChangeEvent) => {
    setChartType(event.target.value as string);
  };

  const handleTableChange = (event: SelectChangeEvent) => {
    setTableType(event.target.value as string);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="Team">
        <Card
          sx={{
            width: "90%",
            margin: "15px",
            padding: "15px",
            boxShadow: "9",
            borderRadius: "15px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="teams data tabs"
          >
            <Tab label="Charts" {...a11yProps(0)} />
            <Tab label="Tables" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <FormControl
              sx={{
                position: "fixed",
                right: "5%",
                marginTop: "-80px",
                width: "250px",
              }}
            >
              <InputLabel id="chart-select-label"></InputLabel>
              <Select
                id="chart-select"
                value={chartType}
                onChange={handleChartChange}
              >
                <MenuItem disabled value="">
                  <em>Chart Type</em>
                </MenuItem>
                {chartsTypeArray.map((chartType) => (
                  <MenuItem key={chartType} value={chartType}>
                    {chartType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {chartsComponentArray[chartsTypeArray.indexOf(chartType)]}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormControl
              sx={{
                position: "fixed",
                right: "5%",
                marginTop: "-80px",
                width: "250px",
              }}
            >
              <InputLabel id="table-select-label"></InputLabel>
              <Select
                id="table-select"
                value={tableType}
                onChange={handleTableChange}
              >
                <MenuItem disabled value="">
                  <em>Table Data Type</em>
                </MenuItem>
                {tableTypeArray.map((tableType) => (
                  <MenuItem key={tableType} value={tableType}>
                    {tableType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {tableComponentArray[tableTypeArray.indexOf(tableType)]}
          </TabPanel>
        </Card>
      </div>
    </div>
  );
};
