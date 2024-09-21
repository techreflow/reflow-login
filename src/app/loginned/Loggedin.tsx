"use client";
import { auth } from "@/auth";
import { doSignOut, getCookies, toProtect } from "../actions/help";
import { signOut } from "@/auth";
import { use, useEffect, useState } from "react";
import { signOutBtnFn, getAuth } from "../actions/help";
import ChartComponent from "./ChartComponent";
import { useSession, signIn, getSession } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";
import Cookies from "js-cookie";

// pages/dashboard.tsx

interface SensorDevice {
  id: number;
  name: string;
}

interface SensorReading {
  id: number;
  deviceId: number;
  timestamp: string;
  temperature: number;
  humidity: number;
}

interface ChartData {
  labels: string[];
  temperatures: number[];
}

export const Dashboard: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<SensorDevice | null>(
    null
  );
  const [sensorReadings, setSensorReadings] = useState<SensorReading[]>([]);

  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    temperatures: [],
  });

  // Mock data for sensor devices
  const sensorDevices: SensorDevice[] = [
    { id: 1, name: "Sensor Device 1" },
    { id: 2, name: "Sensor Device 2" },
    { id: 3, name: "Sensor Device 3" },
  ];

  // Mock data for sensor readings (replace with actual API fetch in real scenario)
  const mockSensorReadings: SensorReading[] = [
    {
      id: 1,
      deviceId: 1,
      timestamp: "2024-07-16T12:00:00Z",
      temperature: 25.5,
      humidity: 60,
    },
    {
      id: 2,
      deviceId: 1,
      timestamp: "2024-07-16T12:15:00Z",
      temperature: 26.0,
      humidity: 62,
    },
    {
      id: 3,
      deviceId: 2,
      timestamp: "2024-07-16T12:00:00Z",
      temperature: 23.8,
      humidity: 58,
    },
    {
      id: 4,
      deviceId: 2,
      timestamp: "2024-07-16T12:15:00Z",
      temperature: 24.2,
      humidity: 59,
    },
    {
      id: 5,
      deviceId: 3,
      timestamp: "2024-07-16T12:00:00Z",
      temperature: 24.7,
      humidity: 61,
    },
    {
      id: 6,
      deviceId: 3,
      timestamp: "2024-07-16T12:15:00Z",
      temperature: 25.0,
      humidity: 63,
    },
  ];

  const handleDeviceChange = (deviceId: number) => {
    const device = sensorDevices.find((device) => device.id === deviceId);
    if (device) {
      setSelectedDevice(device);
      // Filter mock sensor readings for selected device
      const readings = mockSensorReadings.filter(
        (reading) => reading.deviceId === deviceId
      );
      setSensorReadings(readings);

      // Prepare chart data
      const labels = readings.map((reading) => reading.timestamp);
      const temperatures = readings.map((reading) => reading.temperature);

      setChartData({
        labels,
        temperatures,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-white text-black">
      <div className="p-8 rounded-lg shadow-lg text-center w-full max-w-screen-xl">
        <h1 className="text-2xl font-bold mb-4">Sensor Dashboard</h1>
        <div className="mb-4">
          <label className="mr-2">Select Device:</label>
          <select
            title="Select Device"
            className="bg-white px-4 py-2 rounded-md shadow"
            value={selectedDevice ? selectedDevice.id.toString() : ""}
            onChange={(e) => handleDeviceChange(parseInt(e.target.value))}
          >
            <option value="">Select a device...</option>
            {sensorDevices.map((device) => (
              <option key={device.id} value={device.id.toString()}>
                {device.name}
              </option>
            ))}
          </select>
        </div>
        {selectedDevice && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold">{selectedDevice.name}</h2>
              <p className="text-sm">Sensor Readings</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full mb-8">
              {/* Chart Section (Replace with actual chart component) */}
              <div className="w-full h-full md:w-2/3 bg-white  rounded-lg shadow-lg p-4 mb-4">
                <h3 className="text-lg font-bold mb-2">Temperature Readings</h3>
                {/* Replace with actual chart component */}
                <ChartComponent data={chartData} />
                <div className="bg-white ml-6 h-64"></div>
              </div>
              {/* Table Section */}
              <div className="w-full md:w-1/3 bg-white h-ful  rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-bold mb-2">Recent Readings</h3>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2">Timestamp</th>
                      <th className="py-2">Temperature (°C)</th>
                      <th className="py-2">Humidity (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensorReadings.map((reading) => (
                      <tr key={reading.id}>
                        <td className="py-2">{reading.timestamp}</td>
                        <td className="py-2">
                          {reading.temperature.toFixed(1)}
                        </td>
                        <td className="py-2">{reading.humidity.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
}

export function SignOut() {
  return (
    <form action={signOutBtnFn}>
      <button type="submit"> sign Out</button>
    </form>
  );
}

const Loggedin: React.FC = () => {
  const session2 = useSession();
  if (!session2) {
    redirect("/login");
  }

  const [signOutUser, setSignOutUser] = useState<boolean>();

  const router = useRouter();
  const [session, setSession] = useState<any>("");

  const prompt = "say hello to all";
  // const [output,setOutput]=useState<string>("aam khata hai");
  // let output="aam khata hai kya nhi na";
  const [user, setUser] = useState<User | null>(null);
  const [working, setWorking] = useState("false");

  // const generateText=async()=>{
  //   try{
  //     const response=await fetch("/api/ai",{method:"POST",
  //       headers:{"Content-Type":"application/json"},
  //       body:JSON.stringify({prompt})});
  //     const data=await response.json();
  //     if(response.ok){
  //      output=data.output;
  //     }else{
  //       console.log("error");
  //     }

  //   }
  //   catch(e){
  //     console.log(e);
  // }}

  useEffect(() => {
    toProtect();
    router.refresh();
    getAuth().then((session) => {
      setSession(session);
      setUser(session?.user);
    });

    // generate
  }, [router]);

  // bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
  const environment = process.env.NODE_ENV;
  const local = process.env.LOCAL_DASHBOARD_URL;
  const dev = process.env.DEV_DASHBOARD_URL;

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen min-w-full bg-white text-black">
      {user ? (
        <>
          <h1 className="text-2xl mt-4 font-bold mb-4">
            Welcome, {user.firstName} {user.lastName}
          </h1>
        </>
      ) : null}
      {session?.user ? (
        working ? (
          <p className="text-2xl">
            {" "}
            <button
              title="redirect"
              className="text-white px-8 py-4 bg-black rounded-full text-xl font-semibold tracking-wide"
              onClick={() => {
                if (environment === "development") {
                  router.push(`http://localhost:3001?user=${Cookies.get("authToken")}`);
                } else {
                  router.push(`https://console.reflowtech.in/?user=${Cookies.get("authToken")}`);
                }
              }}
            >
              {" "}
              Proceed to Dashboard{" "}
            </button>
          </p>
        ) : (
          <Dashboard />
        )
      ) : (
        <p className="text-2xl">Loading...</p>
      )}
    </div>
  );
};

export default Loggedin;
