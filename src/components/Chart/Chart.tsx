import React from "react";
import { Chart } from "react-google-charts";
import { Container } from "./style";
import { Text } from "../Text/Text";

interface ICustomChart {
  female: number;
  male: number;
}

function CustomChart({ female, male }: ICustomChart) {
  let data = [
    ["Gender", "Percentage"],
    ["Female", female],
    ["Male", male],
    // CSS-style declaration
  ];
  if (female === 0 && male === 0) {
    return (
      <Container>
        <Text weight="bold" transform="uppercase">Gênero desconhecido</Text>
      </Container>
    );
  } else {
    return (
      <Container className="wrapper">
        <Chart
          chartType="PieChart"
          width={300}
          height={300}
          data={data}
          options={{
            is3D: false,
            width: 300,
            backgroundColor: "transparent",
            colors: ["#ED6EC7", "#0288d1"],
            legend: "none",
            pieHole: 0.4,
          }}
        />
      </Container>
    );
  }
}

export default CustomChart;
