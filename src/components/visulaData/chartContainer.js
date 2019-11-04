import React from "react";

import {LineCharts} from "./LineCharts";
import {PieCharts} from "./PieCharts";
import {BarCharts} from "./BarCharts";


export const Container = props => {
    return (
        <div>
            <div className="">
                <header className=" pt-4 header">
                    <span style={{color:"#F05E23"}}> Sachin</span> <i style={{color:"#F05E23"}}> vs </i> <span className="teams">{props.teams}</span>
                </header>
                <div className="container-fluid chart">
                    <div className="row">
                        <div className="col line-chart">
                            <LineCharts team={props.teams}/>

                        </div>
                        <div className="col pie-chart">
                            <PieCharts team={props.teams}/>
                        </div>
                    </div>

                </div>

                <div className="container bar-chart">
                    <BarCharts team={props.teams}/>
                </div>

            </div>

        </div>
    )
}