// --- imported globals ---
import { $, render, template, html } from "../utils/globals.js";
// --- imported views ---
import { viewWelcome } from "./viewWelcome.js";
import { viewDashboard } from "./viewDashboard.js";

// --- view definition ---
export function viewSummary() {
  // viewSummary code ...
 
  template(html`
      <h1>Resultado</h1>
      <ul id="lista"></ul>
      <button id="btnBack">Volver</button>
      <button id="btnExit">Salir</button>


    `)
  $("#btnBack")?.addEventListener("click", () => {
    // button back code ...
    render(viewDashboard)
  });

  $("#btnExit")?.addEventListener("click", () => {
    // button exit code ...
    render(viewWelcome)
  });
}
