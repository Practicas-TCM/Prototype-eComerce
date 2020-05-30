import React from "react";
import Favorite from "@material-ui/icons/Favorite";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "components/Snackbar/Snackbar.js";
import producte from "assets/img/faces/cortacesped.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

export default function Cortacesped() {
  const [qtt, setQtt] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const [likeProduct, setLikeProduct] = React.useState(false);
  const [place, setPlace] = React.useState("bc");
  const [color, setColor] = React.useState("info");
  const [message, setMessage] = React.useState("");

  const [openCarrito, setOpenCarrito] = React.useState(false);
   const [likeProductCarrito, setLikeProductCarrito] = React.useState(false);
  const [placeCarrito, setPlaceCarrito] = React.useState("bc");
  const [colorCarrito, setColorCarrito] = React.useState("info");
  const [messageCarrito, setMessageCarrito] = React.useState("");

  const showNotification = () => {
    if (open === false && likeProduct === false) {
      setMessage("Has afegit a preferits el producte.")
      setPlace("bc");
      setColor("success");
      setOpen(true);
      setLikeProduct(true);
      setTimeout(function () {
        setOpen(false);
      }, 5000);
    }
    else if (open === false && likeProduct === true) {
      setMessage("Has retirat de preferits el producte.")
      setPlace("bc");
      setColor("warning");
      setOpen(true);
      setLikeProduct(false);
      setTimeout(function () {
        setOpen(false);
      }, 5000);
    }
  };

  const showNotificationCarrito = () => {
    if (openCarrito === false && likeProductCarrito === false) {
      setMessageCarrito("Has afegit al carret el producte.")
      setPlaceCarrito("bc");
      setColorCarrito("success");
      setOpenCarrito(true);
      setLikeProductCarrito(true);
      setTimeout(function () {
        setOpenCarrito(false);
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
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <div>
      <GridContainer fluid>
        <GridItem xs={12} sm={12} md={5}>
          {/* CARD 1 */}
          <Card>
            {/* IMATGE PRODUCTE  */}
            <div style={{ textAlign: "center" }}>
              <img style={{ width: "70%" }} src={producte} alt="fence product" />
            </div>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          {/*CARD 2*/}
          <Card>
            <div style={{ margin: "20px" }}>
              <div>
                <h3 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>Cortacesped{"\n"}</h3>

                {/*ZONA PREUS*/}
                <div>
                  <span style={{ color: "red", fontSize: "xxx-large" }}>224,99 €</span>
                  <span style={{ color: "grey" }}>SENSE IVA: 185,94 €</span><br></br><br></br>
                </div>
              </div>

              {/*ZONA DETALLS PRINCIPALS*/}
              <div style={{ fontWeight: "bold" }}>
                <span>Enviament:</span> <span style={{ color: "red" }}> Gratuït</span><br></br>
                <span>Marca: GREENCUT</span> <br></br>
                <span style={{ float: "left", marginRight: "10px" }}>Quantitat: </span>
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
                
                <Button color="info" round onClick={() => showNotificationCarrito()}><span class="material-icons">shopping_cart</span> Afegir al carret</Button>
                <Snackbar
                  place={placeCarrito}
                  color={colorCarrito}
                  icon={AddAlert}
                  message={messageCarrito}
                  open={openCarrito}
                  closeNotification={() => setOpenCarrito(false)}
                  close
                />
                <Link  to={"/admin/cart"}>{<Button color="warning" round><span class="material-icons">done</span> Comprar </Button>}</Link>

              </div>

              <div style={{ float: "left" }}>
                <Checkbox
                  tabIndex={-1}
                  onClick={() => handleToggle(1)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked
                  }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Garantia per rotura i dany accidental +1 any</span>
              </div>

            </div>
          </Card>

        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
          {/* CARD 3 */}
          <Card>
            <div style={{ margin: "20px" }}>
              <div>
                <span style={{ fontWeight: "bold" }}> DESCRIPCIÓ </span><br></br>
                El GLM590X és un tallagespa autopropulsat de gasolina amb un ample de tall de 410mm i un potent motor de 4,5cv, dissenyat per a usuaris particulars que desitgen facilitat d'ús i uns resultats de tall professionals.
              </div>
              {/* TAULA DETALLS DEL PRODUCTE  */}
              <div style={{ textAlign: "center" }}>
                <Table
                  tableData={[
                    ["Marca", "GREENCUT"],
                    ["Tipus", "Cortacesped"],
                    ["Potencia", "4,5cv / 2800RPM"],
                    ["Altura", "120 cm"],
                    ["Nivell d'audio", "96db(A)"],
                    ["Referencia Botiga", "ME12737490"],
                    ["Referencia Venedor", "GLM590X"]
                  ]}
                />
              </div>
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>

  );

}

//https://www.manomano.es/p/cortacesped-gasolina-16-con-traccion-139cc-4cv-chasis-acero-greencut-12737490
