// API
const API_ENDPOINT = 'https://yesno.wtf/api';

let data = [];
const key = "info";
JSON.stringify(data);
localStorage.setItem(key, JSON.stringify(data));

let btnAnswer = document.getElementById("button");
btnAnswer.addEventListener("click", function (event){
    event.preventDefault;
    

function fetchAnswer() {

    fetch("https://yesno.wtf/api")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let div = document.getElementById("answer");
        if (localStorage.getItem(key)){
        let tmp = JSON.parse(localStorage.getItem(key));
        tmp.forEach(elemento => {
            div.innerHTML += `<div>${elemento.answer}</div>`;
        });
    };
    div.innerHTML = data.tmp;
    }).catch( (error) => {   
        console.error("errror" + error);

        }); 
    
    }; 
    fetchAnswer();


}
);