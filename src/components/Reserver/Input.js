import React from "react";
import '../css/bootstrap.min.css';

export default function InputParameter(props){
    return(
        <>
            <div className="ml-4">
                <label>
                    <>{props.name}</>
                    <input type={props.type} className="form-control" placeholder={props.description} aria-label="place à reserver"></input>
                </label>
            </div>
        </>
    )
}
