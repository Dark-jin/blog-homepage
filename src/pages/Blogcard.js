import React from "react";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "/Users/choijinseo/Desktop/mainpage/src/App.css";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

function Blogcard(props) {
    const navigate = useNavigate();

    const check=()=>{
        if(props.cardnumber === 0)
        {
            navigate("/Blogmain");
        }
    }
    return(
        <div className="grid">
            <Grid container direction="row" justifyContent="space-around" alignItems="baseline" spacing={5}>
                    <Grid item xs={12}>
                        <Card sx={{borderRadius:'20px'}} onClick={check}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {data.carddata[props.cardnumber].title}
                                </Typography>
                                <Typography variant="body2">
                                    {data.carddata[props.cardnumber].making}<br/>
                                    {data.carddata[props.cardnumber].location}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                    <Stack direction="row" spacing={'3%'} justifyContent="space-between">
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.cardnumber+1].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.cardnumber+1].making}<br/>
                                        {data.carddata[props.cardnumber+1].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.cardnumber+2].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.cardnumber+2].making}<br/>
                                        {data.carddata[props.cardnumber+2].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.cardnumber+3].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.cardnumber+3].making}<br/>
                                        {data.carddata[props.cardnumber+3].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.cardnumber+4].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.cardnumber+4].making}<br/>
                                        {data.carddata[props.cardnumber+4].location}
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
                                        {data.carddata[props.cardnumber+5].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.cardnumber+4].making}<br/>
                                        {data.carddata[props.cardnumber+4].location}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"50%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.carddata[props.cardnumber+6].title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.carddata[props.cardnumber+6].making}<br/>
                                        {data.carddata[props.cardnumber+6].location}
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