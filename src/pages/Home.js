import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import "/Users/choijinseo/Desktop/mainpage/src/App.css";
import Blogcard from "./Blogcard";
import { useState } from "react";

function Home() {
    const [number,setnumber] = useState(0);
    const trendcard=() => {
        setnumber(0);
    }
    const latestcard=() => {
        setnumber(7);
    }
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
                    <h2>MEGABRAIN BLOG</h2>
                    Welcome to blog, You could be the best blogger!
                </div>
            </Stack>
            <Stack direction="row" spacing={'5%'} justifyContent="space-between">
                    <Button color="inherit" onClick={trendcard}>TRENDING</Button>
                    <Button color="inherit" onClick={latestcard}>LATEST</Button>
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
                        sx={{width:'120px'}}
                    />
            </Stack>
        </div>
        <Blogcard cardnumber={number}/>
        </>
    )
}
export default Home;