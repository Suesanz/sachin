import React, {Component} from 'react';
import dash from '../assets/sachin-tendulkar-72a.jpg'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid first_sec">
                    <div className="row">
                        <div className="col logo">
                            <img className="img-fluid sachin" src={dash} alt="dash"/>
                        </div>
                    </div>
                    <div className="container sec_section">
                        <div className="row  card-img-overlay">
                            <div className="col">
                                <strong style={{fontSize: "5rem",color:"#F05E23"}}>Sachin Tendulkar</strong>
                                <br/>
                                <p/>
                                <i style={{color:"#ef8128"}} className="mt-4 pt-4">“Sachin Tendulkar is a former Indian  <br/> cricketer, widely
                                    regarded to be the greatest <br/>
                                    cricketer
                                    of all time. - Wikipedia ”</i>
                                <br/>
                                <Link className="btn btn-light" to="/details">Know More</Link>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}