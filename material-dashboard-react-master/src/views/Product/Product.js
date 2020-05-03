import React from "react";
import Favorite from "@material-ui/icons/Favorite";
import Button from "components/CustomButtons/Button.js";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import Snackbar from "components/Snackbar/Snackbar.js";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";


export default function UserProfile() {
    const [open, setOpen] = React.useState(false);
    const [place, setPlace] = React.useState("tl");
    const [color, setColor] = React.useState("info");
    const showNotification = () => {
      if (open === false) {
        var rand = Math.floor(Math.random() * 5 + 1);
        var newColor;
        switch (rand) {
          case 1:
            newColor = "info";
            break;
          case 2:
            newColor = "success";
            break;
          case 3:
            newColor = "warning";
            break;
          case 4:
            newColor = "danger";
            break;
          case 5:
            newColor = "primary";
            break;
          default:
            break;
        }
        rand = Math.floor(Math.random() * 6 + 1);
        var newPlace;
        switch (rand) {
          case 1:
            newPlace = "tl";
            break;
          case 2:
            newPlace = "tc";
            break;
          case 3:
            newPlace = "tr";
            break;
          case 4:
            newPlace = "bl";
            break;
          case 5:
            newPlace = "bc";
            break;
          case 6:
            newPlace = "br";
            break;
          default:
            break;
        }
        setPlace(newPlace);
        setColor(newColor);
        setOpen(true);
        setTimeout(function() {
          setOpen(false);
        }, 10000);
      }
    };
    return (
        <div>
            <GridContainer fluid>
                <GridItem /*style={{width:"50%"}}*/ xs={12} sm={12} md={5}>
                    <Card>
                        <div>
                            HOLA CARACOLA  {" "}
                            <Button justIcon round color="danger" onClick={() => showNotification()}><Favorite /></Button>
                            <Snackbar
                                place={place}
                                color={color}
                                icon={AddAlert}
                                message="Has añadido a favoritos este producto."
                                open={open}
                                closeNotification={() => setOpen(false)}
                                close
                            />
                        </div>
                    </Card>
                </GridItem>
                <GridItem /*style={{width:"50%"}}*/ xs={12} sm={12} md={5}>
                    <Card>
                        <div>
                            HOLA PEPSICOLA
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




