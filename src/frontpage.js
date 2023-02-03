import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material';
import './css/firstpage.css';

function Firstpage(){
    const navigate = useNavigate();
    return(
        <div className="firstpage">
            <div className="p1">
                <center>
                    <h3 className="h3fp">YOU'RE HERE!</h3>
                    <h1 className="h1fp">X8 CUSTOMS</h1>
                    <h5 className="h5fp">We build the biggest, strongest and most unique machines across the world.</h5><br/><br/><br/>
                    <button className="explorebtn" >EXPLORE</button>
                </center>
            </div>
        </div>
    )
}
export default Firstpage;