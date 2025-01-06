import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const ui = document.getElementById("ui");
const root = createRoot(ui);
root.render(
    <StrictMode>
        <h1>Hello World</h1>
    </StrictMode>
);
