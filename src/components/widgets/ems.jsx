import s from "./ems.module.css";
import PropTypes from "prop-types";

function EMS(){
    const handleClick = () =>{
        alert("SENDING SOS TO ALL OF YOUR EMERGENCY CONTACTS...");
        
    }   
    return(
        <div className={s.ems_container}>
            <h2 className={s.ems_title}>Send an emergency message / SOS to your contacts </h2>
            <button 
                type = "button"
                onClick = {handleClick}
                className={s.button}
            >
                Send SOS
            </button>

        </div>
    );
}
export default EMS;