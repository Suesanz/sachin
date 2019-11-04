import React, {Component} from 'react';
import dash from '../assets/sachin-tendulkar-god-of-cricket.jpg'
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
                                Sachin Tendulkar
                                <br/>
                                “Sachin Tendulkar is a former Indian cricketer, widely regarded to be the greatest
                                cricketer
                                of all time. - Wikipedia ”
                                <br/>
                                <Link className="btn btn-light" to="/details">Home</Link>
                                {/*<button >KNOW MORE</button>*/}
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}