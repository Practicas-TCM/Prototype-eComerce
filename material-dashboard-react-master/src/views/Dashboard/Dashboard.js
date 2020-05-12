import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import ArroDownward from "@material-ui/icons/ArrowDownward";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import avatar from "assets/img/faces/marc.jpg";
import { Link } from "react-router-dom";
import producteValla from "assets/img/faces/valla.jpg";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <h3>Destacats</h3>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardAvatar profile>
                <a href="" onClick={e => e.preventDefault()}>
                  <img src={producteValla} alt="Tanca de fusta classica 120 x 210 " />
                </a>
              </CardAvatar>
              <h3 className={classes.cardTitle}>
                  Tanca fusta 
              </h3>
              <p className={classes.cardCategory}>30,99 <small>€</small></p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
               <Link to={"/admin/product"}>{"Ver producto"}</Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <p className={classes.cardCategory}>PRODUCT NAME1</p>
              <h3 className={classes.cardTitle}>
                00,00 <small>€</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <p className={classes.cardCategory}>PRODUCT NAME1</p>
              <h3 className={classes.cardTitle}>
                00,00 <small>€</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <p className={classes.cardCategory}>PRODUCT NAME1</p>
              <h3 className={classes.cardTitle}>
                00,00 <small>€</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <h3>Productos</h3>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <CardAvatar profile>
                <a href="" onClick={e => e.preventDefault()}>
                  <img src={producteValla} alt="Tanca de fusta classica 120 x 210 " />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Tanca fusta classica</h3>
              <h4 className={classes.cardTitle}>
                30,99 / 
                <small>
                <span className={classes.stats}>
                  <Danger>
                  <strike> 00,00</strike>
                  </Danger>
                  </span> €
                  <span className={classes.successText}>
                    <ArroDownward className={classes.upArrowCardCategory} /> 50%
                  </span>{" "}
                descuento.
                </small>
              </h4>
              <p className={classes.cardCategory}>
              Tanca de fusta classica 120 x 210 
              Fabricada en fusta de pi amb tractament en autoclau.
              Jarbric ofereix una àmplia gamma ...
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Danger>
                  <Warning />Quedan 5 unidades!!
                </Danger>
              </div>
            </CardFooter>
            <CardFooter chart>
              <div className={classes.stats}>
               <Link to={"/admin/product"}>{"Ver producto"}</Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Product Name 1</h3>
              <p className={classes.cardCategory}>
              <h4 className={classes.cardTitle}>
                00,00 / 
                <small>
                <span className={classes.stats}>
                  <Danger>
                  <strike> 00,00</strike>
                  </Danger>
                  </span> €
                  <span className={classes.successText}>
                    <ArroDownward className={classes.upArrowCardCategory} /> 50%
                  </span>{" "}
                descuento.
                </small>
              </h4>
              </p>
              <p>
              Product description Product description Product description Product description Product description  . . .
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Danger>
                  <Warning />Quedan 5 unidades!!
                </Danger>
              </div>
            </CardFooter>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Product Name 1</h3>
              <p className={classes.cardCategory}>
              <h4 className={classes.cardTitle}>
                00,00 / 
                <small>
                <span className={classes.stats}>
                  <Danger>
                  <strike> 00,00</strike>
                  </Danger>
                  </span> €
                  <span className={classes.successText}>
                    <ArroDownward className={classes.upArrowCardCategory} /> 50%
                  </span>{" "}
                descuento.
                </small>
              </h4>
              </p>
              <p>
              Product description Product description Product description Product description Product description  . . .
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Danger>
                  <Warning />Quedan 5 unidades!!
                </Danger>
              </div>
            </CardFooter>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Product Name 1</h3>
              <p className={classes.cardCategory}>
              <h4 className={classes.cardTitle}>
                00,00 / 
                <small>
                <span className={classes.stats}>
                  <Danger>
                  <strike> 00,00</strike>
                  </Danger>
                  </span> €
                  <span className={classes.successText}>
                    <ArroDownward className={classes.upArrowCardCategory} /> 50%
                  </span>{" "}
                descuento.
                </small>
              </h4>
              </p>
              <p>
              Product description Product description Product description Product description Product description  . . .
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Danger>
                  <Warning />Quedan 5 unidades!!
                </Danger>
              </div>
            </CardFooter>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Product Name 1</h3>
              <p className={classes.cardCategory}>
              <h4 className={classes.cardTitle}>
                00,00 / 
                <small>
                <span className={classes.stats}>
                  <Danger>
                  <strike> 00,00</strike>
                  </Danger>
                  </span> €
                  <span className={classes.successText}>
                    <ArroDownward className={classes.upArrowCardCategory} /> 50%
                  </span>{" "}
                descuento.
                </small>
              </h4>
              </p>
              <p>
              Product description Product description Product description Product description Product description  . . .
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Danger>
                  <Warning />Quedan 5 unidades!!
                </Danger>
              </div>
            </CardFooter>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Product Name 1</h3>
              <p className={classes.cardCategory}>
              <h4 className={classes.cardTitle}>
                00,00 / 
                <small>
                <span className={classes.stats}>
                  <Danger>
                  <strike> 00,00</strike>
                  </Danger>
                  </span> €
                  <span className={classes.successText}>
                    <ArroDownward className={classes.upArrowCardCategory} /> 50%
                  </span>{" "}
                descuento.
                </small>
              </h4>
              </p>
              <p>
              Product description Product description Product description Product description Product description  . . .
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Danger>
                  <Warning />Quedan 5 unidades!!
                </Danger>
              </div>
            </CardFooter>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="#product1" onClick={e => e.preventDefault()}>
                  Ver producto
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
