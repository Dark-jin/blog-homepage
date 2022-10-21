import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { CardContent, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import "/Users/choijinseo/Desktop/mainpage/src/App.css";

function Home() {
    return(
        <>
        <div>
            <Box sx={{flexGrow:1}}>
                <AppBar color="inherit" position="static" sx={{boxShadow:"none"}}>
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{flexGrow:1}}>
                            AllWrite
                        </Typography>
                        <Stack direction="row" spacing={3}>
                            <Button color="inherit">Sign in</Button>
                            <Button variant="contained" size="small" sx={{borderRadius:'20px',fontSize:10,m:1,p:1}}>Get started</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        <div className="grid">
            <Stack direction="cols" spacing={"5%"}>
                <div className="title">
                    <h3>MEGABRAIN BLOG</h3>
                    Welcome to blog, You could be the best blogger!
                </div>
            </Stack>
            <Stack direction="row" spacing={'5%'}>
                    <Button color="inherit">TRENDING</Button>
                    <Button color="inherit">LATEST</Button>
                    <Button color="inherit">React</Button>
                    <Button color="inherit">Spring</Button>
                    <Button color="inherit">Kurbernetes</Button>
                    <Button color="inherit">SSO</Button>
                    <TextField
                        required
                        id="Search"
                        label=""
                        defaultValue=""
                        size="small"
                        sx={{width:'110px'}}
                    />
            </Stack>
        </div>
        <div className="grid">
            <Grid container direction="row" justifyContent="space-around" alignItems="baseline" spacing={5}>
                    <Grid item xs={12}>
                        <Card sx={{borderRadius:'20px'}}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Spring Codebase
                                </Typography>
                                <Typography variant="body2">
                                    spring boot or spring cloud
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                    <Stack direction="row" spacing={'3%'} justifyContent="space-between">
                            <Card sx={{borderRadius:'20px'}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Spring Codebase
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Spring Codebase
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Spring Codebase
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Spring Codebase
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
                            <Card sx={{borderRadius:'20px'}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Spring Codebase
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Spring Codebase
                                    </Typography>
                                    <Typography variant="body2">
                                        spring boot or spring cloud
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Spring Codebase
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
        </>
    )
}
export default Home;