import { createElement } from "react";

if(.length === 0) {
   list.innerHTML = '<p class="text-center text-gray-700">Pas de tâche pour aujourd\'hui ! 💪</p>';
}

PasDetaches()

export function create(valeurs) {

   const tacheli=document.createElement('li');
   tacheli.textContent=valeurs;
tacheli.className = "bg-amber-500 rounded shadow mb-2 shadow-2xl";
const spane=createElement("span");


return tacheli;



}