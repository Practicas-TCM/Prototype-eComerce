import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button.js";

import React, { Component } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Carousel from 'react-material-ui-carousel'

// images
import bri1 from 'assets/img/brico1.png';
import bri2 from 'assets/img/brico2.png';
import bri3 from 'assets/img/brico3.png';
import bri4 from 'assets/img/brico4.png';

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

    var items = [
        {
            src: bri1,
            altText: 'Slide 1',
            caption: 'Slide 1'
        },
        {
            src: bri2,
            altText: 'Slide 2',
            caption: 'Slide 2'
        },
        {
            src: bri3,
            altText: 'Slide 3',
            caption: 'Slide 3'
        },
        {
            src: bri4,
            altText: 'Slide 3',
            caption: 'Slide 3'
        }
    ]

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="success">
                        <h2 className={classes.cardTitleWhite}
                            style={{ textAlignVertical: "center", textAlign: "center", }}> BricoCampus</h2>
                        <h4 className={classes.cardCategoryWhite} style={{ textAlignVertical: "center", textAlign: "center", }}>
                            Fes una ullada al món del bricolatge
                        </h4>
                    </CardHeader>
                    <CardBody >
                        <Carousel>
                            {
                                items.map(item =>  <img style={{width:"100%"}} src={item.src} alt={item.altText} />)
                            }
                        </Carousel>
                        <form>
                            <Button color="primary" style={styles.loginButtonSection} variant="btn btn-success" onClick={event => window.location.href = '/admin/products'}><div style={{padding:"20px"}}>Anar a la botiga ➜</div></Button>
                        </form>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
