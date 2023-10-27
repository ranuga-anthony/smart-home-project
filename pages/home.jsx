import Header from "../src/components/header/header"
import LocationChip from "../src/components/location-chip/location-chip"
import SearchBar from "../src/components/search-bar/search-bar"
import DeviceCard from "../src/components/device-card/device-card"
import { useEffect,useState } from "react"


function Home(){

  const [devices,setDevices] = useState([])
  const [loading,setloading] = useState(true)
  
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchValue,setsearchValue] = useState("")

  const handleSearchType = (value) =>{
    setsearchValue(value)
    console.log(value)
  }

  useEffect(()=>{
    
    const getDevices = async () => {
      
      const response = await fetch(
        "https://smart-home-ui-api-production.up.railway.app/api/devices",
        {
          method : "GET",
          headers: { "Content-Type": "application/json" }
        }
        
      )
      const data = await response.json()
      console.log(data.data)
      setDevices(data.data)
      setloading(false)
    }
    getDevices()


  },[])

  const locations = ["All","Living Room","Bed Room"]

  

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleDeviceUpdate = (_id) => {
    setDevices((currentDevices) => {
      const updatedDevices = currentDevices.map((currentDevice) => {
        if (currentDevice._id === _id) {
          return {
            _id: currentDevice._id,
            name: currentDevice.name,
            image: currentDevice.image,
            location: currentDevice.location,
            state: !currentDevice.state,
          };
        }
        return currentDevice;
      });
      return updatedDevices;
    });
  };

  const filteredDevices =
    selectedLocation === "All"
      ? devices.filter((device) => {
        return (device.name
        .replace(" ","")
        .toLowerCase()
        .includes(searchValue)
        )
      })
      : devices.filter((device) => {
          return (device.location === selectedLocation && 
          device.name.replace(" ","").toLowerCase().includes(searchValue)
          )
        });


    return(
        <div className="home">
            <Header/>
            
            <div className="devices_section">
            <h1 className="devices_section_heading">Devices</h1>
            
            {/* Menu Bar */}
            <div className="menu-bar">
                <div className = "menubar_item_container">
                {locations.map((location,i)=>{
                    return <LocationChip
                    key = {i}
                    location = {location}
                    selectedLocation={selectedLocation}
                    handleLocationSelect={handleLocationSelect} />
                })}
                </div>
                <SearchBar handleSearchType = {handleSearchType} searchValue = {searchValue}/>
            </div>



            <div className="device_container">
                
                {!loading?
                (filteredDevices.map((device)=> {
                return( 
                <DeviceCard
                key = {device._id} 
                device = {device}
                handleDeviceUpdate = {handleDeviceUpdate}/>
                
                )
                })
                ):( 
                    <h4>Loading Devices...Please Wait!</h4>
                )}
                </div>
            </div>

            <div className="footer">
              powered by &copy;IntelliWare
            </div>
        </div>
    )
}
export default Home