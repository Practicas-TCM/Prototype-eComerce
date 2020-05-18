import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import producte from "assets/img/faces/valla.jpg";
import { Link } from "react-router-dom";

export default function Cart() {
    const [qtt, setQtt] = React.useState(1);
    const minusOneProduct = () => {
        if (qtt > 1) {
            var actual = qtt - 1;
            setQtt(actual);
        }
    };

    const addOneProduct = () => {
        var actual = qtt + 1;
        setQtt(actual);
    };

    const imgValla = <img style={{ width: "90px" }} src={producte} alt="fence product" />;
    const desciptionValla = "Tanca de fusta clàssica 120x210";
    const priceValla = 39.99;
    const priceTransport = 15.50;
    const totalValla = Math.round((priceValla * qtt) * 100) / 100;
    const totalCompra = Math.round(((priceValla * qtt) + priceTransport) * 100) / 100;
    const quantityBox = <div> <span style={{ float: "left", cursor: "pointer" }} class="material-icons" onClick={() => addOneProduct()}>add_box</span>
        <div style={{ float: "left", marginLeft: "10px", marginRight: "10px" }}>{qtt}</div>
        <span style={{ cursor: "pointer" }} class="material-icons" onClick={() => minusOneProduct()}>indeterminate_check_box</span> </div>;

    const totalPrice = totalValla;

    return (
        <div>
            <GridContainer fluid>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <Table style={{ padding: "5px" }}
                            tableHeaderColor="primary"
                            tableHead={["ARTICLE", "", "PREU", "UNITATS", "TOTAL"]}
                            tableData={[
                                [imgValla, desciptionValla, priceValla + "€", quantityBox, totalValla + "€"],
                            ]}
                        />
                        <Button color="white" ><Link to={"/admin/products"}>{"Seguir comprant"}</Link></Button>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <div style={{ padding: "15px" }}>
                            <div >
                                <div style={{ backgroundColor: "palegreen" }}>
                                    <div style={{ float: "left", margin: "10px", height: "100%" }}>
                                        <span class="material-icons">done</span>
                                    </div>
                                    <div style={{ padding: "2px" }}>
                                        <span>Benvingut a Brico Campus! Enviament GRATUÏT en la teva primera comanda. Seleccioneu aquesta opció a l'finalitzar la compra.</span>
                                    </div>
                                </div>
                                <div style={{ marginTop: "10px", borderBottom: "grey 2px solid" }}></div>
                            </div>
                            <div style={{ margin: "20px", textAlign: "center" }}>
                                <span style={{ fontWeight: "bold", fontSize: "x-large" }}> TOTAL: {totalCompra} € </span> <br></br>
                                <span style={{ color: "grey" }}>(Enviament inclós)</span>
                            </div>

                            <div style={{ textAlign: "center" }}>
                                <Button color="warning" size="lg"> realitzar la comanda</Button>
                            </div>
                        </div>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
