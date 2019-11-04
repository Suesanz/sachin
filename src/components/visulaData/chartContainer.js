import React from "react";

import {LineCharts} from "./LineCharts";
import {PieCharts} from "./PieCharts";
import {BarCharts} from "./BarCharts";
import back from '../../assets/76997.jpg'

export const Container = props => {
    return (
        <div>
            {/*<img className="back" src={back} alt="image" style={{position: "absolute"}}/>*/}
            <div className="">
                <header className=" pt-4 header">
                    Sachin <i> vs </i> {props.teams}
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