import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button.js";

import React, { Component } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import bri1 from 'assets/img/bri1.jpg';

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    loginButtonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const useStyles = makeStyles(styles);

export default function TableList() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="success">
                        <h2 className={classes.cardTitleWhite}
                            style={{textAlignVertical: "center", textAlign: "center",}}> BricoCampus</h2>
                        <h4 className={classes.cardCategoryWhite} style={{textAlignVertical: "center", textAlign: "center",}}>
                            Fes una ullada al món del bricolatge
                        </h4>
                    </CardHeader>
                    <CardBody >
                        <img className="photo" src={bri1} alt="Logo"/>

                        <form>
                            <Button color = "primary"  style={styles.loginButtonSection} variant="btn btn-success" onClick={event =>  window.location.href='/admin/products'}>Anar a la botiga ➜</Button>
                        </form>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>

    );
}
