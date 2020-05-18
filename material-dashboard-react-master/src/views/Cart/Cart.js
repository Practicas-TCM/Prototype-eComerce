import React from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import producte from "assets/img/faces/valla.jpg";


export default function Cart() {
    return (
        <div>
            <GridContainer fluid>
                <GridItem xs={12} sm={12} md={7}>
                    <Card>
                        CARD 1
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={5}>
                    <Card>
                        <div>
                            <div style={{ backgroundColor: "palegreen" }}>
                                <div style={{ float: "left", margin: "10px" }}>
                                    <span class="material-icons">done</span>
                                </div>
                                <div>
                                    <span>Benvingut a Brico Campus! Enviament GRATUÏT en la teva primera comanda. Seleccioneu aquesta opció a l'finalitzar la compra.</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: "20px" }}>
                            <span style={{ fontWeight: "bold", fontSize: "x-large" }}> TOTAL: 20,72€ </span>
                        </div>
                        <Button color="warning" round> realitzar la comanda</Button>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
