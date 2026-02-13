import { create } from "./ui.js"; 

export function todoPartie(){

    let lesTaches=[];

    const myinput=document.getElementById("input");
    const ajout=document.getElementById("ajouter");
    const liste=document.getElementById("list");

// if (myinput==="") return;
// if (ajout==="") return;
// if (liste==="") return;

console.log(lesTaches);

function afficher(){


    if (lesTaches.length===0){
      
        liste.innerHTML='<p> Il faire quelques chose</p>';

    }
}




    ajout.addEventListener('click',(e)=>{
        e.preventDefault();

const valeurs=myinput.value.trim();
if (valeurs==="") return;

lesTaches.push(valeurs);

 const tacheli=create(valeurs); 

    liste.appendChild(tacheli);

    

    myinput.value = '';

    });


afficher()
}