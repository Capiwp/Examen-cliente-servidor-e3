// --- imported globals ---
import { $, render, template, html } from "../utils/globals.js";
// --- imported views ---
import { viewWelcome } from "./viewWelcome.js";
import { viewSummary } from "./viewSummary.js";
// --- view definition ---
export function viewDashboard() {
  // viewDashboard code ...
  template(html`
    <h1>Generador de tablas de multiplicar</h1>
    <p>Introduce el número base y el límite(1-100):</p>
    <input id="num1" type="number" />
    <input id="num2" type="number" />

    <div>
      <button id="btnGenerate">Generar tabla</button>
      <button id="btnExit">Salir</button>
    </div>
  `);
  $("#btnGenerate")?.addEventListener("click", () => {
    //  button generate code
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    const vals = [];
    if ((num1 > 100 || num1 < 0) && (num2 > 100 || num2 < 0)) {
      alert("Introduzca datos dentro del rango");
    } else {
      for (let i = num1; i < num2; i++) {
        vals.push(i);
      }
    }

    render(viewSummary);
  });

  $("#btnExit")?.addEventListener("click", () => {
    //  button exit code
    render(viewWelcome);
  });
}
