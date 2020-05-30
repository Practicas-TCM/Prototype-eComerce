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
import producte from "assets/img/faces/jardineraRectangular.jpg";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Jardinera() {
  const [qtt, setQtt] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const [likeProduct, setLikeProduct] = React.useState(false);
  const [place, setPlace] = React.useState("bc");
  const [color, setColor] = React.useState("info");
  const [message, setMessage] = React.useState("");

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
                <h3 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>Jardinera Rectangular{"\n"}</h3>

                {/*ZONA PREUS*/}
                <div>
                  <span style={{ color: "red", fontSize: "xxx-large" }}>26,00 €</span>
                  <span style={{ color: "grey" }}>SENSE IVA: 21,48 €</span><br></br><br></br>
                </div>
              </div>

              {/*ZONA DETALLS PRINCIPALS*/}
              <div style={{ fontWeight: "bold" }}>
                <span>Enviament:</span> <span style={{ color: "red" }}> 16,00€</span><br></br>
                <span>Marca: FRAMUSA</span> <br></br>
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

                <Button color="info" round><span class="material-icons">shopping_cart</span> Afegir al carret</Button>

                <Button color="warning" round><span class="material-icons">done</span> Comprar </Button>
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
                Fabricats en formigó alleugerit amb parets més fines i amb resistència màxima. Els colors NATURAL són tintes naturals aplicades amb productes sintètics, donant-li una resistència màxima a la intempèrie (pluja, Raïm, etc) COLORS DISPONIBLES: Blanc, ocre, verd, gris i ciment. Color Arlequin: Òxid, Cendra. MESURES: 80x17x19cm (LARGOXANCHOXALTO) CAPACITAT: 16L. PES: 20 KG.
              </div>
              {/* TAULA DETALLS DEL PRODUCTE  */}
              <div style={{ textAlign: "center" }}>
                <Table
                  tableData={[
                    ["Marca", "FRAMUSA"],
                    ["Tipus", "Jardinera"],
                    ["Forma", "Rectangular"],
                    ["Color", "Beige"],
                    ["Uso", "Exterior"],
                    ["Referencia Botiga", "ME2855067"],
                    ["Referencia Venedor", "FUT8017CEME"]
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

//https://www.manomano.es/p/jardinera-rectangular-futura-80x17x19cm-disponible-en-diferentes-colores-2855062?model_id=2855067
