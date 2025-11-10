// --- imported globals ---
import { $, render, template, html } from "../utils/globals.js";

// --- imported views ---
import { viewLogin } from "./viewLogin.js";

// --- view definition ---
export function viewWelcome() {
  template(html`
    <h1>Examen DWEC - SPA</h1>
    <p>Bienvenido/a. Pulsa para continuar al login.</p>
    <button id="btnStart">Continuar</button>
  `);

  $("#btnStart")?.addEventListener("click", () => render(viewLogin));
}
