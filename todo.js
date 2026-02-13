import { create } from "./ui.js"; 

export function todoPartie(){

    let lesTaches=JSON.parse(localStorage.getItem("mesTaches")) ||[];

    const myinput=document.getElementById("input");
    const ajout=document.getElementById("ajouter");
    const liste=document.getElementById("list");

// if (myinput==="") return;
// if (ajout==="") return;
// if (liste==="") return;

console.log(lesTaches);

function afficher(){

liste.innerHTML=""
    if (lesTaches.length===0){
      
        liste.innerHTML='<p> Il faire quelques chose</p>';
   return;
    }
     lesTaches.forEach(valeur => {
        const li = create(valeur); // ta fonction ui.js
        liste.appendChild(li);
    });
}




    ajout.addEventListener('click',(e)=>{
        e.preventDefault();

const valeurs=myinput.value.trim();
if (valeurs==="") return;

lesTaches.push(valeurs);
afficher()




    

    myinput.value = '';

    });

afficher()

}