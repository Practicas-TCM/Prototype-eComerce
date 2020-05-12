import React from "react";

export default function Company() {

    return (
        <div>
            <ul>
                <li type="square"><span style={{ fontWeight: "bolder" }}>ASSIGNATURA: </span>
                    <span>Laboratori del software</span>
                </li>
                <li type="square"><span style={{ fontWeight: "bolder" }}>CURS: </span>
                    <span>2019 / 2020</span>
                </li>
                <li type="square"><span style={{ fontWeight: "bolder" }}>PROFESSOR: </span>
                    <span>Jordi Boix Baró</span>
                </li>
                <li type="square"><span style={{ fontWeight: "bolder" }}>ALUMNES: </span>
                    <ul>
                        <li type="circle">Judith Barberán Martín</li>
                        <li type="circle">Meritxell Llop Ventura</li>
                        <li type="circle">Xavier Vidal Domínguez</li>
                    </ul>
                </li>
                <li type="square"><span style={{ fontWeight: "bolder" }}>ENUNCIAT: </span> <br></br>
                    <p>El projecte prototype té com objectiu potenciar l’autoaprenentatge i la possibilitat d’aprendre noves tecnologies que possiblement no es poden ensenyar a la carrera, per falta de temps o per ser molt específiques.
                    </p>
                    <p>Es tracta d’un petit projecte de temàtica oberta que es realitzarà amb el mateix grup de pràctiques que el projecte en grup.
                    </p>
                    <p>Cada grup ha d’escollir una tecnologia i el seu repte. Disposarà d’un mes per fer un petit prototip amb aquesta tecnologia i l’haurà de presentar a la classe fent una petita demostració. Es recomana utilitzar tecnologia no treballada fins ara a classe.
                    </p>
                </li>
                <li type="square"><span style={{ fontWeight: "bolder" }}>PROPOSTA: </span> <span>eComerce</span> <br></br>
                    <span>¿?¿?</span>
                </li>
            </ul>
        </div>

    );
}
