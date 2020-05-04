import React from "react";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import PersonAdd from "@material-ui/icons/PersonAdd";
import VpnKey from "@material-ui/icons/VpnKey"
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";

import Tabs from "components/CustomTabs/CustomTabs.js";


// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import Button from "components/CustomButtons/Button.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";

export default function LogIn() {

    return (
        <div style={{ width: "50%", left: "25%" }}>
            <Tabs
                headerColor="success"
                tabs={[
                    {
                        tabName: "ENTRAR",
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
