import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArroDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import { bugs, website, server } from "variables/general.js";
import avatar from "assets/img/faces/marc.jpg";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <h3>Destacados</h3>
      <GridContainer>
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
