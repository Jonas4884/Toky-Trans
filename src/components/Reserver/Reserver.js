import React from "react";
import CheckBox from "./list";
import '../css/bootstrap.min.css';
import './Reserver.css'
import InputParameter from "./Input";
import Tablereserver from "../Tablereserver/Tablereserver";

function Reserver() {
    return (
        <>
            <div className="mille container-fluid">
                <h2 className="text-info">Votre reservation,sans déplacement</h2>
                <div className="row">
                  <InputParameter name={"Ville de départ"} type={"text"} placeholder={"Antananarivo,Ambatondrazaka,..."}  />
                  <InputParameter name={"Ville d'arrivé"} type={"text"} placeholder={"Antananarivo,Ambatondrazaka,..."}  />
                  <InputParameter name={"Date de départ"} type={"date"}  />
                  <InputParameter name={"Place à reserver"} type={"number"}  />
                    <button className="text-body btn-info rounded-sm totalserved mt-4.2 ml-3">Reserver</button>

                </div>
                <div className="apple">
                    <input className="switch" type="checkbox"></input>Activer pour une option vacances
                </div>

            </div>

        </>
    )

}

export default Reserver;