import React from 'react';
import {teams} from './script'
import './card.css'

export const Card = props => {
    const teamsList = teams();
    return teamsList.map((item, i) => {
        if (props.activeTeam === item.teamName) {
            return (
                <div className="container-fluid   card_sec">
                    <li
                        className="team-card team-card-appear"
                        value="name"
                        key={i}
                        onClick={props.changeTeam}
                        data-id={item.teamName}
                        style={{
                            animationDelay: `${i * 40}ms`,
                            // minHeight: "110px",
                            borderBottom: "5px solid #2F82EC"
                        }}
                    >
                        <p className=" team-name" style={{fontSize: "26px"}}>
                            {item.teamName}
                        </p>
                        {item.matches === 1 ? (
                            <span className=" matches"><strong>{item.matches}
                                <br/>
                              match</strong></span>
                        ) : (
                            <span className=" matches"><strong>{item.matches}
                                <br/>
                                matches</strong></span>
                        )}
                    </li>

                </div>
            );
        }
        return (
            <div className="container card_sec">
                <li
                    className="team-card team-card-appear"
                    value="name"
                    key={i}
                    onClick={props.changeTeam}
                    data-id={item.teamName}
                    style={{
                        animationDelay: `${i * 40}ms`
                    }}
                >
                    <p className=" team-name">{item.teamName}</p>
                    {item.matches === 1 ? (
                        <span className=" matches">{item.matches} <br/> match</span>
                    ) : (
                        <span className=" matches">{item.matches} <br/>matches</span>
                    )}
                </li>

            </div>
        );
    });
};