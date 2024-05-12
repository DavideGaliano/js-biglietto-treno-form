"use strict";

function calcolaPrezzo() {
  // Dati utente
  const km = document.getElementById("km").value;
  const eta = document.getElementById("eta").value;

  const prezzoBase = km * 0.21;
  const scontoUnder = 20;
  const scontoOver = 40;

  // Sconti
  let prezzoFinale;
  if (eta < 18) {
    prezzoFinale = prezzoBase - (prezzoBase * scontoUnder) / 100; // Sconto del 20%
  } else if (eta > 65) {
    prezzoFinale = prezzoBase - (prezzoBase * scontoOver) / 100; // Sconto del 40%
  } else {
    prezzoFinale = prezzoBase;
  }

  // Risultato
  document.getElementById(
    "prezzo"
  ).textContent = `Il prezzo del tuo biglietto è: €${prezzoFinale.toFixed(2)}`;
}
