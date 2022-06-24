import React from "react";
import '../css/bootstrap.min.css'
import Filtre from "../Filtre/Filtre";
function TableReserver() {
    return(
        <>
            <div className="row container-fluid col-12">
                <div className="col-12 col-md-4">
                    <Filtre/>
                </div>
                <table className="table col-12 col-md-8 mt-4 table-personal">
                    <thead>
                    <tr>
                        <th scope="col">ID Trajet</th>
                        <th scope="col">Départ</th>
                        <th scope="col">Arrivé</th>
                        <th scope="col">Date</th>
                        <th scope="col">Classe & Place disponible</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Antananarivo</td>
                        <td>Antsirabe</td>
                        <td>25/06/2022 06:25 PM</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Antsirabe</td>
                        <td>Fianarantsoa</td>
                        <td>25/06/2022 03:00 AM</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Antsirabe</td>
                        <td>Ambositra</td>
                        <td>27/06/2022 12:25 PM</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Antananarivo</td>
                        <td>Mahajanga</td>
                        <td>27/06/2022 12:30 PM</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Toamasina</td>
                        <td>Antananarivo</td>
                        <td>27/06/2022 02:30 PM</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default TableReserver;