import React from "react";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Grid from "@material-ui/core/Grid";
import Tabs from "components/CustomTabs/CustomTabs.js";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import Button from "components/CustomButtons/Button.js";
import Link from '@material-ui/core/Link';
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
//core components
import styles from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js";
const useStyles = makeStyles(styles);
// @material-ui/core components




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
                                            inputProps={{
                                                placeholder: "Email (*)"
                                            }}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            id="regular"
                                            inputProps={{
                                                placeholder: "Contrasenya (*)"
                                            }}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <div style={{ width: "100%", textAlign: "center" }}>
                                        <Link to="/product">He olvidat la meva contrasenya {"\n"}</Link>
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
                                            name="conta personal"
                                            aria-label="A"
                                            icon={<FiberManualRecord className={classes.radioUnchecked} />}
                                            checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                                            classes={{
                                                checked: classes.radio
                                            }}
                                        /> Personal<br></br>
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
                                            id="regular"
                                            inputProps={{
                                                placeholder: "Email (*)"
                                            }}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            id="regular"
                                            inputProps={{
                                                placeholder: "Contrasenya (*)"
                                            }}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            id="regular"

                                            inputProps={{
                                                placeholder: "SEGURETAT: Repeteix la contrasenya (*)"
                                            }}
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
                                    <div style={{ marginTop: "10px" }}>
                                        <span>He llegit i accepto </span>
                                        <Link to="/admin/user">la politica de privacitat {"\n"}</Link>
                                    </div>
                                    <Button style={{ width: "50%", left: "25%" }} type="button" color="success">REGISTRAR-SE</Button>

                                </Grid>
                            </div>
                        )
                    },
                ]}
            />
        </div>
    );

}
