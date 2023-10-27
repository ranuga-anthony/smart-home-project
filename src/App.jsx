import { Outlet } from "react-router-dom"
import "./App.css"
import NavIcon from "./components/nav-icon/nav-icon"
import Widget from "./components/widgets/widget";
import SecuritySystem from "./components/widgets/security-system";
import EMS from "./components/widgets/ems";
{/*import { ClerkProvider,SignedIn,SignedOut,RedirectToSignIn } from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
*/}
function App() {
  return (
    //<ClerkProvider publishableKey={clerkPubKey}>
     // <SignedIn>
        <div className="App">
          <div className="sidebar">
            <NavIcon route = "home"/>
            <NavIcon route = "settings"/>
            <NavIcon route = "statistics"/>
            <NavIcon route = "security"/>
          </div>
            
          <div className="widgets">
            <Widget/>
            <SecuritySystem/>
            <EMS/>
          </div>
          <Outlet/>
          
          
        </div>
       // </SignedIn>
      //<SignedOut>
        //<RedirectToSignIn />
      //</SignedOut>
    //</ClerkProvider>
        
    
      
    
      
  )
}

export default App
