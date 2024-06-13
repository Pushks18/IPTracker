import { useEffect, useState } from "react";
import Map from "./components/Map";
import Search from "./components/Search";

function App() {
  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 19.032457562819086,
    lng: 73.06127655977461,
  });
  const [ISP, setISP] = useState("");
  const [postal, setPostal] = useState("");

  const hackDetails = async (ipAddress = "") => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.API_KEY
      }ipAddress=${ipAddress}`
    );
    const data = await res.json();
    setIPAddress(data.ip);
    setLocation(
      `${data.location.city}, ${data.location.region},${data.location.postal}, ${data.location.country}`
    );
    setTimezone(`UTC ${data.location.timezone}`);
    setCoordinates({ lat: data.location.lat, lng: data.location.lng });
    setISP(data.isp);
    setPostal(data.location.postalCode);
  };

  useEffect(() => {
    hackDetails();
  }, []);

  return (
    <div className="space-y-5 ">
      <div className="flex text-4xl font-medium items-center justify-center mt-5">
        IP Tracker
      </div>

      <div>
        <Search setIPAddress={setIPAddress} fetchLocation={hackDetails} />
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <button
          onClick={findIP}
          className="bg-black text-white border rounded-md px-4 py-2 border-whote-200"
        >
          Hack
        </button>
      </div> */}
      <div className="flex flex-col items-center justify-center">
        <HackedDetails
          ipAddress={IPAddress}
          location={location}
          timezone={timezone}
          isp={ISP}
          postal={postal}
        />
      </div>
      <Map coordinates={coordinates} />
    </div>
  );
}

function HackedDetails({ ipAddress, location, timezone, isp, postal }) {
  return (
    <div className="font-medium">
      <h1>IP Address: {ipAddress}</h1>
      <h1>Location: {location}</h1>
      <h1>Timezone: {timezone}</h1>
      <h1>ISP: {isp}</h1>
      <h1>Postal: {postal}</h1>
    </div>
  );
}

export default App;
