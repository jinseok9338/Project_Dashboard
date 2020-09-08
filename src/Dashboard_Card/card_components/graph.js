import React from "react";
import styled from "@emotion/styled";
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const ReturnGraph = () => {
  const Container = styled.div`
    background: "white";
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
  `;

  const data = [
    {
      id: "japan",
      color: "hsl(45, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 221,
        },
        {
          x: "helicopter",
          y: 140,
        },
        {
          x: "boat",
          y: 23,
        },
        {
          x: "train",
          y: 18,
        },
        {
          x: "subway",
          y: 294,
        },
        {
          x: "bus",
          y: 200,
        },
        {
          x: "car",
          y: 73,
        },
        {
          x: "moto",
          y: 12,
        },
        {
          x: "bicycle",
          y: 78,
        },
        {
          x: "horse",
          y: 88,
        },
        {
          x: "skateboard",
          y: 239,
        },
        {
          x: "others",
          y: 46,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(342, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 250,
        },
        {
          x: "helicopter",
          y: 3,
        },
        {
          x: "boat",
          y: 193,
        },
        {
          x: "train",
          y: 31,
        },
        {
          x: "subway",
          y: 37,
        },
        {
          x: "bus",
          y: 142,
        },
        {
          x: "car",
          y: 194,
        },
        {
          x: "moto",
          y: 222,
        },
        {
          x: "bicycle",
          y: 248,
        },
        {
          x: "horse",
          y: 27,
        },
        {
          x: "skateboard",
          y: 105,
        },
        {
          x: "others",
          y: 117,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(120, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 14,
        },
        {
          x: "helicopter",
          y: 234,
        },
        {
          x: "boat",
          y: 228,
        },
        {
          x: "train",
          y: 222,
        },
        {
          x: "subway",
          y: 93,
        },
        {
          x: "bus",
          y: 178,
        },
        {
          x: "car",
          y: 229,
        },
        {
          x: "moto",
          y: 18,
        },
        {
          x: "bicycle",
          y: 41,
        },
        {
          x: "horse",
          y: 0,
        },
        {
          x: "skateboard",
          y: 237,
        },
        {
          x: "others",
          y: 233,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(129, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 271,
        },
        {
          x: "helicopter",
          y: 246,
        },
        {
          x: "boat",
          y: 176,
        },
        {
          x: "train",
          y: 55,
        },
        {
          x: "subway",
          y: 56,
        },
        {
          x: "bus",
          y: 92,
        },
        {
          x: "car",
          y: 39,
        },
        {
          x: "moto",
          y: 276,
        },
        {
          x: "bicycle",
          y: 264,
        },
        {
          x: "horse",
          y: 165,
        },
        {
          x: "skateboard",
          y: 35,
        },
        {
          x: "others",
          y: 202,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(123, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 299,
        },
        {
          x: "helicopter",
          y: 123,
        },
        {
          x: "boat",
          y: 2,
        },
        {
          x: "train",
          y: 120,
        },
        {
          x: "subway",
          y: 140,
        },
        {
          x: "bus",
          y: 122,
        },
        {
          x: "car",
          y: 99,
        },
        {
          x: "moto",
          y: 77,
        },
        {
          x: "bicycle",
          y: 235,
        },
        {
          x: "horse",
          y: 253,
        },
        {
          x: "skateboard",
          y: 148,
        },
        {
          x: "others",
          y: 183,
        },
      ],
    },
  ];

  const MyResponsiveLine = () => (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "nivo" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <Container>
      <MyResponsiveLine />
    </Container>
  );
};

export default ReturnGraph;
