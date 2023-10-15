let accessAllowed;
let age = prompt('¿Quieres tener hijos?');

if (age == "si"|| age == "sí" || age == "Sí" || age == "Si") {
  accessAllowed = "Continue viendo la página.";
} else {
  accessAllowed = "No vea la página, es irrelevante para usted.";
}

alert(accessAllowed);










let seleccion = document.querySelector("#hijos");
let parrafo = document.querySelector(".p");

seleccion.addEventListener("change", numerohijos);

function numerohijos() {
  let opcion = seleccion.value;

  switch (opcion) {
    case "1":
      parrafo.textContent =
        "Vida tranquila con solo un hijo bien consentido.";
      break;
    case "2":
      parrafo.textContent =
        "Tocará ahorrar el doble para poder mantener dos boquitas.";
      break;
    case "3":
      parrafo.textContent =
        "Mucha suerte educando a 3 chamacos, pero sí se puede.";
      break;
    case "masde3":
      parrafo.textContent =
        "Ni qué decir, les gusta chambear.";
      break;
    default:
      parrafo.textContent = "";
  }
}
