import React from "react";
import Favorite from "@material-ui/icons/Favorite";
import Button from "components/CustomButtons/Button.js";

import InputGroup from 'react-bootstrap/InputGroup'

import Table from "components/Table/Table.js";

import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import Snackbar from "components/Snackbar/Snackbar.js";

// core components
import producte from "assets/img/faces/valla.jpg";

import { makeStyles } from "@material-ui/core/styles";

import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";



const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);


export default function UserProfile() {
  const [qtt, setQtt] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const [likeProduct, setLikeProduct] = React.useState(false);
  const [place, setPlace] = React.useState("bc");
  const [color, setColor] = React.useState("info");
  const [message, setMessage] = React.useState("Has afegit a preferits el producte.");
  const showNotification = () => {
    if (open === false && likeProduct === false) {
      var newColor = "success";
      var newPlace = "bc";

      setPlace(newPlace);
      setColor(newColor);
      setOpen(true);
      setLikeProduct(true);
      setTimeout(function () {
        setOpen(false);
      }, 5000);
    }
    else if (open === false && likeProduct === true) {
      newColor = "warning";
      newPlace = "bc";

      setMessage("Has retirat de preferits el producte.")
      setPlace(newPlace);
      setColor(newColor);
      setOpen(true);
      setLikeProduct(false);
      setTimeout(function () {
        setOpen(false);
      }, 5000);
    }
  };

  const minusOneProduct = () => {
    if (qtt >= 1) {
      var actual = qtt - 1;
      setQtt(actual);
    }
  };

  const addOneProduct = () => {

    var actual = qtt + 1;
    setQtt(actual);

  };

  const classes = useStyles();
  return (
    <div>
      <GridContainer fluid>
        <GridItem /*style={{width:"50%"}}*/ xs={12} sm={12} md={5}>
          {/* CARD 1 */}
          <Card>
            {/* IMATGE PRODUCTE  */}
            <div style={{ textAlign: "center" }}>
              <img style={{ width: "70%" }} src={producte} alt="fence product" />
            </div>
          </Card>
        </GridItem>
        <GridItem /*style={{width:"50%"}}*/ xs={12} sm={12} md={5}>
          {/*CARD 2*/}
          <Card>
            <div style={{ margin: "20px" }}>
              <div>
                <h3 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>Valla de fusta classica 120 x 210 {"\n"}</h3>

                {/*ZONA PREUS*/}
                <div>
                  <span style={{ color: "red", fontSize: "xxx-large" }}>30,99€ </span>
                  <span style={{ color: "grey" }}>SENSE IVA: 25,67€</span><br></br><br></br>
                </div>
              </div>

              {/*ZONA DETALLS PRINCIPALS*/}
              <div style={{ fontWeight: "bold" }}>
                <span>Enviament:</span> <span style={{ color: "red" }}> 15,50€</span><br></br>
                <span>Marca: JARBRIC</span> <br></br>
                <span>Models disponibles:</span> <br></br>
                <span style={{ float: "left", }}>Quantitat: </span>
                <span style={{ float: "left", cursor: "pointer" }} class="material-icons" onClick={() => addOneProduct()}>add_box</span>
                <div style={{ float: "left", marginLeft: "10px", marginRight: "10px" }}>{qtt}</div>
                <span style={{ cursor: "pointer" }} class="material-icons" onClick={() => minusOneProduct()}>indeterminate_check_box</span>

              </div>

              {/*ZONA BOTONS*/}
              <div style={{ textAlign: "center" }}>
                <Button justIcon round color="danger" onClick={() => showNotification()}><Favorite /></Button>
                <Snackbar
                  place={place}
                  color={color}
                  icon={AddAlert}
                  message={message}
                  open={open}
                  closeNotification={() => setOpen(false)}
                  close
                />

                <Button color="info" round><span class="material-icons">shopping_cart</span> Afegir al carret</Button>

                <Button color="warning" round><span class="material-icons">done</span> Comprar </Button>
              </div>

            </div>
          </Card>

        </GridItem>
        <GridItem /*style={{width:"50%"}}*/ xs={12} sm={12} md={10}>
          {/* CARD 3 */}
          <Card>
            {/* TAULA DETALLS DEL PRODUCTE  */}
            <div style={{ textAlign: "center" }}>
            <Table
                tableHeaderColor="primary"
                
                tableData={[
                  ["Dakota Rice", "Niger"],
                  ["Minerva Hooper", "Curaçao"],
                  ["Sage Rodriguez", "Netherlands"],
                  ["Philip Chaney", "Korea, South"],
                  ["Doris Greene", "Malawi"],
                  ["Mason Porter", "Chile"]
                ]}
              />
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>

  );

}


// or less ideally
// import { Row, Col } from 'react-bootstrap';

// export default class Product extends React.Component {
//     render() {
//       return (
//         <Row>
//         <Col>
//         <div>
//               HOLA PEPSICOLA {this.props.name}
//             </div>
//         </Col>
//         <Col>
//         <div>
//               HOLA CARACOLA {this.props.name}
//             </div>
//         </Col>
//       </Row>
//       );
//     }
//   }



//https://www.manomano.es/p/valla-madera-clasica-lama-rayada-11959666?model_id=11959669
