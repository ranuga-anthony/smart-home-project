import s from "./settings.module.css";
function Settings(){
    return (
        <div className="settings">
          <h1>Settings</h1>
          <br></br>
          <h2>General Settings</h2>
          <br></br>
          <h3>Account</h3>
          
          <div className={s.account_details}>
            Account 
            <br>
            </br>
            Details
            <br></br>
            <button 
            type="button"
            className={s.details_button}
            >
              Show account details
            </button>
          </div>

          <div className={s.configure}>
            Configure 
            <br>
            </br>
            Smart Home
            <br></br>
            <button 
            type="button"
            className={s.configure_button}
            >
              Configure Dashboard
            </button>
          </div>

          <div className={s.reset}>
            Reset<br></br> 
            Settings
            <br></br>
            <button 
            type="button"
            className={s.reset_button}
            >
              Reset
            </button>
          </div>

          <div className={s.footer}>
            powered by &copy;IntelliWare
          </div>
        </div>
      );
}
export default Settings