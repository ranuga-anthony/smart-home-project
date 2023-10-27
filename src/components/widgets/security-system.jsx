import { useState } from "react";
import PropTypes from "prop-types";
import s from "./security-system.module.css";
import { PowerIcon } from "@heroicons/react/24/outline";


function SecuritySystem(){

    const [systemCondition, setsystemCondition] = useState(false);

    const state = systemCondition ? "ON" : "OFF";

    const handleClick = () => {
        setsystemCondition(!systemCondition);
    };
   
    return(
        <div className = {systemCondition? s.security_system_on:s.security_system_off}>
            <h2 className={s.security_system_title}> Internal Security System <br></br></h2>
            <br></br>
            <h3 className={s.state}>{state}</h3>
            <button 
                type = "button"
                onClick = {handleClick}
                className={systemCondition?s.system_condition_icon_on:s.system_condition_icon_off} 
            >
                <PowerIcon width = {36} height = {36} />
            </button>
        </div>
    );
}
export default SecuritySystem;