import React from "react";
import './FullPage.css'
import back from '../css/icons/back.png'

function FullPage() {
    return(
        <>
            <div className="container-fluid text-center m-0 p-0 heightperso" >
                <section className="container-textfull translateup jumbotron text-center mt-5">
                <h1 className="titlegreet">
                    <span>TokyTrans</span>
                    <span> Nouvelle </span>
                    <span> Plateforme numérique de voyage </span>
                </h1>

                <h2 className="titlegreet">
                    <span>Voyager</span>
                    <span> avec confort </span>
                    <span> et Sérénité </span>
                </h2>
            </section>
            </div>
        </>
    )

}
export default FullPage;