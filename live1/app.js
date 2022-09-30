

let myArray = ["Norma", "Berta", "Maria", "Luis", "Raquel", "Claudia",""];
let lista = document.getElementById("li");

let btn= document.getElementById("btn");
btn.addEventListener("click", function(e) {
    e.preventDefault();
        
    let palabra= document.getElementById("palabrauser").value;
    longitud(palabra, myArray);
    function longitud(p, lng){

        for(i=0; i<lng.length; i++){

        if (lng[i].length > p.length){
            console.log(lng[i]);
            lista.innerHTML += `<li>${lng[i]}</li>`;
        }//if

        }//for
    
    }//arre

});