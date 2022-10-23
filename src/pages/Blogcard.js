import React from "react";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "/Users/choijinseo/Desktop/mainpage/src/App.css";
import data from "../data.json";

function Blogcard(props) {
    return(
        <div className="grid">
            <Grid container direction="row" justifyContent="space-around" alignItems="baseline" spacing={5}>
                    <Grid item xs={12}>
                        <Card sx={{borderRadius:'20px'}}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {data.carddata[props.tnumber].title}
                                </Typography>
                                <Typography variant="body2">
                                    {data.carddata[props.tnumber].location}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                    <Stack direction="row" spacing={'3%'} justifyContent="space-between">
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.tnumber+1].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.tnumber+1].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.tnumber+2].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.tnumber+2].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.tnumber+3].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.tnumber+3].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.tnumber+4].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.tnumber+4].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={'3%'} justifyContent="space-between">
                            <Card sx={{borderRadius:'20px',width:"50%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.tnumber+5].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.tnumber+5].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"50%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.tnumber+6].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.tnumber+6].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
            </Grid>
        </div>
    );
}
export default Blogcard;