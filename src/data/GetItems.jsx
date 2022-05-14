import * as React from "react";
import { Grid } from '@mui/material';
import Times from './times.json';
import generateKey from './generateKey';

const GetItems = () => {
    const hours = Times.hours;

    const [currNum, setCurrNum] = React.useState(new Date().getHours());

    React.useEffect(() => {
        const interval = setInterval(() => setCurrNum(new Date().getHours()), 10000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    let items = [];

    for (let i = 0; i < hours.length-1; i++) {
        const key1 = generateKey();
        const key2 = generateKey();

        let currentColor = "transparent";
        if (currNum === hours[i].num && currNum !== 0) {
            currentColor = "#04aa6d";
        }

        if (i === 0) {
            items.push(
                [<Grid item xs={1} style={{height: "44px", width: "1px", backgroundColor: currentColor, borderBottom: "1px solid #eeeeee", borderTop: "1px solid #eeeeee"}} key={key1}>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"50%", marginLeft: "50%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                </Grid>,
                <Grid item xs={11} style={{height: "44px", backgroundColor: "transparent", borderBottom: "1px solid #eeeeee", borderTop: "1px solid #eeeeee", borderRight: "1px solid #eeeeee"}} key={key2}></Grid>]
            );
        } else {
            items.push(
                [<Grid item xs={1} style={{height: "44px", width: "1px", backgroundColor: currentColor, borderBottom: "1px solid #eeeeee"}} key={key1}>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"50%", marginLeft: "50%", borderBottom: "1px solid #eeeeee"}}></div>
                    <div style={{height: "10px", width:"25%", marginLeft: "75%", borderBottom: "1px solid #eeeeee"}}></div>
                </Grid>,
                <Grid item xs={11} style={{height: "44px", backgroundColor: "transparent", borderBottom: "1px solid #eeeeee", borderRight: "1px solid #eeeeee"}} key={key2}></Grid>]
            );
        }
    }

    const key3 = generateKey();
    items.unshift(
        <Grid item xs={12} style={{height: "12px"}} key={key3}></Grid>
    );

    return items;
}

export default GetItems;