

export function todoPartie(){

    let lesTaches=[];

    const myinput=document.getElementById("input");
    const ajout=document.getElementById("ajouter");
    const liste=document.getElementById("list");

if (myinput==="") return;
if (ajout==="") return;
if (liste==="") return;



    ajout.addEventListener('click',(e)=>{
        e.preventdefault();

const valeurs=myinput.value.trim();
if (valeurs==="") return;

lesTaches.push(valeurs);
const tacheli=document.createElement('li');
  tacheli.textContent=valeurs;

  li.className = "bg-amber-500 rounded shadow";

    liste.appendChild(tacheli);

    myinput.value = '';

    });



}