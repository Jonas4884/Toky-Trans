import React from "react";

export default function CheckBox(props) {

    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {props.name}
                    </label>
            </div>

        </>

    )

}