
import React, { Component } from "react";
import { Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import Button from "components/CustomButtons/Button.js";

import bri1 from 'assets/img/brico1.png';
import bri2 from 'assets/img/brico2.png';
import bri3 from 'assets/img/brico3.png';

export default function TableList() {

    var items = [
        {
            src: bri1,
            altText: 'Slide 1',
            caption: 'Slide 1'
        },
        {
            src: bri2,
            altText: 'Slide 2',
            caption: 'Slide 2'
        },
        {
            src: bri3,
            altText: 'Slide 3',
            caption: 'Slide 3'
        }
    ]

    return (
        <Carousel>
            {
                items.map(item => <img style={{width:"100%"}} src={item.src} alt={item.altText} />)
            }
        </Carousel>

    );

    function Item(props) {
        return (
            <Paper>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
            </Button>
            </Paper>
        )
    }
}