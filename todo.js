
export function todoPartie(){

    let lesTaches=[];

    const myinput=document.getElementById("input");
    const ajout=document.getElementById("ajouter");
    const liste=document.getElementById("list");

if (myinput==="") return;
if (ajout==="") return;
if (liste==="") return;

const valeurs=myinput.value.trim();
if (valeurs==="") return;

lesTaches.push(valeurs);


    ajout.addEventListener('click',(e)=>{
        e.preventdefault();
    });



}