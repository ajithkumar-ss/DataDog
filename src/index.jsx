import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Define the ID of the HTML element where you want to mount your React application
const root = "root";

// Use createRoot to render your app into the specified root element
createRoot(document.getElementById(root)).render(<App/>);
