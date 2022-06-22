var peopleRaw = localStorage.getItem('people')
if(peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
} else{
    var people = [];
}

function desenhaTabela(){
    
    currentLines = [...document.querySelectorAll('table.list tbody .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove()
    })
    //person é o indice do array é apenas um número
    //people vai ser o objeto
    for (person in people) {
        // o style dá uma dinamicidade conforme a posição diferente da dinamicidade conforme o conteudo
        document.querySelector("table.list tbody").innerHTML +=
        `<tr class="dinamic-content" style="background-color: ${((person % 2 == 0) ? '#fff' : '#eee')}"> 
        <td> ${people[person].name }</td>
        <td> ${people[person].tel }</td>
        <td> ${(people[person].xp ? '<strong style="color:green"> Sim </strong>' : '<strong style="color:red"> Não </strong>' )}</td>
        <td>
            <button onclick="deleteUser(${person})"> Excluir </button>
        </td>
        
        </tr>`
    }
}

function deleteUser(p){
    people.splice(p, 1); 
    desenhaTabela(); 
    localStorage.setItem('people', JSON.stringify(people))
}

desenhaTabela()

