import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// React17 -> ReactDOM.render(<App />, document.getElementById("root"));

const root = createRoot(document.getElementById("root"));
root.render(<App />);
