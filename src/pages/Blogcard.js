import React from "react";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "/Users/choijinseo/Desktop/mainpage/src/App.css";

function Blogcard() {
    return(
        <div className="grid">
            <Grid container direction="row" justifyContent="space-around" alignItems="baseline" spacing={5}>
                    <Grid item xs={12}>
                        <Card sx={{borderRadius:'20px'}}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Blog name
                                </Typography>
                                <Typography variant="body2">
                                    spring boot or spring cloud
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                    <Stack direction="row" spacing={'3%'} justifyContent="space-between">
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Blog name
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Blog name
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Blog name
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"30%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Blog name
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
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
                                        Blog name
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px',width:"50%",height:"30%"}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Blog name
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
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