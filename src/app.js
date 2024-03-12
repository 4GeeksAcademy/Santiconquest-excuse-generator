/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#random-excuse").innerHTML = generateExcuse();
  console.log("Hello");
};

let generateExcuse = () => {
  let sujeto = ["Mi perro ", "Mi compu ", "Mi auto ", "Mi vecino ", "Mi gato "];
  let accion = ["se desvanecio ", "se rompio ", "se cayo ", "se patino "];
  let exageracion = [
    "inesperadamente ",
    "totalmente ",
    "repentinamente ",
    "increiblemente ",
    "lamentablemente "
  ];
  let lugar = ["en mi casa", "en el supermercado", "en la calle", "en la ruta"];

  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let exageracionIndex = Math.floor(Math.random() * exageracion.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);

  return (
    sujeto[sujetoIndex] +
    accion[accionIndex] +
    exageracion[exageracionIndex] +
    lugar[lugarIndex]
  );
};
