import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import producteHidronetejadora from "assets/img/faces/Hidronetejadora.jpg";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <h3>Els més venuts</h3>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="">
              <CardAvatar profile>
                <a href="" onClick={e => e.preventDefault()}>
                  <img src={producteHidronetejadora} alt="Hidronetejadora " />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>Hidronetejadora</h3>
              <h4 className={classes.cardTitle}>
              299,99€ 
              </h4>
              <p className={classes.cardCategory}>
              MOTOR: 4 Temps, CILINDRADA: 208 cc, POTÈNCIA: 4,1 KW / 5,57 Hp, PRESSIÓ MAX: 3100 psi (213 bar), CABAL MAX: 570 l / h- 2,51 gpm, TIPUS DE BOMBA: Capçal alumini, . . .
              </p>
            </CardBody>
            <CardFooter chart>
            <div className={classes.stats}>
                <Danger>
                  <Warning />0 unitats!!
                </Danger>
              </div>
            </CardFooter>
            <CardFooter chart>
              <div className={classes.stats}>
               Actualment no es pot accedir a aquest producte.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
         </GridContainer>
    </div>
  );
}
