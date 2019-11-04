import React, {Component, useState} from 'react';
import {Card} from '../components/card'
import {Container} from "./visulaData/chartContainer";
import './card.css'
export const Details = props => {
    const [currentTeam, setCurrentTeam] = useState("Australia")
    const setTeam = (data) => {
        setCurrentTeam(data.currentTarget.dataset.id)
    }
    return (
        <div>
        <div className="container-fluid team">

            <Card activeTeam={currentTeam}
                  changeTeam={setTeam}/>

        </div>
            <Container teams={currentTeam}/>
</div>
    );
}
