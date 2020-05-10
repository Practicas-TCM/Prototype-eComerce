import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Tabs from "components/CustomTabs/CustomTabs.js";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Person from "@material-ui/icons/Person";
import Check from "@material-ui/icons/Check";
import PersonAdd from "@material-ui/icons/PersonAdd";
//core components
import styles from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js";

const useStyles = makeStyles(styles);
export default function LogIn() {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState(null);

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
        <div style={{ width: "50%", left: "25%" }}>
            <Tabs
                headerColor="success"
                tabs={[
                    {
                        tabName: " ENTRAR ",
                        tabIcon: Person,
                        tabContent: (
                            <div>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            id="regular"
                                            labelText="Email (*)"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            id="regular"
                                            labelText="Contrasenya (*)"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <div style={{ width: "100%", textAlign: "center" }}>
                                        <Link to={"/admin/user"}>{"He olvidat la meva contrasenya"}</Link>
                                    </div>
                                    <Button style={{ width: "50%", left: "25%" }} type="button" color="success">ENTRAR</Button>
                                </Grid>
                            </div>
                        )
                    },
                    {
                        tabName: "REGISTRAR-SE",
                        tabIcon: PersonAdd,
                        tabContent: (
                            <div>

                                <Grid container>
                                    <GridItem>
                                        <span>Sóc: </span> <br></br>
                                        <Radio
                                            checked={selectedValue === "a"}
                                            onChange={() => setSelectedValue("a")}
                                            value="a"
                                            name="conta particular"
                                            aria-label="A"
                                            icon={<FiberManualRecord className={classes.radioUnchecked} />}
                                            checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        /> Particular <br></br>
                                        <Radio
                                            checked={selectedValue === "b"}
                                            onChange={() => setSelectedValue("b")}
                                            value="b"
                                            name="conta d'empresa"
                                            aria-label="B"
                                            icon={<FiberManualRecord className={classes.radioUnchecked} />}
                                            checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        /> Empresa o organització
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={12}>

                                        <CustomInput
                                            id="first-name"
                                            labelText="Nom (*)"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={12}>

                                        <CustomInput
                                            id="surnames"
                                            labelText="Cognoms (*)"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={12}>

                                        <CustomInput
                                            id="float"
                                            labelText="Email (*)"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            id="regular"
                                            labelText="Contrasenya (*)"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            id="regular"
                                            labelText="SEGURETAT: Repeteix la contrasenya (*)"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
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
                                    <div style={{ width: "85%", marginTop: "10px" }}>
                                        <span>He llegit i accepto </span>
                                        <a
                                            href="https://www.aepd.es/es/politica-de-privacidad-y-aviso-legal"
                                            target="_blank"
                                            className={classes.a}
                                        >
                                            politica de privacitat
                                        </a>
                                    </div>
                                    <div>
                                        <Button style={{ with: "relative", textAlign: "center" }} type="button" color="success">REGISTRAR-SE</Button>
                                    </div>
                                </Grid>
                            </div>
                        )
                    },
                ]}
            />
        </div>
    );
}
