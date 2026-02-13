

// if(.length === 0) {
//    list.innerHTML = '<p class="text-center text-gray-700">Pas de tâche pour aujourd\'hui ! 💪</p>';
// }

// PasDetaches()

export function create(valeurs) {

   const tacheli=document.createElement('li');
 
tacheli.className = "flex justify-between items-center bg-amber-500 rounded shadow mb-2 shadow-2xl p-2 gap-5";
const span=document.createElement("span");
span.textContent=valeurs;

const supprimer=document.createElement("button");
supprimer.innerHTML='<span class="material-symbols-outlined">delete</span>';
 
supprimer.addEventListener('click',()=>{
tacheli.remove();


});

   tacheli.appendChild(span);
    tacheli.appendChild(supprimer);

return tacheli;



}