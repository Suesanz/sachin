import React from "react";
import * as Recharts from "recharts";
import {totalRun} from "../../components/script";

const {LineChart, Line, XAxis, YAxis, Tooltip} = Recharts;

export const LineCharts = props => {
    const data = totalRun(props.team);
    return (
        <div>
              <span
                  className=""
                  style={{
                      position: "absolute",
                      top: "15px",
                      left: "30px",
                      fontSize: "25px",
                      marginBottom: "10px",
                      color:"black"
                  }}
              >
        Runs against {props.team}
      </span>

            <LineChart
                width={900}
                height={150}
                data={data}
                margin={{top: 40, right: 30, left: 0, bottom: -10}}
                className="ssp-400"
                style={{color: "#e91e63"}}
            >
                <XAxis/>
                <YAxis/>
                <Tooltip/>
                <Line
                    type="monotone"
                    dataKey="runs"
                    stroke="#e91e63"
                    strokeWidth="3"
                    strokeOpacity="0.85"
                    activeDot={{r: 8}}
                />
            </LineChart>
            <span
                className=""
                style={{
                    color: "black",
                    position: "absolute",
                    bottom: "17px",
                    left: "47%",
                    fontSize:"20px"
                }}
            >
        Matches
      </span>
        </div>
    )
}