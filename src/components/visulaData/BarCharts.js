import React from "react";
import * as Recharts from "recharts";
import {stadium} from "../../components/script";

const {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend} = Recharts;

export const BarCharts = props => {
    let result = stadium(props.team);
    return (
        <div>
                <span
                    className=""
                    style={{
                        position: "relative",
                        top: "-35px",
                        left: "-27px",
                        fontSize: "25px",
                        marginBottom: "10px",
                        color:"#00c45f",
                        fontWeight:"700"
                    }}
                >
        Stadium Stats
      </span>
            <BarChart width={900} height={350} data={result}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="ground"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="won" fill="#0088fe"/>
                <Bar dataKey="lost" fill="#00c45f"/>
            </BarChart>
        </div>

    )
}