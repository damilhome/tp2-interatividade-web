const but = document.createElement("button");
but.textContent = "inserir";
but.setAttribute("onclick", "apertar()");
document.body.appendChild(but);

const ul = document.createElement("ul");
ul.setAttribute("id", "lista");
document.body.appendChild(ul);

function apertar(){
    const li = document.createElement("li");
    li.textContent = "nova entrada";
   document.getElementById("lista").appendChild(li);
}