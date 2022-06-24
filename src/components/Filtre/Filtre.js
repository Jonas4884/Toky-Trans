import React from "react";
import '../css/bootstrap.min.css'
import CheckBox from "../Reserver/list";


function Filtre() {
    return (
        <>
            <p className="pl-3 mt-4 h6">Filtre</p>
            <div className="container-fluid m-0 p-0">
                <div className=" ">
                    <div className="d-block">
                        <div className="card border-light mb-3">
                            <div className="card-header">Horaires</div>
                            <div className="card-body">
                                <CheckBox name="Matin"/>
                                <CheckBox name="Midi"/>
                                <CheckBox name="Apres-midi"/>
                                <CheckBox name="Soir"/>
                            </div>
                        </div>
                        <div className="flex-column">
                            <div className="card border-light mb-3">
                                <div className="card-header">Classes</div>
                                <div className="card-body">
                                    <CheckBox name="LITE"/>
                                    <CheckBox name="PREMIUM"/>
                                </div>
                            </div>
                    </div>




                    </div>

                </div>
            </div>
            </>
    )
}
export default Filtre;

