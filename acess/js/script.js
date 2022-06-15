function desenhaTabela(){
    var people = [{
            name: 'Josivan Whesley',
            tel: '84 99999999',
            xp: true,
        },
        {
            name: 'Edvania Pereira',
            tel: '84 99991999',
            xp: true,
        },
        {
            name: 'João Arthur',
            tel: '84 99999999',
            xp: true,
        },
        {
            name: 'Juliane Silva',
            tel: '84 92229999',
            xp: false,
        },
    ]
    //person é o indice do array é apenas um número
    //people vai ser o objeto
    for (person in people) {
        // o style dá uma dinamicidade conforme a posição diferente da dinamicidade conforme o conteudo
        document.querySelector('table.list tbody').innerHTML +=
        `<tr style="background-color: ${((person % 2 == 0) ? '#fff' : '#eee')}"> 

        <td> ${people[person].name }</td>
        <td> ${people[person].tel }</td>
        <td> ${ (people[person].xp ? '<strong style="color:green"> Sim </strong>' : '<strong style="color:red"> Não </strong>' )}</td>
        <td>
            <button onclick="people.splice(${person}, )"> Excluir </button>
        </td>
        
        </tr>`
    }
}