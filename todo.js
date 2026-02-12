

export function todoPartie(){

    let lesTaches=[];

    const myinput=document.getElementById("input");
    const ajout=document.getElementById("ajouter");
    const liste=document.getElementById("list");

if (myinput==="") return;
if (ajout==="") return;
if (liste==="") return;

console.log(lesTaches);




    ajout.addEventListener('click',(e)=>{
        e.preventDefault();

const valeurs=myinput.value.trim();
if (valeurs==="") return;

lesTaches.push(valeurs);
const tacheli=document.createElement('li');
  tacheli.textContent=valeurs;

  tacheli.className = "bg-amber-500 rounded shadow mb-2 shadow-2xl";

    liste.appendChild(tacheli);

    

    myinput.value = '';

    });



}