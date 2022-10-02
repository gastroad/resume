import { createRoot } from "react-dom/client";
import "core-js";
import "regenerator-runtime/runtime";

import App from "./App"
import "./assets/css/reset.scss"
import "./assets/css/app.scss"
import React from "react";

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)
root.render(<React.StrictMode><App /></React.StrictMode >)

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );

