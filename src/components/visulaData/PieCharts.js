import React from "react";
import * as Recharts from "recharts";
import {WLD} from "../../components/script";

const { PieChart,Pie, Cell} = Recharts;

export const PieCharts = props => {
    let result = WLD(props.team);
    const data = [
        { name: "Wins", value: result.won },
        { name: "Loses", value: result.lost },
        { name: "Draw", value: result.draw }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

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
                      color:"#00c49f",
                      fontWeight:"700"
                  }}
              >
        Match Stats
      </span>
            <PieChart width={400} height={400} className="">
                <Pie
                    data={data}
                    cx={190}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={5}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            dataKey={entry.value}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
            <div className="pie-info">
                <div
                    className="ssp-400"
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}
                >
                    <div
                        className="pie-color"
                        style={{ backgroundColor: "#0088FE", marginRight: "10px" }}
                    />
                    Won
                </div>
                <div
                    className="ssp-400"
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}
                >
                    <div
                        className="pie-color"
                        style={{ backgroundColor: "#00C49F", marginRight: "10px" }}
                    />
                    Lost
                </div>
                <div
                    className="ssp-400"
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}
                >
                    <div
                        className="pie-color"
                        style={{ backgroundColor: "#FFBB28", marginRight: "10px" }}
                    />
                    Draw
                </div>
            </div>
        </div>

    )
}