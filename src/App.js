import React, { useState } from "react";

function App() {
  // List of devices and their descriptions
  const devices = [
    { name: "Mobile Phone", description: "A portable device for communication and entertainment." },
    { name: "Laptop", description: "A portable computer suitable for all tasks." },
    { name: "Desktop", description: "A powerful computer for professional or gaming purposes." },
    { name: "Tablet", description: "A handheld touchscreen device for media consumption." },
  ];

  // State to track the clicked button
  const [clickedDevice, setClickedDevice] = useState(null);

  // Function to handle click and open a new tab
  const handleClick = (device) => {
    setClickedDevice(device.name);
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>${device.name}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 2rem;
              color: #333;
            }
            h1 {
              color: #007bff;
            }
            p {
              font-size: 1.2rem;
            }
          </style>
        </head>
        <body>
          <h1>${device.name}</h1>
          <p>${device.description}</p>
        </body>
      </html>
    `);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Electronic Device Information
      </h1>
      <div className="relative w-64 h-64 flex justify-center items-center">
        <div className="absolute w-full h-full animate-spin-slow">
          {devices.map((device, index) => (
            <div
              key={index}
              onClick={() => handleClick(device)}
              className={`cursor-pointer text-lg font-medium text-white 
                ${index === 0 ? 'bg-gradient-to-r from-pink-500 to-purple-600' :
                  index === 1 ? 'bg-gradient-to-r from-yellow-500 to-red-600' :
                    index === 2 ? 'bg-gradient-to-r from-green-500 to-teal-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'}
                hover:scale-110 px-6 py-3 rounded-full text-center transition-all duration-300 transform absolute`}
                style={{
                  animationDelay: `${(index * 0.2)}s`,
                  transformOrigin: 'center',
                  animation: `rotate-${index} 10s linear infinite`,
                }}
            >
              {device.name}
              {clickedDevice === device.name && <span className="ml-2 animate-pulse">🖐️</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
